module.exports = function(stringToAppend) {
    return {
        applies: function(inputWord) {
            return true;
        },
        apply: function(inputWord) {
            return inputWord+stringToAppend;
        },
        toString: function() {
            return "RuleThatAppendsStringAfterNestedRule";
        },
        complexity: function() {
            return 1;
        }
    }
}