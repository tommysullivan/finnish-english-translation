module.exports = function(constructor, param1, param2, etc) {
    var constructorArgs = Array.prototype.slice.apply(arguments, 1);
    var instance = constructor.apply(null, constructorArgs);
    for(var methodName in instance) {
        var originalMethod = instance[methodName];
        instance[methodName]=function() {
            return originalMethod.apply(instance, arguments);
        }
    }
    return instance;
}