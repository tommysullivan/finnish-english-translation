import Character from '../../Character';
import { Collection } from 'collections';
import Predicates from '../../predicates';

export const createCharacter = (charString: string) => Character(charString, new Collection(['a', 'e']), Predicates());
