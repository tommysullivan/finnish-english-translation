const FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
const finnishEnglishTranslation = FinnishEnglishTranslation();
const pluralizer = finnishEnglishTranslation.createPluralizer();
const fs = require('fs');
const stemPluralPairs = JSON.parse(fs.readFileSync('./spec/integration/test-data/stem-plural-pairs.json'));
const expect = require("expect")

describe('Pluralizer', function() {
    describe('pluralize for stem', function() {
        stemPluralPairs.forEach(function(stemPluralPair) {
            const stem = stemPluralPair[0];
            const expectedPlural = stemPluralPair[1];
            describe(stem, function() {
                it('gives '+expectedPlural, function() {
                    expect(pluralizer.pluralize(stem)).toEqual(expectedPlural);
                }); 
            });   
        });
    });
    describe('complexity', function() {
        it('should be less than 25', function() {
            expect(pluralizer.complexity()).toBeLessThan(300); 
        }); 
    });
    describe('number of rules', function() {
        it('should be less than 10', function() {
            expect(pluralizer.numTopLevelRules()).toBeLessThan(50);
        }) 
    });
});