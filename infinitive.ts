export class Infinitive {
    constructor(private infinitiveWord:any, private collectionOfVerbConfigurations:any, private wordFactory:any) {}
    
    private getDesiredVerbConfiguration = (infinitiveWord) => {
        return this.collectionOfVerbConfigurations.filter(
            (row:any) => row[0]==infinitiveWord.toString()
        ).first()
    }

    getStrongStem = () => {
        return this.wordFactory.createWord(this.getDesiredVerbConfiguration(this.infinitiveWord)[1]);
    }

    getWeakStem = () => {
        return this.wordFactory.createWord(this.getDesiredVerbConfiguration(this.infinitiveWord)[2]);
    }

    getStemForPerfectConjugation = () => {
        const doubleStem = this.getDesiredVerbConfiguration(this.infinitiveWord)[3];
        return this.wordFactory.createWord(doubleStem!=undefined ? doubleStem : this.getStrongStem());
    }

    toString = this.infinitiveWord.toString
    contains = this.infinitiveWord.contains
    charFromEnd = this.infinitiveWord.charFromEnd
    endsWith = this.infinitiveWord.endsWith
    last = this.infinitiveWord.last
    equals = this.infinitiveWord.equals
}