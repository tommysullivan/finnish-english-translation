module.exports = function(Collection, SimpleTransformRule, fs) {
    return {
        loadRules: function (simpleTransformRulesPath) {
            const simpleTransformRulesFileContent = fs.readFileSync(simpleTransformRulesPath);
            const simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
            const collectionOfArraysOfSuffices = new Collection(simpleTransformRulesJSONArray);
            function changeInnerArrayToSimpleTransformRule(arrayOfPreAndPostSuffix) {
                const oldSuffix = arrayOfPreAndPostSuffix[0];
                const newSuffix = arrayOfPreAndPostSuffix[1];
                return new SimpleTransformRule(oldSuffix, newSuffix);
            }
            return collectionOfArraysOfSuffices.map(changeInnerArrayToSimpleTransformRule);
        }
    }
}