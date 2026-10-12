import { today } from '#lib/seasons.ts'
import type { LayoutServerLoad } from './$types'

// "Today" comes from the server, so the page and its hydration agree on the date.
export const load: LayoutServerLoad = () => ({ today: today() })
