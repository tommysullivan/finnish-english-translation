var fs = require('fs');

var Collection = require('collections').Collection;
var SimpleTransformRule = require('./simpleTransformRule');
var Pluralizer = require('./pluralizer');
var RuleApplier = require('./ruleApplier.js');
var ComplexityAnalyzer = require('./complexityAnalyzer');
var RuleLoader = require('./ruleLoader');
var RuleThatAppendsString = require('./ruleThatAppendsString');
var RuleDecorator = require('./ruleDecorator');
var PresentTenseConjugator = require('./presentTenseConjugator');
var Predicates = require('./predicates');
var Infinitive = require('./infinitive');
var PerfectTenseConjugator = require('./perfectTenseConjugator');
var ImperfectTenseConjugator = require('./imperfectTenseConjugator');
var ParticipleHelper = require('./participleHelper');
var PluperfectTenseConjugator = require('./pluperfectTenseConjugator');
var Word = require('./word');
var Character = require('./character');
var Pronoun = require('./pronoun');

var pluralRulesPath = './configuration/plural-rules.json';
var stemRulesPath = './configuration/stem-rules.json';

var firstPersonPronounCollection = Collection(['minä','me']);
var secondPersonPronounCollection = Collection(['sinä','te']);
var pluralPronounCollection = Collection(['me','te','he']);
var toBeInfinitiveString = 'olla';
var vowelCollection = Collection(['a','e','i','o','u','y','ä','ö']);
var space = ' ';
var emptyString = '';
var pluralEndingLetter = 't';

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs);
    }
    function createParticipleHelper() {
        return ParticipleHelper();
    }
    return {
        createPluralizer: function() {
            var collectionOfSimpleTransformRules = createRuleLoader().loadRules(pluralRulesPath);
            var ruleThatAppendsT = RuleThatAppendsString(pluralEndingLetter);
            function addTAppendBehaviorToRule(rule) {
                return RuleDecorator(rule, ruleThatAppendsT);
            }
            collectionOfSimpleTransformRules = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule);
            return Pluralizer(ComplexityAnalyzer(collectionOfSimpleTransformRules), RuleApplier(collectionOfSimpleTransformRules, ruleThatAppendsT));
        },
        createPresentTenseConjugator: function() {
            return PresentTenseConjugator(this.createToBeInfinitive(), space, emptyString);
        },
        createPerfectTenseConjugator: function() {
            return PerfectTenseConjugator(this.createPresentTenseConjugator(), createParticipleHelper(), this.createToBeInfinitive(), space);
        },
        createImperfectTenseConjugator: function() {
            return ImperfectTenseConjugator(createParticipleHelper(), space);
        },
        createPluperfectTenseConjugator: function() {
            return PluperfectTenseConjugator(this.createImperfectTenseConjugator(), createParticipleHelper(), this.createToBeInfinitive(), space);
        },
        createToBeInfinitive: function() {
            return this.createInfinitive(toBeInfinitiveString);  
        },
        createInfinitive: function(infinitiveString) {
            var stemRulesFileContent = fs.readFileSync(stemRulesPath);
            var arrayOfVerbConfigurations = JSON.parse(stemRulesFileContent);
            var collectionOfVerbConfigurations = Collection(arrayOfVerbConfigurations);
            return Infinitive(this.createWord(infinitiveString), collectionOfVerbConfigurations, this);
        },
        createChar: function(char) {
            return Character(char, vowelCollection, Predicates());
        },
        createWord: function(wordString) {
            return Word(wordString, this, this);
        },
        createPronoun: function(pronounString) {
            return Pronoun(pronounString, pluralPronounCollection, firstPersonPronounCollection, secondPersonPronounCollection);
        }
    }
}