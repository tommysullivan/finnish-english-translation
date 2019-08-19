import { Infinitive } from "./infinitive"
import { Pronoun } from "./Pronoun"

export class PresentTenseConjugator {
    constructor(private toBeInfinitive:Infinitive) {}

    conjugate = (infinitive:Infinitive, pronoun:Pronoun) => {
        const strongStem = infinitive.getStrongStem()
        const weakStem = infinitive.getWeakStem()
        const endsInDa = infinitive.endsWith('da') || infinitive.endsWith('dä') 
        const letterToAppendToThirdPerson = endsInDa && infinitive.charFromEnd(3).isVowel()
            ? "" 
            : infinitive.equals(this.toBeInfinitive)
                ? 'n' 
                : strongStem.last()
        const aToUse = strongStem.contains('ä') || strongStem.contains('ö') ? 'ä' : 'a'
        if(pronoun.isSingular()) {
            if(pronoun.isFirstPerson()) return `${weakStem}n`
            if(pronoun.isSecondPerson()) return `${weakStem}t`
            return `${strongStem}${letterToAppendToThirdPerson}` 
        }
        else {
            if(pronoun.isFirstPerson()) return `${weakStem}mme`
            if(pronoun.isSecondPerson()) return `${weakStem}tte`
            return `${strongStem}v${aToUse}t`
        }
    }

    conjugateNegation = (infinitive:Infinitive, pronoun:Pronoun) => `${pronoun.getNoWord()} ${infinitive.getWeakStem()}`
}