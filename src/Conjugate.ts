import { Infinitive } from './Infinitive'
import { Pronoun } from './Pronoun'

export type Conjugate = (i: Infinitive, p: Pronoun) => string