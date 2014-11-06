module.exports = function(collectionOfVerbConfigurations, string) {
    return {
        conjugate: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            function conjugateStem(strongStem, weakStem, pronoun) {
                var endsInDa = string.endsWith(infinitive, 'da') || string.endsWith(infinitive, 'dä'); 
                var letterToAppendToThirdPerson = endsInDa && string.isVowel(string.charFromEnd(infinitive, 3)) ? '' : string.last(strongStem);
                var aToUse = string.contains(strongStem, 'ä') || string.contains(strongStem, 'ö') ? 'ä' : 'a';
                switch(pronoun) {
                    case 'minä': return weakStem + 'n';
                    case 'sinä': return weakStem + 't';
                    case 'me': return weakStem + 'mme';
                    case 'te': return weakStem + 'tte';
                    case 'he': return strongStem + 'v'+aToUse+'t';
                    default: return strongStem + letterToAppendToThirdPerson; 
                }
            }
            var desiredVerbConfiguration = collectionOfVerbConfigurations.filter(function(row) { return row[0]==infinitive; }).first();
            return conjugateStem(desiredVerbConfiguration[1], desiredVerbConfiguration[2], pronoun);
        }
    }
}