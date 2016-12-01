'use strict'
const express = require('express');
const router = express.Router();
const data = require("../data");
const text = data.text;

router.get("/clientform", (req, res) => {
    res.render("text/static", {});
});

router.get("/serverform", (req, res) => {
    res.render("text/server", {});
});

router.get("/", (req,res) => {
    res.render("text/index", {})
});

router.post("/serverform", (req, res) => {
    let text1 = req.body.text1;
    let text2 = req.body.text2;
    let number1 = parseInt(req.body.number1);
    let number2 = parseInt(req.body.number2);
    let result;
    var arr = [];


    try{
        
        for(let i=0;i<text1.length;i++){
            arr[i] = text1[i];
        }
        console.log(arr);

        var repeatFor = number1;
        var repeatAfter = number2;  
        let x = 0,y=1;
        for(let i=0;i<arr.length;i++){
            if((repeatFor < 0) || (repeatAfter < 0)){
                throw "Why  are you so 'negative'";
            }
            if((repeatFor > 25)|| (repeatAfter > 25)){
                throw "Shouldn't be greater than 25";
            }
            if((repeatFor * repeatAfter) > arr.length){
                throw "Your input is too small. Either increase the input length or decrease the number of repetition!!";
            }
            if((repeatFor === 0) || (repeatAfter === 0)){
                break;
            }
            if((i%repeatAfter === 0) &&(i!=0) && (x<1)){
                arr.splice(i,0, text2);
                x++;
            }
            else if((i%repeatAfter === 0) && (x<repeatFor)&&(i!=0)){
                arr.splice(i+y,0, text2);
                x++;y++;
            }
        }
        result = arr.join('');
        console.log(result); 
    }
    catch(e){
        res.render("text/server", { text1: text1, text2: text2, number1: number1, number2:number2, error: e });
        return;
    }

    res.render("text/server", { text1: text1, text2:text2, number1: number1, number2:number2, result: result });
});

module.exports = router;