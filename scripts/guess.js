var randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value);
    var temp=0;
    var hint="";
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
   
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
        console.log(userGuess);
      temp=randomNumber-userGuess;
      console.log(temp);
      if(temp<0){
          hint="high!";
      }
      else{
          hint="low!";
      }
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'orange';
      if(temp >10 || temp <(-10)) {
        lowOrHi.textContent = 'Last guess was too '+hint;
      } else {
        lowOrHi.textContent = 'Last guess was  '+hint;
      }
    }
   
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
    lastResult.textContent = '';
    guesses.textContent = '';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }