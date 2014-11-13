module.exports = function(presentTenseConjugator, infinitiveHelper) {
    return {
        conjugate: function(infinitive, pronoun) {
            var conjugatedToBeVerb = presentTenseConjugator.conjugate('olla', pronoun);
            var stem = infinitiveHelper.getStrongStem(infinitive);
            var ending = pronoun=='me' || pronoun=='te' || pronoun=='he' ? 'neet' : 'nut'; //TODO: dots or y
            return conjugatedToBeVerb + ' ' + stem + ending;
        },
        conjugateNegation: function(infinitive, pronoun) {
            
        }
    }
}