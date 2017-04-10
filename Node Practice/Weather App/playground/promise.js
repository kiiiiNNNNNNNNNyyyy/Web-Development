var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number')
                resolve(a+b);
            else{
                reject('Arguments must be number!!');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((result) => {
    console.log("Result 2: ", result);
}).catch((error) => {
    console.log(error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey, It Worked!1');
//         reject("Unable to fulfill the promise");
//     }, 2500);
// });

// var second = somePromise.then((user) => {
//     console.log("Success", user);
// }, (err) => {
//     console.log("Error: ", err);
// }).then((data) => {
//     console.log("Data passed", data);
// }); 