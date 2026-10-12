import { defineParams } from '@sveltejs/kit/params'
import { isLocale } from '#lib/i18n/locales.ts'
import { isGroup } from '#lib/nature/groups.ts'

export const params = defineParams({
	locale: (param) => (isLocale(param) ? param : undefined),
	group: (param) => (isGroup(param) ? param : undefined)
})
