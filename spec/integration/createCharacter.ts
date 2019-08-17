import Character from '../../character';
import { Collection } from 'collections';
import Predicates from '../../predicates';
export const createCharacter = (charString: string) => Character(charString, Collection(['a', 'e']), Predicates());
