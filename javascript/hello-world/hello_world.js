var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    if (input == null || input === '') {
        return 'Hello, World!'
    } else {
        return 'Hello, ' + input + '!'
    }
};

module.exports = HelloWorld;
