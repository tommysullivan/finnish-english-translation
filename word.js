module.exports = function(wordString, charFactory, wordFactory) {
    return {
        contains: function(substring){
            return wordString.indexOf(substring)!=-1;
        },
        charFromEnd: function(numCharactersFromEnd) {
            return charFactory.createChar(wordString.charAt(wordString.length - numCharactersFromEnd));
        },
        endsWith: function(possibleEnd) {
            return wordString.substring(wordString.length-possibleEnd.length) == possibleEnd;
        },
        last: function(numCharsToTakeOr1AsDefault) {
            numCharsToTakeOr1AsDefault = numCharsToTakeOr1AsDefault || 1;
            return wordString.substring(wordString.length - numCharsToTakeOr1AsDefault);
        },
        equals: function(otherWord) {
            return wordString == otherWord.toString()
        },
        toString: function() {
            return wordString;
        },
        concat: function(nextWord) {
            return wordFactory.createWord(wordString+nextWord.toString());
        }
    }
}