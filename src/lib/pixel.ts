export type Run = { x: number; y: number; w: number; h?: number; c: string };

export type Sprite = { rows: string[]; palette: Record<string, string> };

/** Turns a text sprite into horizontal runs of same-colored pixels. */
export function sprite({ rows, palette }: Sprite, ox = 0, oy = 0): Run[] {
	const runs: Run[] = [];
	rows.forEach((row, y) => {
		let x = 0;
		while (x < row.length) {
			const ch = row[x];
			const c = palette[ch];
			let w = 1;
			while (row[x + w] === ch) w++;
			if (c) runs.push({ x: ox + x, y: oy + y, w, c });
			x += w;
		}
	});
	return runs;
}

/** Pixel ellipse, one run per row. */
export function ellipse(cx: number, cy: number, rx: number, ry: number, c: string): Run[] {
	const runs: Run[] = [];
	for (let dy = -ry; dy <= ry; dy++) {
		const hw = Math.round(rx * Math.sqrt(1 - (dy / (ry + 0.5)) ** 2));
		runs.push({ x: cx - hw, y: cy + dy, w: hw * 2 + 1, c });
	}
	return runs;
}

/** Skyline from a height function, merging equal neighbouring columns. */
export function skyline(width: number, base: number, top: (x: number) => number, c: string): Run[] {
	const runs: Run[] = [];
	for (let x = 0; x < width; x++) {
		const y = Math.round(top(x));
		const last = runs.at(-1);
		if (last && last.y === y) last.w++;
		else runs.push({ x, y, w: 1, h: base - y, c });
	}
	return runs;
}
