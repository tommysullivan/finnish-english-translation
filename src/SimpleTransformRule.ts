export class SimpleTransformRule {
    constructor(private suffix:string, private newSuffix:string) {}

    private suffixLocation = (stem:string) => {
        return stem.indexOf(this.suffix, stem.length - this.suffix.length) 
    }

    applies = (stem:string) => {
        return this.suffixLocation(stem) !== -1;
    }

    apply = (stem:string) => {
        return stem.substring(0, this.suffixLocation(stem)) + this.newSuffix;
    }

    toString = () => `SimpleTransformRule ${this.suffix} => ${this.newSuffix}`

    complexity = () => this.suffix.length + this.newSuffix.length
}