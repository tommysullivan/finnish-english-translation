var collections = require('collections');
var Collection = collections.Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var RuleApplier = require('./ruleApplier.js');
var ComplexityAnalyzer = require('./complexityAnalyzer');
var RuleLoader = require('./ruleLoader');
var RuleThatAppendsString = require('./ruleThatAppendsString');
var RuleDecorator = require('./ruleDecorator');
var PresentTenseConjugator = require('./presentTenseConjugator');
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
        createPresentTenseConjugator: function() {
            var stemRulesFileContent = fs.readFileSync('./configuration/stem-rules.json');
            var arrayOfVerbConfigurations = JSON.parse(stemRulesFileContent);
            var collectionOfVerbConfigurations = Collection(arrayOfVerbConfigurations);
            return PresentTenseConjugator(collectionOfVerbConfigurations);
        }
    }
}