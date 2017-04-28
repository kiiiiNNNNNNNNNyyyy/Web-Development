obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
}

for(key in obj){
    if(key === 'a'){
        console.log(key + ": " + obj[key]);
    }
}

obj2 = [
    {
        "name": "Arjun",
        "course": "MS in CS",
        "nick": "Bhadwa",
        "courses": [
            "CS561",
            "CSw546",
            "SSW 555"
        ]
    },
    {
        "name": "Akshay Mullay",
        "course": "MS in IS",
        "nick": "Chutiya",
        "courses": [
            "CS801",
            "CSw546",
            "SSW 555"
        ]
    },{
        "name": "Dhruvin",
        "course": "MS in CS",
        "nick": "Gaandu",
        "courses": [
            "BI542",
            "MI720",
            "IS 600"
        ]
    },
    {
        "name": "Nishant",
        "course": "MS in EM",
        "nick": "Randwa",
        "courses": [
            "BI542",
            "MI720",
            "IS 600"
        ]
    }
]

obj2.forEach(function(element) {
    if(element.name === "Nishant"){
        console.log(element.name + " is a " + element.nick + " and his courses are " + element.courses.toString());
    }
}, this);

//convert array into an object
array = ["a", "b", "c", "d"];
obj2 = {};
for(var i=0; i<array.length; i++){
    obj2[i] = array[i];
}

console.log(obj2);

//convert object into an array
var arr = [];
var arr2 = [];
for(key in obj2){
    arr.push(obj2[key]);
    arr2.push(key);  
}
console.log(arr.toString());
console.log(arr2.toString());

rgb = [];
for(var i=0; i<3; i++){
    var x  = Math.floor((Math.random() * 1000) +  1);

    rgb.push(x);
}

console.log(rgb.toString());
