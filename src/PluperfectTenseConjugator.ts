import { ImperfectTenseConjugator } from "./imperfectTenseConjugator"
import { ParticipleHelper } from "./participleHelper"
import { Infinitive } from "./infinitive"
import { Pronoun } from "./Pronoun"

export class PluperfectTenseConjugator {
    constructor(
        private imperfectTenseConjugator:ImperfectTenseConjugator,
        private participleHelper:ParticipleHelper,
        private toBeInfinitive:Infinitive
    ) {}

    conjugate = (infinitive:Infinitive, pronoun:Pronoun) => {
        const conjugatedToBeVerb = this.imperfectTenseConjugator.conjugate(this.toBeInfinitive, pronoun)
        return `${conjugatedToBeVerb} ${this.participleHelper.getSecondParticiple(infinitive, pronoun)}`
    }

    conjugateNegation = (infinitive:Infinitive, pronoun:Pronoun) => {
        const participle = this.participleHelper.getSecondParticiple(infinitive, pronoun)
        return `${pronoun.getNoWord()} ${this.participleHelper.getSecondParticiple(this.toBeInfinitive, pronoun)} ${participle}`
    }
}