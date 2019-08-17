import expect from 'expect'
import { createCharacter } from './createCharacter'
export const expectChar = (char:string) => expect(createCharacter(char).isVowel())
