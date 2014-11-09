module.exports = function(collectionOfVerbConfigurations) {
    return {
        getDesiredVerbConfiguration: function (infinitive) {
            return collectionOfVerbConfigurations.filter(function(row) { return row[0]==infinitive; }).first();
        },
        getStrongStem: function(infinitive) {
            return this.getDesiredVerbConfiguration(infinitive)[1];
        },
        getWeakStem: function(infinitive) {
            return this.getDesiredVerbConfiguration(infinitive)[2];
        }
    }
}