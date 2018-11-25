var input = document.querySelector('#input');
var submit = document.querySelector('#submit');
var output = document.querySelector("#output");
var error = document.querySelector("#error");

//This function checks if all characters are letters or spaces
function allLettersAndSpaces(inputtxt)
  {
   var letters = /^[A-Za-z\s]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }

//This function counts how many times a character occurs
function getOccurrence(thread, value){
	var count = 0;
	for(var i = 0; i < thread.length; i++){
		if(thread[i] === value){
			count++;
		}
	}
	return count;
}

//This function runs when the submit button is clicked
submit.addEventListener('click', function(){
	//This array stores characters that occured only once
	var nonRepeat = []
	var char = input.value.toLowerCase();

	for(var i = 0; i < char.length; i++){
		var count = getOccurrence(char, char[i]);
		//Run only if every character is a letter or space
		if(count === 1){
			if(allLettersAndSpaces(char)){
				nonRepeat.push(char[i]);
				var firstNonRepeat = nonRepeat[0];

				//Display the first character that occured once
				output.textContent = firstNonRepeat;
				output.style.color = "green";
			}else{
				//Display error message
				 output.textContent = "Only letters and spaces allowed!";
				 output.style.color = "red";
			}
		}
	}
	

});


//This function runs when the enter button is pressed
input.addEventListener('keypress', function(e){
	//This array stores characters that occured only once
	var nonRepeat = []
	var char = input.value.toLowerCase();
	var key = e.which;
	if(key === 13){
		for(var i = 0; i < char.length; i++){
			var count = getOccurrence(char, char[i]);
			//Run only if every character is a letter or space
			if(count === 1){
			if(allLettersAndSpaces(char)){
				nonRepeat.push(char[i]);
				var firstNonRepeat = nonRepeat[0];

				//Display the first character that occured once
				output.textContent = firstNonRepeat;
				output.style.color = "green";
			}else{
				//Display error message
				 output.textContent = "Only letters and spaces allowed!";
				 output.style.color = "red";
				}
			}
		}
	}
	
});