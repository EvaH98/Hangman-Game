//1. Create an array of words
//2. Choose word randomly 
//3. Create underscores based on the length of the words
//4. Print the underscores on the screen
//5  Have a way for the user to press the letters
//6. If they press the right letter, the underscores turn into said letter
//7. If wrong, decrese the number of guesses remaining
//8. Have a reference of letters already chosen so that the player doesn't repeat and loose guesses
//9. Have also a reference of the last letter chosen (e.i: if they choose r, r will appear as the last letterguesed)
//10. If the player guesses the right word, alert that they're a winner
//11. If the player doesn't guess the right word, alert that they have lost :(
	
	//Creat an array that lists all the options
	var wordBank = ["pacman","mortalkombat","donkeykong","spaceinvaders","asteroids","digdug", "mariobros", "dragonslair", "tetris", "galaga", "streetfighter"];
	
	//Variables to hold the number of wins and losses
	var wins = 0, losses =0;
	var wrongLetter = [];
	var guessesLeft =9;
	var underScores = [];
	var userGuesses = [];
	var randWord;
	var letterGuessed = [];
	var winCounter =0;


	

	function StartGame() {
	//Skeleton of the game

		//Random word generator
		randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		console.log('random word = ' + randWord);
		//Picks a random word
		for(var i = 0; i < randWord.length; i++) {
			underScores.push('_')

		}
		//Prints Underscores in the screen 
		document.getElementById('underscores').textContent = underScores.join("  ");
		console.log(underScores);
		wrongLetter = [];
		guessesLeft = 9;

		//Shows the number of lives left
		document.getElementById('lives').textContent = guessesLeft
	}

	function winLose() {
	//Sets if they player has won or not

		//If the player has choosen all the right words
		if (winCounter === randWord.length){
			alert("You're a winner!");
		
		//If the player has used all of their remaining guesses	
		} else if (guessesLeft === 0) {
			alert("You lose! Better Luck Next Time!");
			
		}

	}


	document.onkeyup = function (event) {

		userGuesses = event.key;
	

		

		console.log(userGuesses);

		
		//Checking if the letter exist inside of the word 
		if(randWord.indexOf(userGuesses) > -1) {
			for(var i = 0; i < randWord.length; i++) {
				if(randWord[i] === userGuesses) {
					underScores[i] = userGuesses;
					document.getElementById('underscores').textContent = underScores.join(" ");
					winCounter++;
					winLose();
				}
			}

		} else {
			wrongLetter.push(userGuesses);
			guessesLeft--;
			wrongLetter = letterGuessed;
			document.getElementById('lettersguessed').textContent = letterGuessed.join(" ");
			document.getElementById('lives').textContent = guessesLeft;
	
			winLose();
		} 

	}

		StartGame();
