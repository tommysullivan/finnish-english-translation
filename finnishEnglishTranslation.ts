import fs from "fs"
import { Collection } from "collections"
import { ComplexityAnalyzer } from "./ComplexityAnalyzer"
import { ImperfectTenseConjugator } from "./ImperfectTenseConjugator"
import { Infinitive } from "./Infinitive"
import { ParticipleHelper } from "./ParticipleHelper"
import { PerfectTenseConjugator } from "./PerfectTenseConjugator"
import { Pronoun } from "./Pronoun"
import { SimpleTransformRule } from "./SimpleTransformRule"
import { Pluralizer } from "./Pluralizer"
import { PluperfectTenseConjugator } from "./PluperfectTenseConjugator"
import { Predicates } from "./Predicates"

const RuleApplier = require('./ruleApplier')
const RuleLoader = require('./ruleLoader')
const RuleThatAppendsString = require('./ruleThatAppendsString')
const RuleDecorator = require('./ruleDecorator')
const PresentTenseConjugator = require('./presentTenseConjugator')
const Word = require('./word')
const Character = require('./character').default

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
        return new ParticipleHelper()
    }
    return {
        createPluralizer: function() {
            const collectionOfSimpleTransformRules = createRuleLoader().loadRules(pluralRulesPath)
            const ruleThatAppendsT = RuleThatAppendsString(pluralEndingLetter)
            function addTAppendBehaviorToRule(rule:any) {
                return RuleDecorator(rule, ruleThatAppendsT)
            }
            const rulesWithTAppendBehaviorAdded = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule)
            return new Pluralizer(
                new ComplexityAnalyzer(
                    rulesWithTAppendBehaviorAdded), 
                    RuleApplier(rulesWithTAppendBehaviorAdded, ruleThatAppendsT
                )
            )
        },
        createPresentTenseConjugator: function() {
            return PresentTenseConjugator(this.createToBeInfinitive(), space, emptyString)
        },
        createPerfectTenseConjugator: function() {
            return new PerfectTenseConjugator(this.createPresentTenseConjugator(), createParticipleHelper(), this.createToBeInfinitive())
        },
        createImperfectTenseConjugator: function() {
            return new ImperfectTenseConjugator(createParticipleHelper(), space)
        },
        createPluperfectTenseConjugator: function() {
            return new PluperfectTenseConjugator(
                this.createImperfectTenseConjugator(), 
                createParticipleHelper(),
                this.createToBeInfinitive()
            )
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
            return Character(char, vowelCollection, new Predicates())
        },
        createWord: function(wordString:string) {
            return Word(wordString, this, this)
        },
        createPronoun: function(pronounString:string) {
            return new Pronoun(
                pronounString,
                pluralPronounCollection,
                firstPersonPronounCollection,
                secondPersonPronounCollection
            )
        }
    }
}