const name = 'Gorgo della Sposa'
const lat = 45.021_363_142_474_55
const lon = 11.428_251_804_279_137
const coordinates = `${lat},${lon}`

/** Where the gorgo is. */
export const place = { name, lat, lon }

/** Links that open the gorgo in a map app. */
export const mapLinks = {
	google: `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
	apple: `https://maps.apple.com/?ll=${coordinates}&q=${encodeURIComponent(name)}`,
	openStreetMap: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`
}
