import { Collection } from "collections"

export class Pronoun {
    constructor(
        private pronounString:string, 
        private pluralPronounCollection:Collection, 
        private firstPersonPronounCollection:Collection,
        private secondPersonPronounCollection:Collection
    ) {}

    isPlural = () => {
        return this.pluralPronounCollection.contains(this.pronounString.toLowerCase())
    }

    isSingular = () => {
        return !this.isPlural()
    }

    getNoWord = () => {
        if(this.isSingular()) {
            if(this.isFirstPerson()) return 'en'
            if(this.isSecondPerson()) return 'et'
            return 'ei'
        }
        else {
            if(this.isFirstPerson()) return 'emme'
            if(this.isSecondPerson()) return 'ette'
            return 'eivät'
        }
    }

    isFirstPerson = () => this.firstPersonPronounCollection.contains(this.pronounString.toLowerCase())
    isSecondPerson = () => this.secondPersonPronounCollection.contains(this.pronounString.toLowerCase())
    isThirdPerson = () => !(this.isFirstPerson || this.isSecondPerson())
}