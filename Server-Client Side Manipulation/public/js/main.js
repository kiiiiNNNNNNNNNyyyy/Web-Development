(function(){

	function perform(string1,string2,num1,num2){
		var text1 = string1;
		var text2 = string2;
		var number1 = num1;
		var number2 = num2;
		var result;

		var arr = [];

		for(var i=0;i<text1.length;i++){
			arr[i] = text1[i];
		}
		console.log(arr);

		var repeatFor = number1;
		var repeatAfter = number2;  
		var x = 0,y=1;
		for(var i=0;i<arr.length;i++){
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
		return result;
	}

	var staticForm = document.getElementById("static-form");

	if(staticForm){
		var firstTextElement = document.getElementById("text1");
		var secondTextElement = document.getElementById("text2");
		var firstNumElement = document.getElementById("number1");
		var secondNumElement = document.getElementById("number2");

		var errorContainer = document.getElementById("error-container");
		var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

		var resultContainer = document.getElementById("result-container");
		var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

		staticForm.addEventListener("submit", function (event) {
			event.preventDefault();

			try{
				errorContainer.classList.add("hidden");
				resultContainer.classList.add("hidden");

	                // Values come from inputs as strings, no matter what :(
	                var firstTextValue = firstTextElement.value;
	                var secondTextValue = secondTextElement.value;
	                var firstNumValue = firstNumElement.value;
	                var secondNumValue = secondNumElement.value;


	                var result = perform(firstTextValue, secondTextValue, firstNumValue, secondNumValue);

	                resultTextElement.textContent = "The result : " + result;
	                resultContainer.classList.remove("hidden");
	            }catch (e){
	            	var message = typeof e === "string" ? e : e.message;
	            	errorTextElement.textContent = e;
	            	errorContainer.classList.remove("hidden");
	            }	
	        });
	}

})();