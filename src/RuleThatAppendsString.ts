import { Word } from "./Word";

export class RuleThatAppendsString {
    constructor(private stringToAppend:string) {}

    applies = (inputWord:Word) => true
    apply = (inputWord:Word) => `${inputWord}${this.stringToAppend}`
    toString = () => "RuleThatAppendsStringAfterNestedRule"
    complexity = () => 1
}