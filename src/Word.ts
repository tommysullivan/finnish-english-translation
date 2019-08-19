import { Character } from "./Character"

export class Word {
    constructor(private wordString:string, private charFactory:any, private wordFactory:any) {}

    contains = (substring:string):boolean => this.wordString.indexOf(substring) != -1

    charFromEnd = (numCharactersFromEnd:number):Character => {
        return this.charFactory.createChar(
            this.wordString.charAt(
                this.wordString.length - numCharactersFromEnd
            )
        )
    }

    endsWith = (possibleEnd:string):boolean => {
        return this.wordString.substring(
            this.wordString.length - possibleEnd.length
        ) == possibleEnd
    }

    last = (numCharsToTakeOr1AsDefault:number = 1):string => {
        return this.wordString.substring(this.wordString.length - numCharsToTakeOr1AsDefault)
    }

    equals = (otherWord:Word):boolean => this.wordString == otherWord.toString()
    toString = ():string => this.wordString
    concat = (nextWord:Word):Word => this.wordFactory.createWord(`${this.wordString}${nextWord.toString()}`)
}