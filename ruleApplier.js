module.exports = function(collectionOfSimpleTransformRules) {
    return {
        applyRules: function(inputWord, ruleToApplyIfNoRulesAreApplicable) {
            function doesRuleApplyToStem(rule) {
                return rule.applies(inputWord);
            }
            var applicableRules = collectionOfSimpleTransformRules.filter(doesRuleApplyToStem);
            if(applicableRules.isEmpty()) return ruleToApplyIfNoRulesAreApplicable(inputWord);
            function applyRuleToStem(rule) {
                return rule.apply(inputWord);
            }
            var resultCandidates = applicableRules.map(applyRuleToStem);
            if(resultCandidates.unique().length() != 1) {
                throw new Error(
                    "Multiple rules applied and gave different results for inputWord "+inputWord+"\n"+
                    applicableRules.map(function(rule, i) { return rule.toString() + " gave result: "+resultCandidates.get(i) }).join("\n")
                );
            }
            return resultCandidates.first();
        }
    }
}