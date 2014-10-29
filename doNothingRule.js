module.exports = function() {
    return {
        applies: function() { throw new Error("cannot check whether DoNothingRule applies") },
        apply: function(original) {
            return original;
        },
        toString: function() {
            return "DoNothingRule";
        },
        complexity: function() { return 1; }
    }
}