import { fail } from '@sveltejs/kit'
import { isRole, limits } from '#lib/contact.ts'
import { deliverMessage, tooMany } from '#lib/server/inbox.ts'
import type { Actions } from './$types'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const field = (data: FormData, name: string) => {
	const value = data.get(name)
	return typeof value === 'string' ? value.trim() : ''
}

export const actions = {
	default: async ({ request, params, getClientAddress }) => {
		const data = await request.formData()

		// People never see the "website" field; bots fill it in. Pretend it worked.
		if (field(data, 'website')) {
			return { sent: true }
		}

		const role = field(data, 'role')
		const values = {
			role: isRole(role) ? role : 'other',
			name: field(data, 'name'),
			email: field(data, 'email'),
			message: field(data, 'message')
		} as const

		const errors = {
			name: values.name.length === 0 || values.name.length > limits.name,
			email: values.email.length > limits.email || !emailPattern.test(values.email),
			message:
				values.message.length < limits.message.min || values.message.length > limits.message.max
		}
		if (errors.name || errors.email || errors.message) {
			return fail(400, { values, errors, problem: 'invalid' as const })
		}

		if (tooMany(getClientAddress())) {
			return fail(429, { values, errors, problem: 'throttled' as const })
		}

		try {
			await deliverMessage({ at: new Date().toISOString(), locale: params.locale, ...values })
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: the server log is the only place a lost message shows up
			console.error('Could not send a contact message to Telegram', error)
			return fail(500, { values, errors, problem: 'failed' as const })
		}
		return { sent: true }
	}
} satisfies Actions
