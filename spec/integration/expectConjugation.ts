import FinnishEnglishTranslation from '../../finnishEnglishTranslation';

export const expectConjugation = (infinitiveString, pronounString, expected, conjugate) => {
    describe(`and pronoun is ${pronounString}`, () => {
        it(`should be ${expected}`, () => {
            const infinitive = FinnishEnglishTranslation().createInfinitive(infinitiveString);
            const pronoun = FinnishEnglishTranslation().createPronoun(pronounString);
            expect(conjugate(infinitive, pronoun)).toBe(expected);
        });
    });
};
