module.exports = function(imperfectTenseConjugator, participleHelper, toBeInfinitive, space) {
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = imperfectTenseConjugator.conjugate(toBeInfinitive, pronoun);
            return conjugatedToBeVerb + space + participleHelper.getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return pronoun.getNoWord()+space+participleHelper.getSecondParticiple(toBeInfinitive, pronoun)+space+participle;
        }
    }
}