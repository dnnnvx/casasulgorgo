import type { Role } from '#lib/contact.ts'
import type { Locale } from '#lib/i18n/locales.ts'
import { it } from '#lib/i18n/messages/it.ts'
import { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } from '$app/env/private'

const window = 60 * 60 * 1000
const perWindow = 5
const recent = new Map<string, number[]>()

/** Telegram refuses texts over 4096 characters; leave room for the header lines. */
const telegramMessageLength = 3500

type ContactMessage = {
	at: string
	locale: Locale
	role: Role
	name: string
	email: string
	message: string
}

/** Forwards a message to the Telegram chat; throws when Telegram is not set up or refuses it. */
export const deliverMessage = async (message: ContactMessage) => {
	if (!(TELEGRAM_TOKEN && TELEGRAM_CHAT_ID)) {
		throw new Error('TELEGRAM_TOKEN and TELEGRAM_CHAT_ID must be set to deliver contact messages')
	}
	const text = [
		'📬 Nuovo messaggio da Casa sul Gorgo',
		'',
		`Chi: ${it.contact.roles[message.role]}`,
		`Nome: ${message.name}`,
		`Email: ${message.email}`,
		`Lingua: ${message.locale}`,
		'',
		message.message.slice(0, telegramMessageLength)
	].join('\n')

	// Plain text (no parse_mode), so nothing the visitor writes can be read as formatting.
	const body = new URLSearchParams()
	body.set('chat_id', TELEGRAM_CHAT_ID)
	body.set('text', text)
	body.set('link_preview_options', '{"is_disabled":true}')

	const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
		method: 'POST',
		body,
		signal: AbortSignal.timeout(10_000)
	})
	if (!response.ok) {
		throw new Error(`Telegram answered ${response.status}: ${await response.text()}`)
	}
}

/** True once an address has sent too many messages in the last hour. */
export const tooMany = (address: string, now = Date.now()) => {
	const sent = (recent.get(address) ?? []).filter((at) => now - at < window)
	if (sent.length >= perWindow) {
		return true
	}
	recent.set(address, [...sent, now])
	return false
}
