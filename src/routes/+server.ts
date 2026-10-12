import { redirect } from '@sveltejs/kit'
import { negotiate } from '#lib/i18n/locales.ts'
import type { RequestHandler } from './$types'

/** The bare domain sends visitors to their language, Italian by default. */
export const GET: RequestHandler = ({ request }) =>
	redirect(307, `/${negotiate(request.headers.get('accept-language'))}`)
