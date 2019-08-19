import { Character } from '../../src/Character';
import { Collection } from 'collections';
import { Predicates } from '../../src/Predicates';

export const createCharacter = (charString: string) => new Character(charString, new Collection(['a', 'e']), new Predicates());
