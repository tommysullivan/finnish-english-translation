module.exports = function(collectionOfVerbConfigurations) {
    return {
        conjugate: function(infinitive, pronoun) {
            pronoun = pronoun.toLowerCase();
            function conjugateStem(strongStem, weakStem, pronoun) {
                var endsInDa = infinitive.substring(infinitive.length-2) == 'da'
                var letterToAppendToThirdPerson = endsInDa ? '' : strongStem.charAt(strongStem.length-1);
                var aToUse = strongStem.indexOf('ä')!=-1 ? 'ä' : 'a';
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