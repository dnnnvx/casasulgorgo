import type { Messages } from '../it/index.ts'
import { about } from './about.ts'
import { common } from './common.ts'
import { contact } from './contact.ts'
import { home } from './home.ts'
import { nature } from './nature.ts'
import { seasonsPage } from './seasons.ts'
import { visit } from './visit.ts'

export const en: Messages = { ...common, home, nature, seasonsPage, visit, about, contact }
