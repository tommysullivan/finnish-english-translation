module.exports = function(decorated, decorator) {
    return {
        applies: function(inputWord) {
            return decorated.applies(inputWord) && decorator.applies(inputWord);
        },
        apply: function(inputWord) {
            return decorator.apply(decorated.apply(inputWord));
        },
        toString: function() {
            return decorator.toString()+' '+decorated.toString();
        },
        complexity: function() {
            return decorated.complexity() + decorator.complexity();
        }
    }
}