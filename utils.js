//Random Number Function provided by MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt() {
    return Math.floor(Math.random() * 20);
}



// if (clickCount > 2) {
//     document.getElementById('submit-button').disabled = true;
//     attempts.textContent = `You're out of guesses!`;
// } else {
//     attempts.textContent = `You've guessed ${clickCount}/3 times.`;
// }
// if (numberInput.value > randNum) {
//     response.textContent = `Lower.`;
// } else if (numberInput.value < randNum) {
//     response.textContent = `Higher.`;
// } else {
//     response.textContent = `You guessed it!`;
// }