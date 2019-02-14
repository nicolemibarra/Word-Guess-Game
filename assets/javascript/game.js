var doubleWord = ['A','B','C',
				  'D','E','F',
				  'G','H','I',
				  'J','K','L',
				  'M','N','O',
				  'P','Q','R',
				  'S','T','U',
				  'V','W','X',
				  'Y','Z',];

var wordBank =['REDSOX','ASTROS','CUBS','ROYALS','GIANTS','CARDINALS','YANKEES','PHILLIES','WHITESOX','MARLINS'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 3;
var rightGuessCounter = 0;	
//document.getElementById('teamlogo').innerHTML = "<img src='./Word-Guess-Game/assets/images/"+ choosenWord + ".jpeg'/>";
function reset()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	document.getElementById('teamlogo').innerHTML = "<img src='../assets/images/"+ choosenWord + ".jpeg'/>";
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 3;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['A','B','C',
					'D','E','F',
					'G','H','I',
					'J','K','L',
					'M','N','O',
					'P','Q','R',
					'S','T','U',
					'V','W','X',
					'Y','Z',];
	test=false;
	startGame();
}
function startGame()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	document.getElementById('teamlogo').innerHTML = "<img src='../assets/images/"+ choosenWord + ".jpeg'/>";
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	rightGuessCounter = 0;
	guessesLeft = 3;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['A','B','C',
					'D','E','F',
					'G','H','I',
					'J','K','L',
					'M','N','O',
					'P','Q','R',
					'S','T','U',
					'V','W','X',
					'Y','Z',];
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}
function compareLetters(userKey)
{
				if(choosenWord.indexOf(userKey) > -1)
				{
					for(var i = 0; i < numBlanks; i++)
					{
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}

				}
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
				}		
}
function winLose()
{
	if(rightGuessCounter === numBlanks)
	{
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		alert('HOME RUN');
		reset();
	}
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('STRIKE OUT');
		reset();
	}
}
startGame();
document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);

			compareLetters(letterGuessed);
			winLose();
		}
	}				
}

