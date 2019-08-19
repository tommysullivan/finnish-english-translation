import fs from "fs"
import { Collection } from "collections"
import { ComplexityAnalyzer } from "./ComplexityAnalyzer"
import { ImperfectTenseConjugator } from "./ImperfectTenseConjugator"
import { Infinitive } from "./Infinitive"
import { ParticipleHelper } from "./ParticipleHelper"
import { PerfectTenseConjugator } from "./PerfectTenseConjugator"
import { Pronoun } from "./Pronoun"
import { Pluralizer } from "./Pluralizer"
import { PluperfectTenseConjugator } from "./PluperfectTenseConjugator"
import { Predicates } from "./Predicates"
import { Character } from "./Character"
import { PresentTenseConjugator } from "./PresentTenseConjugator"
import { RuleApplier } from "./RuleApplier"
import { RuleDecorator } from "./RuleDecorator"
import { RuleLoader } from "./RuleLoader"
import { Word } from "./Word"
import { RuleThatAppendsString } from "./RuleThatAppendsString"

const pluralRulesPath = './configuration/plural-rules.json'
const stemRulesPath = './configuration/stem-rules.json'

const firstPersonPronounCollection = new Collection(['minä','me'])
const secondPersonPronounCollection = new Collection(['sinä','te'])
const pluralPronounCollection = new Collection(['me','te','he'])
const toBeInfinitiveString = 'olla'
const vowelCollection = new Collection(['a','e','i','o','u','y','ä','ö'])
const pluralEndingLetter = 't'

export class FinnishEnglishTranslation {
    private createRuleLoader = () => new RuleLoader()
    private createParticipleHelper = () => new ParticipleHelper()

    createPluralizer = () => {
        const collectionOfSimpleTransformRules = this.createRuleLoader().loadRules(pluralRulesPath)
        const ruleThatAppendsT = new RuleThatAppendsString(pluralEndingLetter)
        const addTAppendBehaviorToRule = (rule:any) => new RuleDecorator(rule, ruleThatAppendsT)
        const rulesWithTAppendBehaviorAdded = collectionOfSimpleTransformRules.map(addTAppendBehaviorToRule)
        return new Pluralizer(
            new ComplexityAnalyzer(rulesWithTAppendBehaviorAdded), 
            new RuleApplier(rulesWithTAppendBehaviorAdded, ruleThatAppendsT)
        )
    }

    createPresentTenseConjugator = () => new PresentTenseConjugator(this.createToBeInfinitive())

    createPerfectTenseConjugator = () => new PerfectTenseConjugator(
        this.createPresentTenseConjugator(),
        this.createParticipleHelper(),
        this.createToBeInfinitive()
    )
    
    createImperfectTenseConjugator = () => new ImperfectTenseConjugator(this.createParticipleHelper())

    createPluperfectTenseConjugator = () => new PluperfectTenseConjugator(
        this.createImperfectTenseConjugator(), 
        this.createParticipleHelper(),
        this.createToBeInfinitive()
    )

    createToBeInfinitive = () => this.createInfinitive(toBeInfinitiveString)

    createInfinitive = (infinitiveString:any) => {
        const stemRulesFileContent = fs.readFileSync(stemRulesPath).toString()
        const arrayOfVerbConfigurations = JSON.parse(stemRulesFileContent)
        const collectionOfVerbConfigurations = new Collection(arrayOfVerbConfigurations)
        return new Infinitive(
            this.createWord(infinitiveString),
            collectionOfVerbConfigurations,this
        )
    }

    createChar = (char:string) => new Character(char, vowelCollection, new Predicates())

    createWord = (wordString:string) => new Word(wordString, this, this)

    createPronoun = (pronounString:string) => new Pronoun(
        pronounString,
        pluralPronounCollection,
        firstPersonPronounCollection,
        secondPersonPronounCollection
    )
}