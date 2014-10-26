var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var configurationPath = '.';
var finnishEnglishTranslation = FinnishEnglishTranslation(configurationPath);
var pluralizer = finnishEnglishTranslation.createPluralizer();
var fs = require('fs');

//load test data
var stemPluralPairs = JSON.parse(fs.readFileSync('./spec/integration/test-data/stem-plural-pairs.json'));

describe('Pluralizer', function() {
    describe('pluralize for stem', function() {
        stemPluralPairs.forEach(function(stemPluralPair) {
            var stem = stemPluralPair[0];
            var expectedPlural = stemPluralPair[1];
            describe(stem, function() {
                it('gives '+expectedPlural, function() {
                    expect(pluralizer.pluralize(stem)).toEqual(expectedPlural);
                }); 
            });   
        });
    });
    describe('complexity', function() {
        it('should be less than 25', function() {
            expect(pluralizer.complexity()).toBeLessThan(25); 
        }); 
    });
    describe('number of rules', function() {
        it('should be less than 10', function() {
            expect(pluralizer.numTopLevelRules()).toBeLessThan(10);
        }) 
    });
});