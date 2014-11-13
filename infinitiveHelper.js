module.exports = function(collectionOfVerbConfigurations) {
    function getDesiredVerbConfiguration(infinitive) {
        return collectionOfVerbConfigurations.filter(function(row) { return row[0]==infinitive; }).first();
    }
    return {
        getStrongStem: function(infinitive) {
            return getDesiredVerbConfiguration(infinitive)[1];
        },
        getWeakStem: function(infinitive) {
            return getDesiredVerbConfiguration(infinitive)[2];
        },
        getStemForPerfectConjugation: function(infinitive) {
            var doubleStem = getDesiredVerbConfiguration(infinitive)[3];
            return doubleStem!=undefined ? doubleStem : this.getStrongStem(infinitive);
        }
    }
}