//SInce I created all programs separately and then combined them in one file, there might be some function redundancies

'use strict'

// Sum of Squares
console.log();
function ifNumber(o){
	return typeof o == "number" || (typeof o == "object" && o.constructor === Number);
};

function exceptions(message){
	this.message = message;
}

function sumOfSquares(num1,num2,num3){

	let sum = 0;

	if((ifNumber(num1))&&(ifNumber(num2))&&(ifNumber(num3))){
		let square1 = num1*num1;
		let square2 = num2*num2;
		let square3 = num3*num3;

		sum  = square1 + square2 + square3;
		console.log("The Total sum of Sqaure is :" + sum);
	}else{
		throw new exceptions("Please enter only Positive numbers in the Array");
	}

}

sumOfSquares(5,3,10);

console.log();
console.log("****************************** END OF PROGRAM 1 *****************************");
console.log();
//	Say Hello

function exceptions2(message){
	this.message = message;
}

function isString(o) {	
	return typeof o == "string" || (typeof o == "object" && o.constructor === String); 
}


function sayHelloTo(firstname, lastname, title){


		if(ifNumber(firstname) || ifNumber(lastname) || ifNumber(title)){
			console.log("Please Enter a String");
		}
		else{
			if((typeof firstname == 'undefined')&&(typeof lastname == 'undefined')&&(typeof title == 'undefined')){
				console.log();
			}
			else if((typeof lastname == 'undefined')&&(typeof title == 'undefined')){
				console.log("Hello "+ firstname + "!!!");
			}
			else if(typeof title == 'undefined'){
				console.log("Hello, "+ firstname + " " + lastname + " I hope  you are having a good day!");
			}
			else{
				console.log("Hello, " + title + " " + firstname + " " + lastname + "!! Have a good evening");
			}
		}
		
}
sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr");

console.log();
console.log("****************************** END OF PROGRAM 2 *****************************");
console.log();

//99 Cups of Coffee on the  Desk

function exceptionHandling(message){
	this.message = message;
}

function ifNumber(o){
	return typeof o == "number" || (typeof o == "object" && o.constructor === Number);
};

function cupsOfCoffee(howManyCups){
	try{
		if(ifNumber(howManyCups) == true){																		//	Checking if Input is a Number

			if(howManyCups>99){																					// Checking if Input is less than 100 
				throw new exceptionHandling("Game is 99 Cups of Coffee. Enter a value less than 100!!");
			}
			else if(howManyCups>0){																				// Checking if Input is  positive
				for(let i=howManyCups; i>0;i--){
					if(i===1){																			// If there is  only  one Cups
						console.log(i + " cup of coffee on the desk!"+ i +" cup of coffee!")
						console.log("Pick it up, drink the cup, no more coffee left on the desk!")
					}else{
						console.log(i + " cups of coffee on the desk!"+ i +" cups of coffee!")			// If there are more than one Cups
						console.log("Pick one up, drink the cup,"+ (i-1) +" Cups of Coffee on the Desk ")
					}
					
					console.log();
				}
			}
			
			else{
				throw new exceptionHandling("Please Enter a Positive Integer");
			}
		}
		else{
			throw new exceptionHandling("Please Enter a Integer, No Strings Please");
		}
	}
	catch(e){
		console.log(e.message);
	}
}

cupsOfCoffee(5);
console.log();

console.log("****************************** END OF PROGRAM 3 *****************************");
console.log();


//Occurences of  Subsstring

function exceptionHandling2(message){
	this.message = message;
}

function isString(o) {
	return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}

function countSubstring(str, subStr) {
    var matches = str.match(new RegExp(subStr, "g"));
    console.log("The number of "+ subStr +" in " + str + " is :" + matches.length);
}

function occurrencesOfSubstring(fullString, substring){
	try{

		if((isString(fullString) == true) && (isString(substring) == true)){		// Checking if both Inputs are Strings
			
			fullString =  fullString.toLowerCase();									// Conversion to lower case  
			substring =  substring.toLowerCase();

			countSubstring(fullString, substring);									// Calculating the matches
			
			}
		
		else{
			throw new exceptionHandling2("Please Enter a String!!");
		}	
	}
	catch(e){
		console.log(e.message);
	}
}

occurrencesOfSubstring("Helllllllo, class", "ll");
console.log();
console.log("****************************** END OF PROGRAM 4 *****************************");
console.log();		

// Randomize Sentences

function isString(o) {
	return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}

function exceptionHandling3(message){
	this.message = message;
}

function shuffleArray(a) {															// Shuffling the elements of the Array
	var j, k, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		k = a[i - 1];
		a[i - 1] = a[j];
		a[j] = k;
	}
}

function randomizeSentences(paragraph){
	try{
		let separator = '.';
		if((isString(paragraph) == true) && isString(separator) == true){		// Checking if Input  is a String
			var array = paragraph.split(separator);							// Adding elements separatedd by the separator  in an Array
			shuffleArray(array); 
			console.log(array.join(''));										// Printing all the elements
		}
		else{
			throw new exceptionHandling3("Please Enter a String");
		}
	}
	catch(e){
		console.log(e.message);
	}
}

randomizeSentences(" Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");

console.log();
console.log("****************************** END OF PROGRAM 5 *****************************");
console.log();


