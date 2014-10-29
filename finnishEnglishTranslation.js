var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var RuleApplier = require('./ruleApplier.js');
var ComplexityAnalyzer = require('./complexityAnalyzer');
var RuleLoader = require('./ruleLoader');
var Stemifier = require('./stemifier');
var RuleThatAppendsStringAfterNestedRule = require('./ruleThatAppendsStringAfterNestedRule');
var fs = require('fs');

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs);
    }
    return {
        createPluralizer: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/plural-rules.json');
            function addTAppendBehaviorToRule(rule) {
                return RuleThatAppendsStringAfterNestedRule(rule, 't');
            }
            collectionOfSimpleTransformRules = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule);
            return Pluralizer(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules));
        },
        createStemifier: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules('./configuration/stem-rules.json');
            return Stemifier(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules));
        }
    }
}