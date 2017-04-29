
//create sci-fi movies array for computer to choose a word

var sciFiMovies = ["Alien", "Gravity", "Iron Man", "Jurassic Park", "Star Trek", "Star Wars: A New Hope", "The Terminator", "The Lord of the Rings", "The Martian", "The Wizard of Oz"];

//create letters array for user to choose letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
	

//create movies Object: sci-fi movie:movie facts for display in .sci-fi-pic:#movie-facts
var movies = {"Alien":"One of my favorite Movies", 
			"Gravity":"My 2nd favorite", 
			"Iron Man":"Love Iron Man", 
			"Jurassic Park":"Scary dinasours", 
			"Star Trek":"Love the latest one",
			"Star Wars: A New Hope":"I've seen all the Star Wars movies!",
			"The Terminator": "I remember how scared I was on this one",
			"The Lord of the Rings": "The movies matched the books",
			"The Martian": "He made his poop fertilizer, lol!",
			"The Wizard of Oz":"Amazing for all ages",
		};
//initialize letterChoice array
var letterChoice = [];

//initialize currentWord letter array
var dashes = [];


//create count variable to keep track of # of guesses: remainingCount = 15
var remainingCount = 15;
var match = 1;
var wins = 0;

//var dupKey = 5;
//Computer to choose a word from sci-fi movies array, set currentWord var, display '_' for each character in the word
if (remainingCount=15) {
	var currentWord = sciFiMovies[Math.floor(Math.random()*sciFiMovies.length)].toLowerCase();
	console.log(currentWord + ":" + currentWord.length);
	for (l=0; l<currentWord.length; l++) {
		if (currentWord.charAt(l)==" ") {
			dashes.push("  ")
		}
		else {
		dashes.push(" __ ");
		}

	} //console.log(dashes.join(''));
	document.getElementById("letter-space").innerHTML = dashes.join('');
}

//get the key the user has pressed and
document.onkeyup = function(event) {
			
// 1. create on key up event to listen for letter pressed, store in letterChoice array			
	        var keyPressed = event.key; 
	        var dupKey=0;	        
// 2. check in letterChoice array if already chosen, if new then update remaining count

	        for (var i=0; i<letterChoice.length; i++) {
	        	
				//console.log("letter in array: " + letterChoice[i]);
				if(keyPressed===letterChoice[i]) {
					dupKey = ++dupKey;					
					//console.log("from the if: " + dupKey);
				}
				//console.log("from the for: " + dupKey);
			}
			//console.log("outside the for: " + dupKey);
			//if it is not a key already pressed then dupKey will be 0, update display
			if (dupKey==0 && remainingCount!=0) {
				--remainingCount;
				letterChoice.push(keyPressed);
				//console.log(letterChoice);
				document.getElementById("letters-guessed").innerHTML=letterChoice;
				document.getElementById("remaining").innerHTML = remainingCount;

				//check for letter in currentWord
				var indices = [];
				for(x=0; x<currentWord.length; x++) {
					if (keyPressed==currentWord.charAt(x)) {
						//console.log(currentWord.indexOf(keyPressed));
						indices.push(x);
					}
				} 
				console.log(indices);
				//replace the '__' with the matching letter
				
				if (indices.length>0) {
					for(y=0; y<indices.length; y++) {
					dashes.splice(indices[y], 1, keyPressed)
					match++;
					}
					document.getElementById("letter-space").innerHTML = dashes.join('').toUpperCase();

					//check for word match
					if((match == currentWord.length) && remainingCount!=0) {
						wins++;
						document.getElementById("wins").innerHTML = wins;
					}			
				}
			}
	    }


		
//Create a for loop with remainingCount starting at 15 going to 0
//Within the for loop
//
//3. function letterMatch: check if the letterGuess matches any letters in the currentWord, if yes - increment match and display at correct letter position
//4. function guessedDisplay: update #letters-guessed display with letterGuess text

//create a condition so when match count = currentWord.length 
//1.function wordMatch: get letters displayed, concatenate and compare string to currentWord, if true then increment .wins and return wordMatch, if false and remainingCount!=0 then go back to onKeyUp event
//2. function movieUpdate: wordMatch=true -- get corresponding movieImg and movieFact from movies Object and update display
