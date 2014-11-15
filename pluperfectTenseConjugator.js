module.exports = function(imperfectTenseConjugator, participleHelper, noWordConjugator) {
    var toBeInfinitive = 'olla';
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = imperfectTenseConjugator.conjugate(toBeInfinitive, pronoun);
            return conjugatedToBeVerb + ' ' + participleHelper.getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return noWordConjugator.conjugateNoWord(pronoun)+' '+participleHelper.getSecondParticiple(toBeInfinitive, pronoun)+' '+participle;
        }
    }
}