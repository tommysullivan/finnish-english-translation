var FinnishEnglishTranslation = require('../../finnishEnglishTranslation');
var finnishEnglishTranslator = FinnishEnglishTranslation();

function expectConjugation(infinitiveString, pronoun, expected, methodToCall) {
    describe('and pronoun is '+pronoun, function() {
        it('should be '+expected, function() {
            var infinitive = finnishEnglishTranslator.createInfinitive(infinitiveString);
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
        expectPositiveConjugations('takellella', ['olen takellellut', 'olet takellellut', 'on takellellut', 'olemme takellelleet', 'olette takellelleet', 'ovat takellelleet']);
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
         expectNegativeConjugations('elää', ['en ole elänyt', 'et ole elänyt', 'ei ole elänyt', 'emme ole eläneet', 'ette ole eläneet', 'eivät ole eläneet']);
         expectNegativeConjugations('soutaa', ['en ole soutanut', 'et ole soutanut', 'ei ole soutanut', 'emme ole soutaneet', 'ette ole soutaneet', 'eivät ole soutaneet']);
         expectNegativeConjugations('takellella', ['en ole takellellut', 'et ole takellellut', 'ei ole takellellut', 'emme ole takellelleet', 'ette ole takellelleet', 'eivät ole takellelleet']);
         expectNegativeConjugations('kokea', ['en ole kokenut', 'et ole kokenut', 'ei ole kokenut', 'emme ole kokeneet', 'ette ole kokeneet', 'eivät ole kokeneet']);
         expectNegativeConjugations('voida', ['en ole voinut', 'et ole voinut', 'ei ole voinut', 'emme ole voineet', 'ette ole voineet', 'eivät ole voineet']);
         expectNegativeConjugations('nähdä', ['en ole nähnyt', 'et ole nähnyt', 'ei ole nähnyt', 'emme ole nähneet', 'ette ole nähneet', 'eivät ole nähneet']);
         expectNegativeConjugations('syödä', ['en ole syönyt', 'et ole syönyt', 'ei ole syönyt', 'emme ole syöneet', 'ette ole syöneet', 'eivät ole syöneet']);
         expectNegativeConjugations('olla', ['en ole ollut', 'et ole ollut', 'ei ole ollut', 'emme ole olleet', 'ette ole olleet', 'eivät ole olleet']);
     });
});

describe('ImperfectTenseConjugator', function() {
    var imperfectTenseConjugator = finnishEnglishTranslator.createImperfectTenseConjugator();
    describe('conjugate(infinitive, person)', function() {
        //TODO: Maybe we should test different capitalizations!
        function expectPositiveConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, imperfectTenseConjugator.conjugate);    
        }
        // expectPositiveConjugations('elää', ['elin', 'elit', 'eli', 'elimme', 'elitte', 'elivät']);
        // expectPositiveConjugations('soutaa', ['soudin', 'soudit', 'souti', 'soudimme', 'souditte', 'soutivat']);
        // expectPositiveConjugations('takellella', ['takeltelin', 'takeltelit', 'takelteli', 'takeltelimme', 'takeltelitte', 'takeltelivat']);
        // expectPositiveConjugations('kokea', ['koin', 'koit', 'koki', 'koimme', 'koitte', 'kokivat']);
        // expectPositiveConjugations('voida', ['voin', 'voit', 'voi', 'voimme', 'voitte', 'voivat']);
        // expectPositiveConjugations('nähdä', ['näin', 'näit', 'näki', 'näimme', 'näitte', 'näkivät']);
        // expectPositiveConjugations('syödä', ['söin', 'söit', 'söi', 'söimme', 'söitte', 'söivät']);
        expectPositiveConjugations('olla', ['olin', 'olit', 'oli', 'olimme', 'olitte', 'olivat']);
    });
     describe('conjugateNegation(infinitive, person)', function() {
         function expectNegativeConjugations(infinitive, arrayOfExpectedConjugations) {
             expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, imperfectTenseConjugator.conjugateNegation);    
         }
         expectNegativeConjugations('elää', ['en elänyt', 'et elänyt', 'ei elänyt', 'emme eläneet', 'ette eläneet', 'eivät eläneet']);
         expectNegativeConjugations('soutaa', ['en soutanut', 'et soutanut', 'ei soutanut', 'emme soutaneet', 'ette soutaneet', 'eivät soutaneet']);
         expectNegativeConjugations('takellella', ['en takellellut', 'et takellellut', 'ei takellellut', 'emme takellelleet', 'ette takellelleet', 'eivät takellelleet']);
         expectNegativeConjugations('kokea', ['en kokenut', 'et kokenut', 'ei kokenut', 'emme kokeneet', 'ette kokeneet', 'eivät kokeneet']);
         expectNegativeConjugations('voida', ['en voinut', 'et voinut', 'ei voinut', 'emme voineet', 'ette voineet', 'eivät voineet']);
         expectNegativeConjugations('nähdä', ['en nähnyt', 'et nähnyt', 'ei nähnyt', 'emme nähneet', 'ette nähneet', 'eivät nähneet']);
         expectNegativeConjugations('syödä', ['en syönyt', 'et syönyt', 'ei syönyt', 'emme syöneet', 'ette syöneet', 'eivät syöneet']);
         expectNegativeConjugations('olla', ['en ollut', 'et ollut', 'ei ollut', 'emme olleet', 'ette olleet', 'eivät olleet']);
     });
});

