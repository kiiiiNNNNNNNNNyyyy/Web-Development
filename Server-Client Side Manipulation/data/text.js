'use strict'
let exportedMethods = {
    perform(string1, string2, num1, num2){
        let text1 = string1;
        let text2 = string2;
        let number1 = num1;
        let number2 = num2;
        let result;

        var arr = [];

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
        return result;
    }
}

module.exports = exportedMethods;