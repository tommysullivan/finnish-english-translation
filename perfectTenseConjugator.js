module.exports = function(presentTenseConjugator, participleHelper, toBeInfinitive, space) {
    return {
        conjugate: function(infinitive, pronoun) {
            const conjugatedToBeVerb = presentTenseConjugator.conjugate(toBeInfinitive, pronoun);
            return conjugatedToBeVerb + space + participleHelper.getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            const participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return pronoun.getNoWord() + space + toBeInfinitive.getWeakStem() + space + participle;
        }
    }
}