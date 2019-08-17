const fs = require('fs');

const Collection = require('collections').Collection;
const SimpleTransformRule = require('./simpleTransformRule');
const Pluralizer = require('./pluralizer');
const RuleApplier = require('./ruleApplier');
const ComplexityAnalyzer = require('./complexityAnalyzer');
const RuleLoader = require('./ruleLoader');
const RuleThatAppendsString = require('./ruleThatAppendsString');
const RuleDecorator = require('./ruleDecorator');
const PresentTenseConjugator = require('./presentTenseConjugator');
const Predicates = require('./predicates');
const Infinitive = require('./infinitive');
const PerfectTenseConjugator = require('./perfectTenseConjugator');
const ImperfectTenseConjugator = require('./imperfectTenseConjugator');
const ParticipleHelper = require('./participleHelper');
const PluperfectTenseConjugator = require('./pluperfectTenseConjugator');
const Word = require('./word');
const Character = require('./character');
const Pronoun = require('./pronoun');

const pluralRulesPath = './configuration/plural-rules.json';
const stemRulesPath = './configuration/stem-rules.json';

const firstPersonPronounCollection = Collection(['minä','me']);
const secondPersonPronounCollection = Collection(['sinä','te']);
const pluralPronounCollection = Collection(['me','te','he']);
const toBeInfinitiveString = 'olla';
const vowelCollection = Collection(['a','e','i','o','u','y','ä','ö']);
const space = ' ';
const emptyString = '';
const pluralEndingLetter = 't';

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs);
    }
    function createParticipleHelper() {
        return ParticipleHelper();
    }
    return {
        createPluralizer: function() {
            const collectionOfSimpleTransformRules = createRuleLoader().loadRules(pluralRulesPath);
            const ruleThatAppendsT = RuleThatAppendsString(pluralEndingLetter);
            function addTAppendBehaviorToRule(rule) {
                return RuleDecorator(rule, ruleThatAppendsT);
            }
            const rulesWithTAppendBehaviorAdded = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule);
            return Pluralizer(ComplexityAnalyzer(
                rulesWithTAppendBehaviorAdded), 
                RuleApplier(rulesWithTAppendBehaviorAdded, ruleThatAppendsT
            ))
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
            const stemRulesFileContent = fs.readFileSync(stemRulesPath);
            const arrayOfVerbConfigurations = JSON.parse(stemRulesFileContent);
            const collectionOfVerbConfigurations = Collection(arrayOfVerbConfigurations);
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