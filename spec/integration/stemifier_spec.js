var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var finnishEnglishTranslation = FinnishEnglishTranslation();
var stemifier = finnishEnglishTranslation.createStemifier();
var fs = require('fs');
var infinitiveStemPairs = JSON.parse(fs.readFileSync('./spec/integration/test-data/infinitive-stem-pairs.json'));

describe('Stemifier', function() {
    describe('stemify for infinitive', function() {
        infinitiveStemPairs.forEach(function(infinitiveStemPair) {
            var infinitive = infinitiveStemPair[0];
            var expectedStem = infinitiveStemPair[1];
            describe(infinitive, function() {
                it('yields stem '+expectedStem, function() {
                    expect(stemifier.stemify(infinitive)).toEqual(expectedStem);
                }); 
            });   
        });
    });
});