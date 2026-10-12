import { createContext } from 'svelte'
import { type Locale, type Localized, localize } from './locales.ts'
import { en } from './messages/en.ts'
import { it, type Messages } from './messages/it.ts'

export const messages: Record<Locale, Messages> = { it, en }

/** Everything a component needs to speak the current language. */
export type I18n = {
	readonly locale: Locale
	readonly m: Messages
	/** Picks the current language from a localized value. */
	t: <T>(value: Localized<T>) => T
	/** Turns an app path ("/nature") into a localized URL ("/it/nature"). */
	path: (to?: string) => string
}

export const [getI18n, setI18n] = createContext<I18n>()

/** Builds an i18n object that follows a (possibly changing) locale. */
export const i18n = (current: () => Locale): I18n => ({
	get locale() {
		return current()
	},
	get m() {
		return messages[current()]
	},
	t: (value) => value[current()],
	path: (to) => localize(current(), to)
})
