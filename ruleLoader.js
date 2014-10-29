module.exports = function(Collection, SimpleTransformRule, fs) {
    return {
        loadRules: function (simpleTransformRulesPath) {
            var simpleTransformRulesFileContent = fs.readFileSync(simpleTransformRulesPath);
            var simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
            var collectionOfArraysOfSuffices = Collection(simpleTransformRulesJSONArray);
            function changeInnerArrayToSimpleTransformRule(arrayOfPreAndPostSuffix) {
                //this gets called once for each nested array in the array of arrays
                var oldSuffix = arrayOfPreAndPostSuffix[0];
                var newSuffix = arrayOfPreAndPostSuffix[1];
                return SimpleTransformRule(oldSuffix, newSuffix); //this is the new element in the "mapped" result collection
            }
            return collectionOfArraysOfSuffices.map(changeInnerArrayToSimpleTransformRule);
        }
    }
}