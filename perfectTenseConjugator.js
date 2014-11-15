module.exports = function(presentTenseConjugator, participleHelper, noWordConjugator) {
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = presentTenseConjugator.conjugate('olla', pronoun);
            return conjugatedToBeVerb + ' ' + participleHelper.getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return noWordConjugator.conjugateNoWord(pronoun)+' ole '+participle;
        }
    }
}