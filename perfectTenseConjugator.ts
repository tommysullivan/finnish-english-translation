import { Infinitive } from "./Infinitive"
import { ParticipleHelper } from "./participleHelper";
import { Pronoun } from "./Pronoun";

export class PerfectTenseConjugator {
    constructor(private presentTenseConjugator:any, private participleHelper:ParticipleHelper, private toBeInfinitive:Infinitive) {}

    conjugate = (infinitive:Infinitive, pronoun:Pronoun) => {
        const conjugatedToBeVerb = this.presentTenseConjugator.conjugate(this.toBeInfinitive, pronoun)
        return `${conjugatedToBeVerb} ${this.participleHelper.getSecondParticiple(infinitive, pronoun)}`
    }

    conjugateNegation = (infinitive:Infinitive, pronoun:Pronoun) => {
        const participle = this.participleHelper.getSecondParticiple(infinitive, pronoun)
        return `${pronoun.getNoWord()} ${this.toBeInfinitive.getWeakStem()} ${participle}`
    }
}