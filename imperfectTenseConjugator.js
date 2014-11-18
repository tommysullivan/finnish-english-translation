module.exports = function(participleHelper, space) {
    return {
        conjugate: function(infinitive, pronoun) {
            if(pronoun.isSingular()) {
                if(pronoun.isFirstPerson()) return 'olin';
                if(pronoun.isSecondPerson()) return 'olit';
                return 'oli';
            }
            else {
                if(pronoun.isFirstPerson()) return 'olimme';
                if(pronoun.isSecondPerson()) return 'olitte';
                return 'olivat';
            }
        },
        conjugateNegation: function(infinitive, pronoun) {
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return pronoun.getNoWord()+space+participle;
        }
    }
}