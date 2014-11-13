var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var finnishEnglishTranslator = FinnishEnglishTranslation();

function expectConjugation(infinitive, pronoun, expected, methodToCall) {
    describe('and pronoun is '+pronoun, function() {
        it('should be '+expected, function() {
            expect(methodToCall(infinitive, pronoun)).toBe(expected);
        }); 
    }); 
}
function expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, shouldTestNegation) {
    describe('when infinitive is '+infinitive, function() {
        ['minä', 'sinä', 'han / se', 'me', 'te', 'he'].forEach(function(pronoun, index) {
            expectConjugation(infinitive, pronoun, arrayOfExpectedConjugations[index], shouldTestNegation);
        });
    });
}

describe('PresentTenseConjugator', function() {
    var presentTenseConjugator = finnishEnglishTranslator.createPresentTenseConjugator();
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

describe('PerfectTenseConjugator', function() {
    var perfectTenseConjugator = finnishEnglishTranslator.createPerfectTenseConjugator();
    describe('conjugate(infinitive, person)', function() {
        //TODO: Maybe we should test different capitalizations!
        function expectPositiveConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, perfectTenseConjugator.conjugate);    
        }
        expectPositiveConjugations('elää', ['olen elänyt', 'olet elänyt', 'on elänyt', 'olemme eläneet', 'olette eläneet', 'ovat eläneet']);
        expectPositiveConjugations('soutaa', ['olen soutanut', 'olet soutanut', 'on soutanut', 'olemme soutaneet', 'olette soutaneet', 'ovat soutaneet']);
        expectPositiveConjugations('takellella', ['olen takellellut', 'olet takellellut', 'on takellellut', 'olemme takellelleet', 'olette takellelleet', 'ovat takeltelleet']);
        expectPositiveConjugations('kokea', ['olen kokenut', 'olet kokenut', 'on kokenut', 'olemme kokeneet', 'olette kokeneet', 'ovat kokeneet']);
        expectPositiveConjugations('voida', ['olen voinut', 'olet voinut', 'on voinut', 'olemme voineet', 'olette voineet', 'ovat voineet']);
        expectPositiveConjugations('nähdä', ['olen nähnyt', 'olet nähnyt', 'on nähnyt', 'olemme nähneet', 'olette nähneet', 'ovat nähneet']);
        expectPositiveConjugations('syödä', ['olen syönyt', 'olet syönyt', 'on syönyt', 'olemme syöneet', 'olette syöneet', 'ovat syöneet']);
        expectPositiveConjugations('olla', ['olen ollut', 'olet ollut', 'on ollut', 'olemme olleet', 'olette olleet', 'ovat olleet']);
    });
    describe('conjugateNegation(infinitive, person)', function() {
        function expectNegativeConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, perfectTenseConjugator.conjugateNegation);    
        }
        expectNegativeConjugations('elää', ['en ollut elänyt', 'et ollut elänyt', 'ei ollut elänyt', 'emme olleet eläneet', 'ette olleet eläneet', 'eivät olleet eläneet']);
        expectNegativeConjugations('soutaa', ['en ollut soutanut', 'et ollut soutanut', 'ei ollut soutanut', 'emme olleet soutaneet', 'ette olleet soutaneet', 'eivät olleet soutaneet']);
        expectNegativeConjugations('takellella', ['en ollut takellellut', 'et ollut takellellut', 'ei ollut takellellut', 'emme olleet takellelleet', 'olette takellelleet', 'eivät olleet takellelleet']);
        expectNegativeConjugations('kokea', ['en ollut kokenut', 'et ollut kokenut', 'ei ollut kokenut', 'emme olleet kokeneet', 'ette olleet kokeneet', 'eivät olleet kokeneet']);
        expectNegativeConjugations('voida', ['en ollut voinut', 'et ollut voinut', 'ei ollut voinut', 'emme olleet voineet', 'ette olleet voineet', 'eivät olleet voineet']);
        expectNegativeConjugations('nähdä', ['en ollut nähnyt', 'et ollut nähnyt', 'ei ollut nähnyt', 'emme olleet nähneet', 'ette olleet nähneet', 'eivät olleet nähneet']);
        expectNegativeConjugations('syödä', ['en ollut syönyt', 'et ollut syönyt', 'ei ollut syönyt', 'emme olleet syöneet', 'ette olleet syöneet', 'eivät olleet syöneet']);
        expectNegativeConjugations('olla', ['en ollut ollut', 'et ollut ollut', 'ei ollut ollut', 'emme olleet olleet', 'ette olleet olleet', 'eivät olleet olleet']);
    });
});