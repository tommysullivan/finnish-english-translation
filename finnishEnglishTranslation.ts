import fs from "fs"
import { Collection } from "collections"
import { ComplexityAnalyzer } from "./complexityAnalyzer"
import { ImperfectTenseConjugator } from "./imperfectTenseConjugator"
import { Infinitive } from "./infinitive"

const SimpleTransformRule = require('./simpleTransformRule')
const Pluralizer = require('./pluralizer')
const RuleApplier = require('./ruleApplier')
const RuleLoader = require('./ruleLoader')
const RuleThatAppendsString = require('./ruleThatAppendsString')
const RuleDecorator = require('./ruleDecorator')
const PresentTenseConjugator = require('./presentTenseConjugator')
const Predicates = require('./predicates')
const PerfectTenseConjugator = require('./perfectTenseConjugator')
const ParticipleHelper = require('./participleHelper')
const PluperfectTenseConjugator = require('./pluperfectTenseConjugator')
const Word = require('./word')
const Character = require('./character').default
const Pronoun = require('./pronoun')

const pluralRulesPath = './configuration/plural-rules.json'
const stemRulesPath = './configuration/stem-rules.json'

const firstPersonPronounCollection = new Collection(['minä','me'])
const secondPersonPronounCollection = new Collection(['sinä','te'])
const pluralPronounCollection = new Collection(['me','te','he'])
const toBeInfinitiveString = 'olla'
const vowelCollection = new Collection(['a','e','i','o','u','y','ä','ö'])
const space = ' '
const emptyString = ''
const pluralEndingLetter = 't'

module.exports = function() {
    function createRuleLoader() {
        return RuleLoader(Collection, SimpleTransformRule, fs)
    }
    function createParticipleHelper() {
        return ParticipleHelper()
    }
    return {
        createPluralizer: function() {
            const collectionOfSimpleTransformRules = createRuleLoader().loadRules(pluralRulesPath)
            const ruleThatAppendsT = RuleThatAppendsString(pluralEndingLetter)
            function addTAppendBehaviorToRule(rule:any) {
                return RuleDecorator(rule, ruleThatAppendsT)
            }
            const rulesWithTAppendBehaviorAdded = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule)
            return Pluralizer(new ComplexityAnalyzer(
                rulesWithTAppendBehaviorAdded), 
                RuleApplier(rulesWithTAppendBehaviorAdded, ruleThatAppendsT
            ))
        },
        createPresentTenseConjugator: function() {
            return PresentTenseConjugator(this.createToBeInfinitive(), space, emptyString)
        },
        createPerfectTenseConjugator: function() {
            return PerfectTenseConjugator(this.createPresentTenseConjugator(), createParticipleHelper(), this.createToBeInfinitive(), space)
        },
        createImperfectTenseConjugator: function() {
            return new ImperfectTenseConjugator(createParticipleHelper(), space)
        },
        createPluperfectTenseConjugator: function() {
            return PluperfectTenseConjugator(this.createImperfectTenseConjugator(), createParticipleHelper(), this.createToBeInfinitive(), space)
        },
        createToBeInfinitive: function() {
            return this.createInfinitive(toBeInfinitiveString)  
        },
        createInfinitive: function(infinitiveString:any) {
            const stemRulesFileContent = fs.readFileSync(stemRulesPath).toString()
            const arrayOfVerbConfigurations = JSON.parse(stemRulesFileContent)
            const collectionOfVerbConfigurations = new Collection(arrayOfVerbConfigurations)
            return new Infinitive(this.createWord(infinitiveString), collectionOfVerbConfigurations, this)
        },
        createChar: function(char:string) {
            return Character(char, vowelCollection, Predicates())
        },
        createWord: function(wordString:string) {
            return Word(wordString, this, this)
        },
        createPronoun: function(pronounString:string) {
            return Pronoun(pronounString, pluralPronounCollection, firstPersonPronounCollection, secondPersonPronounCollection)
        }
    }
}