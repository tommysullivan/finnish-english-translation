import { expectConjugation } from "./expectConjugation"
import { verbs } from "./verbs"
import { pronouns } from "./pronouns"
import FinnishEnglishTranslation from '../../finnishEnglishTranslation'

const presentTenseConjugator = () => FinnishEnglishTranslation().createPresentTenseConjugator()
const expectPositiveConjugations = 
    (verb:any) => 
    expectInfinitiveConjugations(verb.infinitive, verb.presentTense.positive, presentTenseConjugator().conjugate)

const expectInfinitiveConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[], shouldTestNegation:boolean) => {
    describe(`when infinitive is ${infinitiveString}`, () => {
        pronouns.forEach((pronounString, index) => {
            expectConjugation(infinitiveString, pronounString, arrayOfExpectedConjugations[index], shouldTestNegation)
        })
    })
}

const expectNegativeConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
    expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, presentTenseConjugator().conjugateNegation)    
}

describe('PresentTenseConjugator', () => {
    describe('conjugate(infinitive, person)', () => {
        verbs.map(expectPositiveConjugations)
    })
    describe('conjugateNegation(infinitive, person)', () => {
        verbs.map(verb => expectNegativeConjugations(verb.infinitive, verb.presentTense.negative))
    })
})

const perfectTenseConjugator = () => FinnishEnglishTranslation().createPerfectTenseConjugator()

const expectPositivePerfectConjugations = 
    (infinitiveString:string, arrayOfExpectedConjugations:string[]) => 
    expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, perfectTenseConjugator().conjugate)

describe('PerfectTenseConjugator', () => {
    describe('conjugate(infinitive, person)', () => {
        verbs.map(verb => expectPositivePerfectConjugations(verb.infinitive, verb.perfectTense.positive))
    })
    describe('conjugateNegation(infinitive, person)', () => {
         const expectNegativeConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
             expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, perfectTenseConjugator().conjugateNegation)    
         }
         expectNegativeConjugations('elää', ['en ole elänyt', 'et ole elänyt', 'ei ole elänyt', 'emme ole eläneet', 'ette ole eläneet', 'eivät ole eläneet'])
         expectNegativeConjugations('soutaa', ['en ole soutanut', 'et ole soutanut', 'ei ole soutanut', 'emme ole soutaneet', 'ette ole soutaneet', 'eivät ole soutaneet'])
         expectNegativeConjugations('takellella', ['en ole takellellut', 'et ole takellellut', 'ei ole takellellut', 'emme ole takellelleet', 'ette ole takellelleet', 'eivät ole takellelleet'])
         expectNegativeConjugations('kokea', ['en ole kokenut', 'et ole kokenut', 'ei ole kokenut', 'emme ole kokeneet', 'ette ole kokeneet', 'eivät ole kokeneet'])
         expectNegativeConjugations('voida', ['en ole voinut', 'et ole voinut', 'ei ole voinut', 'emme ole voineet', 'ette ole voineet', 'eivät ole voineet'])
         expectNegativeConjugations('nähdä', ['en ole nähnyt', 'et ole nähnyt', 'ei ole nähnyt', 'emme ole nähneet', 'ette ole nähneet', 'eivät ole nähneet'])
         expectNegativeConjugations('syödä', ['en ole syönyt', 'et ole syönyt', 'ei ole syönyt', 'emme ole syöneet', 'ette ole syöneet', 'eivät ole syöneet'])
         expectNegativeConjugations('olla', ['en ole ollut', 'et ole ollut', 'ei ole ollut', 'emme ole olleet', 'ette ole olleet', 'eivät ole olleet'])
    })
})

describe('ImperfectTenseConjugator', () => {
    const imperfectTenseConjugator = FinnishEnglishTranslation().createImperfectTenseConjugator()
    describe('conjugate(infinitive, person)', () => {
        const expectPositiveConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
            expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, imperfectTenseConjugator.conjugate)    
        }
        // expectPositiveConjugations('elää', ['elin', 'elit', 'eli', 'elimme', 'elitte', 'elivät'])
        // expectPositiveConjugations('soutaa', ['soudin', 'soudit', 'souti', 'soudimme', 'souditte', 'soutivat'])
        // expectPositiveConjugations('takellella', ['takeltelin', 'takeltelit', 'takelteli', 'takeltelimme', 'takeltelitte', 'takeltelivat'])
        // expectPositiveConjugations('kokea', ['koin', 'koit', 'koki', 'koimme', 'koitte', 'kokivat'])
        // expectPositiveConjugations('voida', ['voin', 'voit', 'voi', 'voimme', 'voitte', 'voivat'])
        // expectPositiveConjugations('nähdä', ['näin', 'näit', 'näki', 'näimme', 'näitte', 'näkivät'])
        // expectPositiveConjugations('syödä', ['söin', 'söit', 'söi', 'söimme', 'söitte', 'söivät'])
        expectPositiveConjugations('olla', ['olin', 'olit', 'oli', 'olimme', 'olitte', 'olivat'])
    })
     describe('conjugateNegation(infinitive, person)', () => {
         const expectNegativeConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
             expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, imperfectTenseConjugator.conjugateNegation)    
         }
         expectNegativeConjugations('elää', ['en elänyt', 'et elänyt', 'ei elänyt', 'emme eläneet', 'ette eläneet', 'eivät eläneet'])
         expectNegativeConjugations('soutaa', ['en soutanut', 'et soutanut', 'ei soutanut', 'emme soutaneet', 'ette soutaneet', 'eivät soutaneet'])
         expectNegativeConjugations('takellella', ['en takellellut', 'et takellellut', 'ei takellellut', 'emme takellelleet', 'ette takellelleet', 'eivät takellelleet'])
         expectNegativeConjugations('kokea', ['en kokenut', 'et kokenut', 'ei kokenut', 'emme kokeneet', 'ette kokeneet', 'eivät kokeneet'])
         expectNegativeConjugations('voida', ['en voinut', 'et voinut', 'ei voinut', 'emme voineet', 'ette voineet', 'eivät voineet'])
         expectNegativeConjugations('nähdä', ['en nähnyt', 'et nähnyt', 'ei nähnyt', 'emme nähneet', 'ette nähneet', 'eivät nähneet'])
         expectNegativeConjugations('syödä', ['en syönyt', 'et syönyt', 'ei syönyt', 'emme syöneet', 'ette syöneet', 'eivät syöneet'])
         expectNegativeConjugations('olla', ['en ollut', 'et ollut', 'ei ollut', 'emme olleet', 'ette olleet', 'eivät olleet'])
     })
})

