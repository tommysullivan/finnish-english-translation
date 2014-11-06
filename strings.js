module.exports=function(vowelCollection, predicates) {
    return {
        contains: function(string, substring){
            return string.indexOf(substring)!=-1;
        },
        isVowel: function(character) {
            return vowelCollection.any(predicates.equals(character.toLowerCase()));
        },
        charFromEnd: function(string, numCharactersFromEnd) {
            return string.charAt(string.length-numCharactersFromEnd);
        },
        endsWith: function(string, possibleEnd) {
            return string.substring(string.length-possibleEnd.length)==possibleEnd;
        },
        last: function(string, numCharsToTakeOr1AsDefault) {
            numCharsToTakeOr1AsDefault = numCharsToTakeOr1AsDefault || 1;
            return string.substring(string.length-numCharsToTakeOr1AsDefault);
        }
    }
}