//need input and button linked
//Random number generator
//Read what number attempt
//read user input
//if else statement
//relevant response
import { getRandomInt } from '../utils.js';

//const resetBtn = document.getElementById('reset-button');
const numberInput = document.getElementById('user-guess');
const submitBtn = document.getElementById('submit-button');
const response = document.getElementById('response');
const attempts = document.getElementById('attempts-left');
const randNum = getRandomInt();
var clickCount = 0;
console.log(randNum);
// resetBtn.addEventListener('click', ()=>{
//     console.log(randNum);
//     return randNum;
//     clickCount =0;
// });


submitBtn.addEventListener('click', ()=>{
    clickCount++;
    console.log(clickCount);
    if (clickCount > 2) {
        document.getElementById('submit-button').disabled = true;
        attempts.textContent = `You're out of guesses!`;
    } else {
        attempts.textContent = `You've guessed ${clickCount}/3 times.`;
    }
    if (numberInput.value > randNum) {
        response.textContent = `Lower.`;
    } else if (numberInput.value < randNum) {
        response.textContent = `Higher.`;
    } else {
        response.textContent = `You guessed it!`;
    }
});


