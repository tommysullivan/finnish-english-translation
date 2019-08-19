import { FinnishEnglishTranslation } from '../../FinnishEnglishTranslation';
import expect from "expect"
import { Conjugate } from './Conjugate';

export const expectConjugation = (infinitiveString:string, pronounString:string, expected:string, conjugate:Conjugate) => {
    describe(`and pronoun is ${pronounString}`, () => {
        it(`should be ${expected}`, () => {
            const infinitive = new FinnishEnglishTranslation().createInfinitive(infinitiveString);
            const pronoun = new FinnishEnglishTranslation().createPronoun(pronounString);
            expect(conjugate(infinitive, pronoun)).toBe(expected);
        });
    });
};
