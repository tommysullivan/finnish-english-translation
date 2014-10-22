var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var fs = require('fs');

module.exports = function() {
    return {
        createPluralizer: function() {
            var simpleTransformRulesFileContent = fs.readFileSync('./configuration/simple-transform-rules.json');
            var simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
            var simpleTransformRulesCollection = Collection(simpleTransformRulesJSONArray);
            function mapperFunction(arrayOfPreAndPostSuffix) {
                return SimpleTransformRule(arrayOfPreAndPostSuffix[0], arrayOfPreAndPostSuffix[1]); 
            }
            var rulesCollection = simpleTransformRulesCollection.map(mapperFunction);
            return Pluralizer(rulesCollection);
        },
        stemPluralPairs: function() {
            var stemPluralPairsFileContent = fs.readFileSync('./configuration/stem-plural-pairs.json');
            return JSON.parse(stemPluralPairsFileContent);
        }
    }
}