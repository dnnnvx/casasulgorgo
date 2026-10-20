import { about } from './about.ts'
import { common } from './common.ts'
import { contact } from './contact.ts'
import { home } from './home.ts'
import { nature } from './nature.ts'
import { seasonsPage } from './seasons.ts'
import { visit } from './visit.ts'

/** Italian interface text. Its shape is the contract every other language follows. */
export const it = { ...common, home, nature, seasonsPage, visit, about, contact }

export type Messages = typeof it
