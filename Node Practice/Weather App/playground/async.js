console.log("Starting app..");

setTimeout(() => {
    console.log('Inside of Callback');  
}, 2000);

setTimeout(() => {
    console.log('0 secs');
}, 0);

console.log('Fininshing...');