describe('PluperfectTenseConjugator', () => {
    const pluperfectTenseConjugator = FinnishEnglishTranslation().createPluperfectTenseConjugator()
    describe('conjugate(infinitive, person)', () => {
        const expectPositiveConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
            expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, pluperfectTenseConjugator.conjugate)    
        }
        expectPositiveConjugations('elää', ['olin elänyt', 'olit elänyt', 'oli elänyt', 'olimme eläneet', 'olitte eläneet', 'olivat eläneet'])
        expectPositiveConjugations('soutaa', ['olin soutanut', 'olit soutanut', 'oli soutanut', 'olimme soutaneet', 'olitte soutaneet', 'olivat soutaneet'])
        expectPositiveConjugations('takellella', ['olin takellellut', 'olit takellellut', 'oli takellellut', 'olimme takellelleet', 'olitte takellelleet', 'olivat takellelleet'])
        expectPositiveConjugations('kokea', ['olin kokenut', 'olit kokenut', 'oli kokenut', 'olimme kokeneet', 'olitte kokeneet', 'olivat kokeneet'])
        expectPositiveConjugations('voida', ['olin voinut', 'olit voinut', 'oli voinut', 'olimme voineet', 'olitte voineet', 'olivat voineet'])
        expectPositiveConjugations('nähdä', ['olin nähnyt', 'olit nähnyt', 'oli nähnyt', 'olimme nähneet', 'olitte nähneet', 'olivat nähneet'])
        expectPositiveConjugations('syödä', ['olin syönyt', 'olit syönyt', 'oli syönyt', 'olimme syöneet', 'olitte syöneet', 'olivat syöneet'])
        expectPositiveConjugations('olla', ['olin ollut', 'olit ollut', 'oli ollut', 'olimme olleet', 'olitte olleet', 'olivat olleet'])
    })
     describe('conjugateNegation(infinitive, person)', () => {
         const expectNegativeConjugations = (infinitiveString:string, arrayOfExpectedConjugations:string[]) => {
             expectInfinitiveConjugations(infinitiveString, arrayOfExpectedConjugations, pluperfectTenseConjugator.conjugateNegation)    
         }
         expectNegativeConjugations('elää', ['en ollut elänyt', 'et ollut elänyt', 'ei ollut elänyt', 'emme olleet eläneet', 'ette olleet eläneet', 'eivät olleet eläneet'])
         expectNegativeConjugations('soutaa', ['en ollut soutanut', 'et ollut soutanut', 'ei ollut soutanut', 'emme olleet soutaneet', 'ette olleet soutaneet', 'eivät olleet soutaneet'])
         expectNegativeConjugations('takellella', ['en ollut takellellut', 'et ollut takellellut', 'ei ollut takellellut', 'emme olleet takellelleet', 'ette olleet takellelleet', 'eivät olleet takellelleet'])
         expectNegativeConjugations('kokea', ['en ollut kokenut', 'et ollut kokenut', 'ei ollut kokenut', 'emme olleet kokeneet', 'ette olleet kokeneet', 'eivät olleet kokeneet'])
         expectNegativeConjugations('voida', ['en ollut voinut', 'et ollut voinut', 'ei ollut voinut', 'emme olleet voineet', 'ette olleet voineet', 'eivät olleet voineet'])
         expectNegativeConjugations('nähdä', ['en ollut nähnyt', 'et ollut nähnyt', 'ei ollut nähnyt', 'emme olleet nähneet', 'ette olleet nähneet', 'eivät olleet nähneet'])
         expectNegativeConjugations('syödä', ['en ollut syönyt', 'et ollut syönyt', 'ei ollut syönyt', 'emme olleet syöneet', 'ette olleet syöneet', 'eivät olleet syöneet'])
         expectNegativeConjugations('olla', ['en ollut ollut', 'et ollut ollut', 'ei ollut ollut', 'emme olleet olleet', 'ette olleet olleet', 'eivät olleet olleet'])
     })
})