module.exports = function(infinitiveHelper, string) {
    return {
        conjugate: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            var strongStem = infinitiveHelper.getStrongStem(infinitive);
            var weakStem = infinitiveHelper.getWeakStem(infinitive)
            var endsInDa = string.endsWith(infinitive, 'da') || string.endsWith(infinitive, 'dä'); 
            var letterToAppendToThirdPerson = endsInDa && string.isVowel(string.charFromEnd(infinitive, 3))
                ? '' 
                : infinitive == 'olla'
                    ? 'n' 
                    : string.last(strongStem);
            var aToUse = string.contains(strongStem, 'ä') || string.contains(strongStem, 'ö') ? 'ä' : 'a';
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
            var stemInNegation = infinitiveHelper.getWeakStem(infinitive);
            switch(pronoun){
                case 'minä': return 'en '+stemInNegation;
                case 'sinä': return 'et '+stemInNegation;
                case 'me': return 'emme '+stemInNegation;
                case 'te': return 'ette '+stemInNegation;
                case 'he': return 'eivät '+stemInNegation;
                default: return 'ei '+stemInNegation;
            }
            
        }
    }
}