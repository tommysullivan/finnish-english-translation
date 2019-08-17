module.exports = function(toBeInfinitive, space, emptyString) {
    return {
        conjugate: function(infinitive, pronoun) {
            const strongStem = infinitive.getStrongStem();
            const weakStem = infinitive.getWeakStem()
            const endsInDa = infinitive.endsWith('da') || infinitive.endsWith('dä'); 
            const letterToAppendToThirdPerson = endsInDa && infinitive.charFromEnd(3).isVowel()
                ? emptyString 
                : infinitive.equals(toBeInfinitive)
                    ? 'n' 
                    : strongStem.last();
            const aToUse = strongStem.contains('ä') || strongStem.contains('ö') ? 'ä' : 'a';
            if(pronoun.isSingular()) {
                if(pronoun.isFirstPerson()) return weakStem + 'n';
                if(pronoun.isSecondPerson()) return weakStem + 't';
                return strongStem + letterToAppendToThirdPerson; 
            }
            else {
                if(pronoun.isFirstPerson()) return weakStem + 'mme';
                if(pronoun.isSecondPerson()) return weakStem + 'tte';
                return strongStem + 'v'+aToUse+'t';
            }
        },
        conjugateNegation: function(infinitive, pronoun) {
            const stemInNegation = infinitive.getWeakStem();
            return pronoun.getNoWord(pronoun)+space+stemInNegation;
            
        }
    }
}