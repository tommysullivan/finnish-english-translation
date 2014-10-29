var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var RuleApplier = require('./ruleApplier.js');
var ComplexityAnalyzer = require('./complexityAnalyzer');
var RuleLoader = require('./ruleLoader');
var Stemifier = require('./stemifier');
var RuleThatAppendsStringAfterNestedRule = require('./ruleThatAppendsStringAfterNestedRule');
var DoNothingRule = require('./doNothingRule');
var fs = require('fs');

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs);
    }
    return {
        createPluralizer: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/plural-rules.json');
            var pluralizationLetter = 't';
            function addTAppendBehaviorToRule(rule) {
                return RuleThatAppendsStringAfterNestedRule(rule, pluralizationLetter);
            }
            collectionOfSimpleTransformRules = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule);
            var ruleToApplyIfNoRulesAreApplicable = RuleThatAppendsStringAfterNestedRule(DoNothingRule(), pluralizationLetter);
            return Pluralizer(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules, ruleToApplyIfNoRulesAreApplicable));
        },
        createStemifier: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/stem-rules.json');
            return Stemifier(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules, DoNothingRule()));
        }
    }
}