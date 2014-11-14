module.exports = function(presentTenseConjugator, infinitiveHelper, string, noWordConjugator) {
    function getSecondParticiple(infinitive, pronoun) {
        var stem = infinitiveHelper.getStemForPerfectConjugation(infinitive);
        var vowelToUseInSingularEnding = string.endsWith(infinitive, 'a') ? 'u' : 'y';
        var firstLetterOfEnding = string.charFromEnd(infinitive, 2) == 'l' ? 'll' : 'n'
        var ending = pronoun=='me' || pronoun=='te' || pronoun=='he' 
            ? firstLetterOfEnding + 'eet' 
            : firstLetterOfEnding + vowelToUseInSingularEnding + 't';
        return stem + ending;
    }
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = presentTenseConjugator.conjugate('olla', pronoun);
            return conjugatedToBeVerb + ' ' + getSecondParticiple(infinitive, pronoun);
        },
        conjugateNegation: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var participle = getSecondParticiple(infinitive, pronoun);
            return noWordConjugator.conjugateNoWord(pronoun)+' ole '+participle;
        }
    }
}