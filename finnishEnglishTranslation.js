var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var RuleApplier = require('./ruleApplier.js');
var ComplexityAnalyzer = require('./complexityAnalyzer');
var RuleLoader = require('./ruleLoader');
var Stemifier = require('./stemifier');
var RuleThatAppendsString = require('./ruleThatAppendsString');
var DoNothingRule = require('./doNothingRule');
var RuleDecorator = require('./ruleDecorator');
var fs = require('fs');

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs);
    }
    return {
        createPluralizer: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/plural-rules.json');
            var ruleThatAppendsT = RuleThatAppendsString('t');
            function addTAppendBehaviorToRule(rule) {
                return RuleDecorator(rule, ruleThatAppendsT);
            }
            collectionOfSimpleTransformRules = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule);
            return Pluralizer(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules, ruleThatAppendsT));
        },
        createStemifier: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/stem-rules.json');
            return Stemifier(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules, DoNothingRule()));
        }
    }
}