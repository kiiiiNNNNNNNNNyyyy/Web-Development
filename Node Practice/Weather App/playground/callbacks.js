var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Arjun'
    };

    setTimeout(() => {
        callback(user);
    }, 2000);
    callback(user);
};

getUser(31, (user) => {
    console.log(user);
});