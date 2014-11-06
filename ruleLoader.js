module.exports = function(Collection, SimpleTransformRule, fs) {
    return {
        loadRules: function (simpleTransformRulesPath) {
            var simpleTransformRulesFileContent = fs.readFileSync(simpleTransformRulesPath);
            var simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
            var collectionOfArraysOfSuffices = Collection(simpleTransformRulesJSONArray);
            function changeInnerArrayToSimpleTransformRule(arrayOfPreAndPostSuffix) {
                var oldSuffix = arrayOfPreAndPostSuffix[0];
                var newSuffix = arrayOfPreAndPostSuffix[1];
                return SimpleTransformRule(oldSuffix, newSuffix);
            }
            return collectionOfArraysOfSuffices.map(changeInnerArrayToSimpleTransformRule);
        }
    }
}