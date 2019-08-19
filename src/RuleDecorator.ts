export class RuleDecorator {
    constructor(private decorated:any, private decorator:any) {}
    applies = (inputWord:any) => this.decorated.applies(inputWord) && this.decorator.applies(inputWord)
    apply = (inputWord:any) => this.decorator.apply(this.decorated.apply(inputWord))
    toString = () => `${this.decorator.toString()} ${this.decorated.toString()}`
    complexity = () => this.decorated.complexity() + this.decorator.complexity()
}