import { redirect } from '@sveltejs/kit'
import { isLocale, negotiate } from '#lib/i18n/locales.ts'
import type { RequestHandler } from './$types'

/** The bare domain sends visitors to the language they picked, else the browser's, else Italian. */
export const GET: RequestHandler = ({ request, cookies }) => {
	const saved = cookies.get('locale') ?? ''
	const locale = isLocale(saved) ? saved : negotiate(request.headers.get('accept-language'))
	redirect(307, `/${locale}`)
}
