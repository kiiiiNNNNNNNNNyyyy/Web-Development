module.exports.add = (a, b) => {
    return a + b;
};  

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (x) => x*x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x*x);
    }, 500);
}
module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.fullName = names[0];
    user.lastname = names[1];
    return user;
};