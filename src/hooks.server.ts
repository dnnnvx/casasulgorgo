import type { Handle } from '@sveltejs/kit/hooks'
import { defaultLocale, isLocale, localeTags } from '#lib/i18n/locales.ts'

/** Sets <html lang> from the URL's locale segment. */
export const handle: Handle = ({ event, resolve }) => {
	const [, first = ''] = event.url.pathname.split('/')
	const locale = isLocale(first) ? first : defaultLocale
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="it-IT">', `<html lang="${localeTags[locale]}">`)
	})
}
