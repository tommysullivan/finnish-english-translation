import FinnishEnglishTranslation from '../../FinnishEnglishTranslation'
import expect from "expect"
import { stemPluralPairs } from "./test-data/stem-plural-pairs"

const pluralizer = () => FinnishEnglishTranslation().createPluralizer()

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
        it('should be less than 25', () => {
            expect(pluralizer().complexity()).toBeLessThan(300) 
        }) 
    })
    describe('number of rules', () => {
        it('should be less than 10', () => {
            expect(pluralizer().numTopLevelRules()).toBeLessThan(50)
        }) 
    })
})