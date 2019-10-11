
const game = {
	
	answer 		: "",
	display 	: "",
	index 		: 0,
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
		//document.getElementById("testDisplay").innerHTML = guess;
		document.getElementById("word").innerHTML = "";

		num = this.answer.length;
		
		//document.getElementById("testDisplay").innerHTML = num;

		for(x = 0; x < num; x++) {
			document.getElementById("testDisplay").innerHTML = x + "<br>"
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
			}
		}
	} 

}
	


