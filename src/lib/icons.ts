/** SVG path for a circle, so every icon can be a single path. */
const circle = (cx: number, cy: number, r: number) =>
	`M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`

/** 24×24 line icons, drawn with a round 1.8px stroke. */
export const icons = {
	arrowRight: 'M5 12h14M13 6l6 6-6 6',
	arrowLeft: 'M19 12H5M11 6l-6 6 6 6',
	leaf: 'M5 19C5 11 10 5 19 5c0 9-6 14-14 14zM5 19l7-7',
	paw: `M12 13c-3 0-5 2.6-5 4.6S9.2 20 12 20s5-.4 5-2.4S15 13 12 13z${circle(7, 10, 1.6)}${circle(10, 6.5, 1.6)}${circle(14, 6.5, 1.6)}${circle(17, 10, 1.6)}`,
	flower: `${circle(12, 9, 2)}${circle(12, 5, 2)}${circle(16, 9, 2)}${circle(12, 13, 2)}${circle(8, 9, 2)}M12 15v6M12 19c-2 0-3.5-1-4.5-2.5`,
	pin: `M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z${circle(12, 10, 2)}`,
	clock: `${circle(12, 12, 8)}M12 8v4l3 2`,
	sun: `${circle(12, 12, 4)}M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4`,
	auto: `${circle(12, 12, 8)}M12 4a8 8 0 0 1 0 16z`,
	moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z',
	dawn: 'M3 18h18M7 18a5 5 0 0 1 10 0M12 10V4M9.5 6.5 12 4l2.5 2.5',
	dusk: 'M3 18h18M7 18a5 5 0 0 1 10 0M12 4v6M9.5 7.5 12 10l2.5-2.5',
	car: `M5 16v-4l2-5h10l2 5v4zM3 12h18${circle(8, 17, 1.6)}${circle(16, 17, 1.6)}`,
	bike: `${circle(6, 16, 3.5)}${circle(18, 16, 3.5)}M6 16l4-7h5l3 7M10 9l3 7M14 6h2`,
	train:
		'M7 4h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM5 11h14M8 20l-1.5 1.5M16 20l1.5 1.5M9 14h.01M15 14h.01',
	walk: `${circle(13, 4.5, 1.5)}M10 21l2-6 3 3v3M12 15l1-6-3 2-1 3M13 9l3 3h2`,
	binoculars: `${circle(7, 16, 3.5)}${circle(17, 16, 3.5)}M7 12.5V6h3v8M17 12.5V6h-3v8M10 10h4`,
	route: `${circle(6, 18, 2)}${circle(18, 6, 2)}M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6`,
	quiet: 'M4 9h4l5-4v14l-5-4H4zM17 9l4 6M21 9l-4 6',
	ban: `${circle(12, 12, 8)}M6.5 6.5l11 11`,
	fish: 'M3 12c3-4 8-5 12-2l4-3v10l-4-3c-4 3-9 2-12-2zM8 11.5h.01',
	trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
	droplet: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
	backpack: 'M7 9a5 5 0 0 1 10 0v11H7zM9 20v-5h6v5M10 4h4',
	info: `${circle(12, 12, 8)}M12 11v5M12 8h.01`,
	calendar: 'M5 6h14v14H5zM5 10h14M9 3v4M15 3v4',
	globe: `${circle(12, 12, 8)}M4 12h16M12 4c2.5 2.5 2.5 13.5 0 16M12 4c-2.5 2.5-2.5 13.5 0 16`,
	menu: 'M4 7h16M4 12h16M4 17h16',
	close: 'M6 6l12 12M18 6 6 18',
	check: 'M5 12l5 5 9-10',
	parking: 'M6 4h12v16H6zM10 16V8h3a2 2 0 0 1 0 4h-3',
	mail: 'M4 6h16v12H4zM4 7l8 6 8-6'
} as const

export type IconName = keyof typeof icons
