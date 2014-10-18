var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var fs = require('fs');

module.exports = {
    Pluralizer: function() {
        var simpleTransformRulesFileContent = fs.readFileSync('./configuration/simple-transform-rules.json');
        var simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
        var simpleTransformRulesInstanceArray = simpleTransformRulesJSONArray.map(function(arrayOfPreAndPostSuffix) {
            return SimpleTransformRule(arrayOfPreAndPostSuffix[0], arrayOfPreAndPostSuffix[1]); 
        });
        var rulesCollection = Collection(simpleTransformRulesInstanceArray);
        return Pluralizer(rulesCollection);
    },
    stemPluralPairs: function() {
        var stemPluralPairsFileContent = fs.readFileSync('./configuration/stem-plural-pairs.json');
        return JSON.parse(stemPluralPairsFileContent);
    }
}