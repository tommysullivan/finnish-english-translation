import { Infinitive } from "./infinitive"

export class PerfectTenseConjugator {
    constructor(private presentTenseConjugator:any, private participleHelper, private toBeInfinitive:Infinitive) {}

    conjugate = (infinitive, pronoun) => {
        const conjugatedToBeVerb = this.presentTenseConjugator.conjugate(this.toBeInfinitive, pronoun)
        return `${conjugatedToBeVerb} ${this.participleHelper.getSecondParticiple(infinitive, pronoun)}`
    }

    conjugateNegation = (infinitive, pronoun) => {
        const participle = this.participleHelper.getSecondParticiple(infinitive, pronoun)
        return `${pronoun.getNoWord()} ${this.toBeInfinitive.getWeakStem()} ${participle}`
    }
}