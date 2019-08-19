import FinnishEnglishTranslation from '../../FinnishEnglishTranslation';
import expect from "expect"

export const expectConjugation = (infinitiveString:string, pronounString:string, expected:string, conjugate:any) => {
    describe(`and pronoun is ${pronounString}`, () => {
        it(`should be ${expected}`, () => {
            const infinitive = FinnishEnglishTranslation().createInfinitive(infinitiveString);
            const pronoun = FinnishEnglishTranslation().createPronoun(pronounString);
            expect(conjugate(infinitive, pronoun)).toBe(expected);
        });
    });
};
