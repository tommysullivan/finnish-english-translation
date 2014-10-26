var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var fs = require('fs');

module.exports = function(configurationPath) {
    return {
        createPluralizer: function() {
            var simpleTransformRulesFileContent = fs.readFileSync(configurationPath+'/configuration/simple-transform-rules.json');
            var simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
            var collectionOfArraysOfSuffices = Collection(simpleTransformRulesJSONArray);
            function changeInnerArrayToSimpleTransformRule(arrayOfPreAndPostSuffix) {
                //this gets called once for each nested array in the array of arrays
                var oldSuffix = arrayOfPreAndPostSuffix[0];
                var newSuffix = arrayOfPreAndPostSuffix[1];
                return SimpleTransformRule(oldSuffix, newSuffix); //this is the new element in the "mapped" result collection
            }
            var collectionOfSimpleTransformRules = collectionOfArraysOfSuffices.map(changeInnerArrayToSimpleTransformRule);
            return Pluralizer(collectionOfSimpleTransformRules);
        }
    }
}