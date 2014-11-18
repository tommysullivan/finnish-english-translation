module.exports = function() {
    return {
        getSecondParticiple: function(infinitive, pronoun) {
            var stem = infinitive.getStemForPerfectConjugation();
            var vowelToUseInSingularEnding = infinitive.endsWith('a') ? 'u' : 'y';
            var firstLetterOfEnding = infinitive.charFromEnd(2).equals('l') ? 'll' : 'n'
            var ending = pronoun=='me' || pronoun=='te' || pronoun=='he' 
                ? firstLetterOfEnding + 'eet' 
                : firstLetterOfEnding + vowelToUseInSingularEnding + 't';
            return stem.concat(ending);
        }
    }
}