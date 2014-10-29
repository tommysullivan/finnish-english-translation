module.exports = function(nestedRule, stringToAppendAfterApplicationOfRule) {
    return {
        applies: nestedRule.applies,
        apply: function(stem) {
            return nestedRule.apply(stem)+stringToAppendAfterApplicationOfRule;
        },
        toString: function() {
            return "RuleThatAppendsStringAfterNestedRule "+nestedRule.toString();
        },
        complexity: nestedRule.complexity
    }
}