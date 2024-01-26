let random = Math.round(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const user = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startagain = document.querySelector('.resultParas');
const p = document.createElement('p');
let prev = [];
let numOfGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(user.value);
        valid(guess);
    });
}

function valid(guess) {
    if (isNaN(guess) || guess === '') {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 to 100');
    } else {
        prev.push(guess);
        if (numOfGuess === 10) {
            displayGuess(guess);
            display('Game Over. Random number was ' + random);
            endgame();
        } else {
            displayGuess(guess);
            check(guess);
        }
    }
}

function check(guess) {
    if (guess === random) {
        display('Your guess was right');
        endgame();
    } else if (guess < random) {
        display('Number is too low');
    } else if (guess > random) {
        display('Number is too high');
    }
}
function displayGuess(guess) {
    user.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numOfGuess++;
    remain.innerHTML = `${11 - numOfGuess}`;
}

function display(msg) {
    lowHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
    user.value = '';
    user.setAttribute('disabled', ''); 
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start Again</h2>';
    startagain.appendChild(p);
    playGame = false;
    newgame();
}

function newgame() {
    const newgameButton = document.querySelector('#newGame');
    newgameButton.addEventListener('click', function (e) {
        random = Math.round(Math.random() * 100 + 1);
        prev = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remain.innerHTML = `${11- numOfGuess}`;
        user.removeAttribute('disabled');
        startagain.removeChild(p);
        playGame = true;
    });
}
console.log(random)
