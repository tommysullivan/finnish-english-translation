module.exports = function(collectionOfSimpleTransformRules) {
    return {
        pluralize: function(stem) { 
            function doesRuleApplyToStem(rule) {
                return rule.applies(stem);
            }
            var applicableRules = collectionOfSimpleTransformRules.filter(doesRuleApplyToStem);
            if(applicableRules.isEmpty()) return stem + 't';
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
        },
        complexity: function() {
            return collectionOfSimpleTransformRules.map(function(rule) { return rule.complexity() }).fold(function(a,b) { return a + b }, 0);
        },
        numTopLevelRules: function() {
            return collectionOfSimpleTransformRules.length();
        }
    }
}