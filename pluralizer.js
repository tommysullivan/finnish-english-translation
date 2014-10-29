module.exports = function(complexityAnalyzer, ruleApplier) {
    return {
        pluralize: function(stem) { 
            return ruleApplier.applyRules(stem);
        },
        complexity: complexityAnalyzer.complexity,
        numTopLevelRules: complexityAnalyzer.numTopLevelRules
    }
}