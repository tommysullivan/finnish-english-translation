import { ParticipleHelper } from "./participleHelper"
import { Infinitive } from "./infinitive"
import { Pronoun } from "./Pronoun"

export class ImperfectTenseConjugator {
    constructor(private participleHelper:ParticipleHelper) {}

    conjugate = (infinitive:Infinitive, pronoun:Pronoun) => {
        if(pronoun.isSingular()) {
            if(pronoun.isFirstPerson()) return 'olin'
            if(pronoun.isSecondPerson()) return 'olit'
            return 'oli'
        }
        else {
            if(pronoun.isFirstPerson()) return 'olimme'
            if(pronoun.isSecondPerson()) return 'olitte'
            return 'olivat'
        }
    }

    conjugateNegation = (infinitive:Infinitive, pronoun:Pronoun) => {
        const participle = this.participleHelper.getSecondParticiple(infinitive, pronoun)
        return `${pronoun.getNoWord()} ${participle}`
    }
}