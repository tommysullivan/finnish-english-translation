var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var finnishEnglishTranslator = FinnishEnglishTranslation();
var presentTenseConjugator = finnishEnglishTranslator.createPresentTenseConjugator();

describe('PresentTenseConjugator', function() {
    function expectConjugation(infinitive, pronoun, expected, methodToCall) {
        describe('and pronoun is '+pronoun, function() {
            it('should be '+expected, function() {
                expect(methodToCall(infinitive, pronoun)).toBe(expected);
            }); 
        }); 
    }
    function expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, shouldTestNegation) {
        describe('when infinitive is '+infinitive, function() {
            function expectConjugationForPronoun(pronoun, index) {
                expectConjugation(infinitive, pronoun, arrayOfExpectedConjugations[index], shouldTestNegation);
            }
            ['minä', 'sinä', 'han / se', 'me', 'te', 'he'].forEach(expectConjugationForPronoun);
        });
    }
    describe('conjugate(infinitive, person)', function() {
        //TODO: Maybe we should test different capitalizations!
        function expectPositiveConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, presentTenseConjugator.conjugate);    
        }
        expectPositiveConjugations('elää', ['elän', 'elät', 'elää', 'elämme', 'elätte', 'elävät']);
        expectPositiveConjugations('soutaa', ['soudan', 'soudat', 'soutaa', 'soudamme', 'soudatte', 'soutavat']);
        expectPositiveConjugations('takellella', ['takeltelen', 'takeltelet', 'takeltelee', 'takeltelemme', 'takeltelette', 'takeltelevat']);
        expectPositiveConjugations('kokea', ['koen', 'koet', 'kokee', 'koemme', 'koette', 'kokevat']);
        expectPositiveConjugations('voida', ['voin', 'voit', 'voi', 'voimme', 'voitte', 'voivat']);
        expectPositiveConjugations('nähdä', ['näen', 'näet', 'näkee', 'näemme', 'näette', 'näkevät']);
        expectPositiveConjugations('syödä', ['syön', 'syöt', 'syö', 'syömme', 'syötte', 'syövät']);
        expectPositiveConjugations('olla', ['olen', 'olet', 'on', 'olemme', 'olette', 'ovat']);
    });
    describe('conjugateNegation(infinitive, person)', function() {
        function expectNegativeConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, presentTenseConjugator.conjugateNegation);    
        }
        expectNegativeConjugations('elää', ['en elä', 'et elä', 'ei elä', 'emme elä', 'ette elä', 'eivät elä']);
        expectNegativeConjugations('soutaa', ['en souda', 'et souda', 'ei souda', 'emme souda', 'ette souda', 'eivät souda']);
        expectNegativeConjugations('takellella', ['en takeltele', 'et takeltele', 'ei takeltele', 'emme takeltele', 'ette takeltele', 'eivät takeltele']);
        expectNegativeConjugations('kokea', ['en koe', 'et koe', 'ei koe', 'emme koe', 'ette koe', 'eivät koe']);
        expectNegativeConjugations('voida', ['en voi', 'et voi', 'ei voi', 'emme voi', 'ette voi', 'eivät voi']);
        expectNegativeConjugations('nähdä', ['en näe', 'et näe', 'ei näe', 'emme näe', 'ette näe', 'eivät näe']);
        expectNegativeConjugations('syödä', ['en syö', 'et syö', 'ei syö', 'emme syö', 'ette syö', 'eivät syö']);
        expectNegativeConjugations('olla', ['en ole', 'et ole', 'ei ole', 'emme ole', 'ette ole', 'eivät ole']);
    });
});