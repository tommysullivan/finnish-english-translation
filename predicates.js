module.exports = function() {
    return {
        equals: function(valueToReturnTrueFor) {
            return function(valueToCompare) {
                return valueToCompare == valueToReturnTrueFor;
            }
        }
    }
}