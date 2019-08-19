import { Collection } from "collections";

export default function Character(characterString:string, vowelCollection:Collection, predicates:any) {
    return {
        isVowel: function() {
            return vowelCollection.any(predicates.equals(characterString.toLowerCase()));
        },
        toString: function() {
            return characterString;
        },
        equals: function(otherChar:any) {
            return characterString == otherChar.toString();
        }
    }   
}