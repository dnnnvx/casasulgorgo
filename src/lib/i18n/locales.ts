/** Supported languages, in the order they appear in the language switch. */
export const locales = ['it', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'it'

/** A value written once per language. */
export type Localized<T = string> = Record<Locale, T>

export const localeNames: Localized = { it: 'Italiano', en: 'English' }

/** BCP 47 tags used for `lang`, `hreflang` and date formatting. */
export const localeTags: Localized = { it: 'it-IT', en: 'en-GB' }

export const isLocale = (value: string): value is Locale =>
	(locales as readonly string[]).includes(value)

/** Prefixes an app path ("/nature") with the locale ("/en/nature"). */
export const localize = (locale: Locale, path = '/') =>
	path === '/' ? `/${locale}` : `/${locale}${path}`

/** Swaps the locale segment of a pathname, keeping the rest of the path. */
export const switchLocale = (pathname: string, locale: Locale) => {
	const [, first = '', ...rest] = pathname.split('/')
	return isLocale(first)
		? localize(locale, rest.length > 0 ? `/${rest.join('/')}` : '/')
		: `/${locale}`
}

/** Picks the best supported locale from an Accept-Language header. */
export const negotiate = (header: string | null): Locale => {
	const ranked = (header ?? '')
		.split(',')
		.map((part) => {
			const [tag = '', q = 'q=1'] = part.trim().split(';')
			return { lang: tag.slice(0, 2).toLowerCase(), q: Number(q.split('=')[1] ?? 1) }
		})
		.sort((a, b) => b.q - a.q)
	return ranked.map((r) => r.lang).find(isLocale) ?? defaultLocale
}
