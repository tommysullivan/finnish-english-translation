export class ImperfectTenseConjugator {
    constructor(private participleHelper:any, private space:string) {}

    conjugate = (infinitive:any, pronoun:any) => {
        if(pronoun.isSingular()) {
            if(pronoun.isFirstPerson()) return 'olin';
            if(pronoun.isSecondPerson()) return 'olit';
            return 'oli';
        }
        else {
            if(pronoun.isFirstPerson()) return 'olimme';
            if(pronoun.isSecondPerson()) return 'olitte';
            return 'olivat';
        }
    }

    conjugateNegation = (infinitive:any, pronoun:any) => {
        const participle = this.participleHelper.getSecondParticiple(infinitive, pronoun);
        return pronoun.getNoWord() + this.space + participle;
    }
}