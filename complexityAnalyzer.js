module.exports = function(collectionOfSimpleTransformRules) {
    return {
        complexity: function() {
            return collectionOfSimpleTransformRules.map(function(rule) { return rule.complexity() }).fold(function(a,b) { return a + b }, 0);
        },
        numTopLevelRules: function() {
            return collectionOfSimpleTransformRules.length();
        }
    }
}