module.exports = function(noWordConjugator, participleHelper) {
    return {
        conjugate: function(infinitive, pronoun) {
            switch(pronoun) {
                case 'minä': return 'olin';
                case 'sinä': return 'olit';
                case 'me': return 'olimme';
                case 'te': return 'olitte';
                case 'he': return 'olivat';
                default: return 'oli'
            }
        },
        conjugateNegation: function(infinitive, pronoun) {
            var participle = participleHelper.getSecondParticiple(infinitive, pronoun);
            return noWordConjugator.conjugateNoWord(pronoun)+' '+participle;
        }
    }
}