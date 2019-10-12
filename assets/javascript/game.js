
const game = {
	
	answer 		: "",
	display 	: "",
	index 		: 0,
	points		: 0,
	guessLeft	: 10,
	showLetter 	:[],

	startGame: function() {
		
		wordBank = ["halloween" , "spooky", "ghosts"];
		document.getElementById("word").innerHTML = "";
		index = Math.floor(Math.random() * wordBank.length);
		answer = wordBank[index];
		this.answer = answer;
		for( x = 0; x < answer.length; x++) {
			document.getElementById("word").innerHTML += "_";
			this.showLetter.push(0);
		}

	},

	guess: function() {
		text = document.getElementById("letter");
		guess = "";
		guess = text.value;
		guess = guess.toLowerCase();

		win = 0;

		if(guess.length == 1)
		{
			this.guessLeft = this.guessLeft - 1;

			//document.getElementById("testDisplay").innerHTML = guess;
			document.getElementById("word").innerHTML = "";
			document.getElementById("lastGuess").innerHTML += guess + " ";

			num = this.answer.length;
			
			//document.getElementById("testDisplay").innerHTML = num;

			for(x = 0; x < num; x++) {
				//document.getElementById("testDisplay").innerHTML = x + "<br>";
				if(guess == this.answer[x]) {
					this.showLetter[x] = 1;
				}	
			}

			for(y = 0; y < this.answer.length; y++) {
				if(this.showLetter[y] == 0) {
					document.getElementById("word").innerHTML += "_";
				}
				if(this.showLetter[y] == 1) {
					document.getElementById("word").innerHTML += this.answer[y];
					win++;
				}
			}

			if(win == num)
			{
				this.win();
			}
			if(this.guessLeft == 0)
			{
				this.lose();
			}
		}

	},
	
	win(){

		this.points++;
		this.guessLeft = 10;
		document.getElementById("testDisplay").innerHTML = "Points: " + this.points;
		document.getElementById("lastGuess").innerHTML = "Last Guess: ";
		for(x = 0; x < this.answer.length; x++){
			this.showLetter.pop(x);			
		}
		this.startGame();
	},

	lose()
	{
		this.guessLeft = 10;
		document.getElementById("testDisplay").innerHTML = "Points: " + this.points;
		document.getElementById("lastGuess").innerHTML = "Last Guess: ";
		for(x = 0; x < this.answer.length; x++){
			this.showLetter.pop(x);			
		}
		this.startGame();
	}
		
	
}
	