describe('PluperfectTenseConjugator', function() {
    var pluperfectTenseConjugator = finnishEnglishTranslator.createPluperfectTenseConjugator();
    describe('conjugate(infinitive, person)', function() {
        //TODO: Maybe we should test different capitalizations!
        function expectPositiveConjugations(infinitive, arrayOfExpectedConjugations) {
            expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, pluperfectTenseConjugator.conjugate);    
        }
        expectPositiveConjugations('elää', ['olin elänyt', 'olit elänyt', 'oli elänyt', 'olimme eläneet', 'olitte eläneet', 'olivat eläneet']);
        expectPositiveConjugations('soutaa', ['olin soutanut', 'olit soutanut', 'oli soutanut', 'olimme soutaneet', 'olitte soutaneet', 'olivat soutaneet']);
        expectPositiveConjugations('takellella', ['olin takellellut', 'olit takellellut', 'oli takellellut', 'olimme takellelleet', 'olitte takellelleet', 'olivat takellelleet']);
        expectPositiveConjugations('kokea', ['olin kokenut', 'olit kokenut', 'oli kokenut', 'olimme kokeneet', 'olitte kokeneet', 'olivat kokeneet']);
        expectPositiveConjugations('voida', ['olin voinut', 'olit voinut', 'oli voinut', 'olimme voineet', 'olitte voineet', 'olivat voineet']);
        expectPositiveConjugations('nähdä', ['olin nähnyt', 'olit nähnyt', 'oli nähnyt', 'olimme nähneet', 'olitte nähneet', 'olivat nähneet']);
        expectPositiveConjugations('syödä', ['olin syönyt', 'olit syönyt', 'oli syönyt', 'olimme syöneet', 'olitte syöneet', 'olivat syöneet']);
        expectPositiveConjugations('olla', ['olin ollut', 'olit ollut', 'oli ollut', 'olimme olleet', 'olitte olleet', 'olivat olleet']);
    });
     describe('conjugateNegation(infinitive, person)', function() {
         function expectNegativeConjugations(infinitive, arrayOfExpectedConjugations) {
             expectInfinitiveConjugations(infinitive, arrayOfExpectedConjugations, pluperfectTenseConjugator.conjugateNegation);    
         }
         expectNegativeConjugations('elää', ['en ollut elänyt', 'et ollut elänyt', 'ei ollut elänyt', 'emme olleet eläneet', 'ette olleet eläneet', 'eivät olleet eläneet']);
         expectNegativeConjugations('soutaa', ['en ollut soutanut', 'et ollut soutanut', 'ei ollut soutanut', 'emme olleet soutaneet', 'ette olleet soutaneet', 'eivät olleet soutaneet']);
         expectNegativeConjugations('takellella', ['en ollut takellellut', 'et ollut takellellut', 'ei ollut takellellut', 'emme olleet takellelleet', 'ette olleet takellelleet', 'eivät olleet takellelleet']);
         expectNegativeConjugations('kokea', ['en ollut kokenut', 'et ollut kokenut', 'ei ollut kokenut', 'emme olleet kokeneet', 'ette olleet kokeneet', 'eivät olleet kokeneet']);
         expectNegativeConjugations('voida', ['en ollut voinut', 'et ollut voinut', 'ei ollut voinut', 'emme olleet voineet', 'ette olleet voineet', 'eivät olleet voineet']);
         expectNegativeConjugations('nähdä', ['en ollut nähnyt', 'et ollut nähnyt', 'ei ollut nähnyt', 'emme olleet nähneet', 'ette olleet nähneet', 'eivät olleet nähneet']);
         expectNegativeConjugations('syödä', ['en ollut syönyt', 'et ollut syönyt', 'ei ollut syönyt', 'emme olleet syöneet', 'ette olleet syöneet', 'eivät olleet syöneet']);
         expectNegativeConjugations('olla', ['en ollut ollut', 'et ollut ollut', 'ei ollut ollut', 'emme olleet olleet', 'ette olleet olleet', 'eivät olleet olleet']);
     });
});