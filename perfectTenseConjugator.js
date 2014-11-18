module.exports = function(presentTenseConjugator, participleHelper, noWordConjugator, toBeInfinitive, space) {
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = presentTenseConjugator.conjugate(toBeInfinitive, pronoun);
            return conjugatedToBeVerb + space + participleHelper.getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return noWordConjugator.conjugateNoWord(pronoun) + space + toBeInfinitive.getWeakStem() + space + participle;
        }
    }
}