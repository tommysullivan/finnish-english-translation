module.exports = function(characterString, vowelCollection, predicates) {
    return {
        isVowel: function() {
            return vowelCollection.any(predicates.equals(characterString.toLowerCase()));
        },
        toString: function() {
            return characterString;
        },
        equals: function(otherChar) {
            return characterString==otherChar.toString();
        }
    }   
}