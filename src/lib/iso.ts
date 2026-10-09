import type { Run } from './pixel.ts';

export type Point = [x: number, y: number];
export type Point3 = [x: number, y: number, z: number];
export type Faces = { top?: string; left?: string; right?: string };

/** Deterministic 0..1 noise for an integer cell, used for texture and dithering. */
export function hash(x: number, y: number): number {
	let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
	h = Math.imul(h ^ (h >>> 13), 1274126177);
	return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** Colours a screen rectangle pixel by pixel, merging equal neighbours into runs. */
export function paint(
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	color: (x: number, y: number) => string | undefined
): Run[] {
	const runs: Run[] = [];
	for (let y = y0; y < y1; y++) {
		let last: Run | undefined;
		for (let x = x0; x < x1; x++) {
			const c = color(x, y);
			if (!c) last = undefined;
			else if (last?.c === c) last.w++;
			else {
				last = { x, y, w: 1, c };
				runs.push(last);
			}
		}
	}
	return runs;
}

/** Fills a screen polygon: a pixel is in when its centre is (even-odd rule). */
export function polygon(pts: Point[], c: string): Run[] {
	const ys = pts.map((p) => p[1]);
	const runs: Run[] = [];
	for (let y = Math.floor(Math.min(...ys)); y < Math.ceil(Math.max(...ys)); y++) {
		const cy = y + 0.5;
		const xs: number[] = [];
		pts.forEach((a, i) => {
			const b = pts[(i + 1) % pts.length];
			if (a[1] <= cy !== b[1] <= cy) xs.push(a[0] + ((cy - a[1]) * (b[0] - a[0])) / (b[1] - a[1]));
		});
		xs.sort((a, b) => a - b);
		for (let i = 0; i + 1 < xs.length; i += 2) {
			const x0 = Math.ceil(xs[i] - 0.5);
			const w = Math.ceil(xs[i + 1] - 0.5) - x0;
			if (w > 0) runs.push({ x: x0, y, w, c });
		}
	}
	return runs;
}

/** Pixel ellipse lit from the upper left, with dithered highlight and shadow. */
export function blob(
	cx: number,
	cy: number,
	rx: number,
	ry: number,
	[hi, mid, lo]: string[]
): Run[] {
	return paint(cx - rx, cy - ry, cx + rx + 1, cy + ry + 1, (x, y) => {
		const dx = (x - cx) / (rx + 0.5);
		const dy = (y - cy) / (ry + 0.5);
		if (dx * dx + dy * dy > 1) return;
		const l = dx + dy * 0.7 + (hash(x, y) - 0.5) * 0.6;
		return l < -0.5 ? hi : l > 0.45 ? lo : mid;
	});
}

/**
 * 2:1 pixel isometric projection. World x runs to the lower right, y to the
 * lower left, z up; (ox, oy) is where the world origin lands on screen.
 */
export function isometric(ox: number, oy: number) {
	const at = (x: number, y: number, z = 0): Point => [ox + x - y, oy + (x + y) / 2 - z];

	/** The world point on plane z seen through the centre of screen pixel (sx, sy). */
	const ground = (sx: number, sy: number, z = 0): Point => {
		const u = sx + 0.5 - ox;
		const v = 2 * (sy + 0.5 - oy + z);
		return [(v + u) / 2, (v - u) / 2];
	};

	const quad = (pts: Point3[], c: string) =>
		polygon(
			pts.map((p) => at(...p)),
			c
		);

	/** An axis-aligned box; only the three faces facing the viewer are drawn. */
	const box = (x: number, y: number, z: number, w: number, d: number, h: number, f: Faces) => [
		...(f.left
			? quad(
					[
						[x, y + d, z],
						[x + w, y + d, z],
						[x + w, y + d, z + h],
						[x, y + d, z + h]
					],
					f.left
				)
			: []),
		...(f.right
			? quad(
					[
						[x + w, y, z],
						[x + w, y + d, z],
						[x + w, y + d, z + h],
						[x + w, y, z + h]
					],
					f.right
				)
			: []),
		...(f.top
			? quad(
					[
						[x, y, z + h],
						[x + w, y, z + h],
						[x + w, y + d, z + h],
						[x, y + d, z + h]
					],
					f.top
				)
			: [])
	];

	return { at, ground, quad, box };
}
