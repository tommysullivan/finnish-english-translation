import { expectVowel } from './expectVowel';
import { expectConsonant } from './expectConsonant';

describe('Character', () => {
   describe('isVowel', () => {
        describe('and we check if a is a vowel', () => {
            it('returns true', () => {
                expectVowel('a')
            })
        }) 
        describe('and we check if e is a vowel', () => {
            it('returns true', () => {
                expectVowel('e')
            })
        }) 
        describe('and we check if f is a vowel', () => {
            it('returns false', () => {
                expectConsonant('f')
            })
        }) 
    }) 
})