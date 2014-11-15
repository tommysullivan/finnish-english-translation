module.exports = function(infinitiveHelper, string) {
    return {
        getSecondParticiple: function(infinitive, pronoun) {
            var stem = infinitiveHelper.getStemForPerfectConjugation(infinitive);
            var vowelToUseInSingularEnding = string.endsWith(infinitive, 'a') ? 'u' : 'y';
            var firstLetterOfEnding = string.charFromEnd(infinitive, 2) == 'l' ? 'll' : 'n'
            var ending = pronoun=='me' || pronoun=='te' || pronoun=='he' 
                ? firstLetterOfEnding + 'eet' 
                : firstLetterOfEnding + vowelToUseInSingularEnding + 't';
            return stem + ending;
        }
    }
}