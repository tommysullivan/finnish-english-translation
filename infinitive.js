module.exports = function(infinitiveWord, collectionOfVerbConfigurations, wordFactory) {
    function getDesiredVerbConfiguration(infinitiveWord) {
        return collectionOfVerbConfigurations.filter(function(row) { return row[0]==infinitiveWord.toString(); }).first();
    }
    return {
        getStrongStem: function() {
            return wordFactory.createWord(getDesiredVerbConfiguration(infinitiveWord)[1]);
        },
        getWeakStem: function() {
            return wordFactory.createWord(getDesiredVerbConfiguration(infinitiveWord)[2]);
        },
        getStemForPerfectConjugation: function() {
            const doubleStem = getDesiredVerbConfiguration(infinitiveWord)[3];
            return wordFactory.createWord(doubleStem!=undefined ? doubleStem : this.getStrongStem(infinitiveWord));
        },
        toString: infinitiveWord.toString,
        contains: infinitiveWord.contains,
        charFromEnd: infinitiveWord.charFromEnd,
        endsWith: infinitiveWord.endsWith,
        last: infinitiveWord.last,
        equals: infinitiveWord.equals
    }
}