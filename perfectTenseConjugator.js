module.exports = function(presentTenseConjugator, infinitiveHelper, string) {
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = presentTenseConjugator.conjugate('olla', pronoun);
            var stem = infinitiveHelper.getStemForPerfectConjugation(infinitive);
            var vowelToUseInSingularEnding = string.endsWith(infinitive, 'a') ? 'u' : 'y';
            var firstLetterOfEnding = string.charFromEnd(infinitive, 2) == 'l' ? 'll' : 'n'
            var ending = pronoun=='me' || pronoun=='te' || pronoun=='he' 
                ? firstLetterOfEnding + 'eet' 
                : firstLetterOfEnding + vowelToUseInSingularEnding + 't';
            return conjugatedToBeVerb + ' ' + stem + ending;
        },
        conjugateNegation: function(infinitive, pronoun) {
            
        }
    }
}