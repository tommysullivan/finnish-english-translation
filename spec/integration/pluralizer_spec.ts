import { FinnishEnglishTranslation } from '../../src/FinnishEnglishTranslation'
import expect from "expect"
import { stemPluralPairs } from "../verbs/stem-plural-pairs"

const pluralizer = () => new FinnishEnglishTranslation().createPluralizer()

describe('Pluralizer', () => {
    describe('pluralize for stem', () => {
        stemPluralPairs.forEach(function(stemPluralPair) {
            const [ stem, expectedPlural ] = stemPluralPair
            describe(stem, () => {
                it('gives '+expectedPlural, () => {
                    expect(pluralizer().pluralize(stem)).toEqual(expectedPlural)
                }) 
            })   
        })
    })
    describe('complexity', () => {
        it('should be less than 280', () => {
            expect(pluralizer().complexity()).toBeLessThanOrEqual(280) 
        }) 
    })
    describe('number of rules', () => {
        it('should be less than 43', () => {
            expect(pluralizer().numTopLevelRules()).toBeLessThanOrEqual(43)
        }) 
    })
})