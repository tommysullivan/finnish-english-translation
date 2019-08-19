import { Collection } from "collections"
import { Predicates } from "./Predicates"

export class Character {
    constructor(private characterString:string, private vowelCollection:Collection, private predicates:Predicates) {}

    isVowel = () => this.vowelCollection.any(
        this.predicates.equals(this.characterString.toLowerCase())
    )

    toString = () => this.characterString
    equals = (otherChar:Character) => this.characterString == otherChar.toString()
}