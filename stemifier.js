module.exports = function(collectionOfSimpleTransformRules) {
    return {
        stemify: function(infinitive) {
            function doesRuleApplyToStem(rule) {
                return rule.applies(stem);
            }
            var applicableRules = collectionOfSimpleTransformRules.filter(doesRuleApplyToStem);
            //if(applicableRules.isEmpty()) return stem + 't';
            
            function applyRuleToStem(rule) {
                return rule.apply(stem)+'t';
            }
            var plurals = applicableRules.map(applyRuleToStem);
            if(plurals.unique().length() != 1) {
                throw new Error(
                    "Multiple rules applied and gave different results for stem "+stem+"\n"+
                    applicableRules.map(function(rule, i) { return rule.toString() + " gave result: "+plurals.get(i) }).join("\n")
                );
            }
            return plurals.first(); 
        }
    }
}