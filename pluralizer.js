module.exports = function(complexityAnalyzer, ruleApplier) {
    function ruleToApplyIfNoRulesAreApplicable(stem) {
        return stem + 't';
    }
    return {
        pluralize: function(stem) { 
            return ruleApplier.applyRules(stem, ruleToApplyIfNoRulesAreApplicable)
        },
        complexity: complexityAnalyzer.complexity,
        numTopLevelRules: complexityAnalyzer.numTopLevelRules
    }
}