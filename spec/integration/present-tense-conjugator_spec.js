var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var finnishEnglishTranslator = FinnishEnglishTranslation();
var presentTenseConjugator = finnishEnglishTranslator.createPresentTenseConjugator();

describe('PresentTenseConjugator', function() {
    describe('conjugate(infinitive, person)', function() {
        //TODO: Maybe we should test different capitalizations!
        function expectConjugation(infinitive, pronoun, expected) {
            describe('and pronoun is '+pronoun, function() {
                it('should be '+expected, function() {
                    expect(presentTenseConjugator.conjugate(infinitive, pronoun)).toBe(expected);
                }); 
            }); 
        }
        function expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations) {
            describe('when infinitive is '+infinitive, function() {
                function expectConjugationForPronoun(pronoun, index) {
                    expectConjugation(infinitive, pronoun, arrayOfExpectedConjugations[index]);
                }
                ['minä', 'sinä', 'han / se', 'me', 'te', 'he'].forEach(expectConjugationForPronoun);
            });
        }
        expectInfinitiveConjugations('elää', ['elän', 'elät', 'elää', 'elämme', 'elätte', 'elävät']);
        expectInfinitiveConjugations('soutaa', ['soudan', 'soudat', 'soutaa', 'soudamme', 'soudatte', 'soutavat']);
        expectInfinitiveConjugations('takellella', ['takeltelen', 'takeltelet', 'takeltelee', 'takeltelemme', 'takeltelette', 'takeltelevat']);
        expectInfinitiveConjugations('kokea', ['koen', 'koet', 'kokee', 'koemme', 'koette', 'kokevat']);
        expectInfinitiveConjugations('voida', ['voin', 'voit', 'voi', 'voimme', 'voitte', 'voivat']);
        expectInfinitiveConjugations('nähdä', ['näen', 'näet', 'näkee', 'näemme', 'näette', 'näkevät']);
    });
});