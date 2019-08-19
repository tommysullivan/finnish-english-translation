import { Infinitive } from "./Infinitive";

export class ParticipleHelper {
    getSecondParticiple = (infinitive:Infinitive, pronoun:any) => {
        const stem = infinitive.getStemForPerfectConjugation();
        const vowelToUseInSingularEnding = infinitive.endsWith('a') ? 'u' : 'y';
        const firstLetterOfEnding = infinitive.charFromEnd(2).equals('l') ? 'll' : 'n'
        const ending = pronoun.isPlural()
            ? firstLetterOfEnding + 'eet' 
            : firstLetterOfEnding + vowelToUseInSingularEnding + 't';
        return stem.concat(ending);
    }
}