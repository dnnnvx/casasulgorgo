import { locales, localeTags, localize } from '#lib/i18n/locales.ts'
import { catalog } from '#lib/nature/catalog.ts'
import { groups } from '#lib/nature/groups.ts'
import { groupPath, speciesPath } from '#lib/nature/labels.ts'
import { siteUrl } from '#lib/site.ts'
import type { RequestHandler } from './$types'

/** Every page, once per language, each listing its translations. */
export const GET: RequestHandler = () => {
	const paths = [
		'/',
		'/nature',
		'/seasons',
		'/visit',
		...groups.map(groupPath),
		...catalog.map(speciesPath)
	]
	const urls = paths.flatMap((path) =>
		locales.map((locale) => {
			const alternates = locales
				.map(
					(alt) =>
						`<xhtml:link rel="alternate" hreflang="${localeTags[alt]}" href="${siteUrl}${localize(alt, path)}"/>`
				)
				.join('')
			return `<url><loc>${siteUrl}${localize(locale, path)}</loc>${alternates}</url>`
		})
	)
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
	return new Response(xml, { headers: { 'content-type': 'application/xml' } })
}
