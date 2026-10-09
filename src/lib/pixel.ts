export type Run = { x: number; y: number; w: number; h?: number; c: string }

export type Sprite = { rows: string[]; palette: Record<string, string> }

/** Turns a text sprite into horizontal runs of same-colored pixels. */
export function sprite({ rows, palette }: Sprite, ox = 0, oy = 0): Run[] {
	const runs: Run[] = []
	rows.forEach((row, y) => {
		let x = 0
		while (x < row.length) {
			const ch = row.charAt(x)
			const c = palette[ch]
			let w = 1
			while (row[x + w] === ch) {
				w++
			}
			if (c) {
				runs.push({ x: ox + x, y: oy + y, w, c })
			}
			x += w
		}
	})
	return runs
}

/** Pixel ellipse, one run per row. */
export function ellipse(cx: number, cy: number, rx: number, ry: number, c: string): Run[] {
	const runs: Run[] = []
	for (let dy = -ry; dy <= ry; dy++) {
		const hw = Math.round(rx * Math.sqrt(1 - (dy / (ry + 0.5)) ** 2))
		runs.push({ x: cx - hw, y: cy + dy, w: hw * 2 + 1, c })
	}
	return runs
}
