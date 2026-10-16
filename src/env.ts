import { defineEnvVars } from '@sveltejs/kit/env'

const optional = (value: string | undefined) => value || undefined

export const variables = defineEnvVars({
	TELEGRAM_TOKEN: {
		description: 'Token of the Telegram bot that forwards contact form messages (from @BotFather).',
		schema: optional
	},
	TELEGRAM_CHAT_ID: {
		description: 'Chat (person or group) the Telegram bot sends contact form messages to.',
		schema: optional
	}
})
