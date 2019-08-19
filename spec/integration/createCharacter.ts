import { Character } from '../../Character';
import { Collection } from 'collections';
import { Predicates } from '../../Predicates';

export const createCharacter = (charString: string) => new Character(charString, new Collection(['a', 'e']), new Predicates());
