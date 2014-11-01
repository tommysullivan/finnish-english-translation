module.exports = function() {
    return {
        conjugate: function(infinitive,pronoun) {
            pronoun = pronoun.toLowerCase();
            function conjugateStem(strongStem, weakStem, pronoun) {
                var aToUse = strongStem.indexOf('ä')!=-1 ? 'ä' : 'a';
                if(pronoun=='minä') return weakStem + 'n';
                else if(pronoun=='sinä') return weakStem + 't';
                else if(pronoun=='me') return weakStem + 'mme';
                else if(pronoun=='te') return weakStem + 'tte';
                else if(pronoun=='he') return strongStem + 'v'+aToUse+'t';
                else return strongStem + aToUse;
            }
            if(infinitive=='elää') {
                return conjugateStem('elä', 'elä', pronoun);
            } else {
                return conjugateStem('souta', 'souda', pronoun);
            }
        }
    }
}