module.exports = function(noWordConjugator, toBeInfinitive, space, emptyString) {
    return {
        conjugate: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var strongStem = infinitive.getStrongStem();
            var weakStem = infinitive.getWeakStem()
            var endsInDa = infinitive.endsWith('da') || infinitive.endsWith('dä'); 
            var letterToAppendToThirdPerson = endsInDa && infinitive.charFromEnd(3).isVowel()
                ? emptyString 
                : infinitive.equals(toBeInfinitive)
                    ? 'n' 
                    : strongStem.last();
            var aToUse = strongStem.contains('ä') || strongStem.contains('ö') ? 'ä' : 'a';
            switch(pronoun) {
                case 'minä': return weakStem + 'n';
                case 'sinä': return weakStem + 't';
                case 'me': return weakStem + 'mme';
                case 'te': return weakStem + 'tte';
                case 'he': return strongStem + 'v'+aToUse+'t';
                default: return strongStem + letterToAppendToThirdPerson; 
            }
        },
        conjugateNegation: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var stemInNegation = infinitive.getWeakStem();
            return noWordConjugator.conjugateNoWord(pronoun)+space+stemInNegation;
            
        }
    }
}