import { Infinitive } from '../../infinitive';
import { Pronoun } from '../../Pronoun';
export type Conjugate = (i: Infinitive, p: Pronoun) => string;
