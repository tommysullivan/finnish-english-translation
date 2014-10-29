module.exports = function(complexityAnalyzer, ruleApplier) {
    function ruleToApplyIfNoRulesAreApplicable(infinitive) {
        return infinitive + '-default-stemify-here';
    }
    return {
        stemify: function(infinitive) { 
            return ruleApplier.applyRules(infinitive, ruleToApplyIfNoRulesAreApplicable);
        },
        complexity: complexityAnalyzer.complexity,
        numTopLevelRules: complexityAnalyzer.numTopLevelRules
    }
}