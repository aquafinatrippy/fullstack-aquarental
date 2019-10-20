module.exports.number = function(num) {
    if (num < 0) {
        return -num;
    }
    return num;
};

module.exports.greet = function(name) {
    return `Hello ${name}`;
};
