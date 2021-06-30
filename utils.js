//Random Number Function provided by MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt() {
    return Math.floor(Math.random() * 20);
}

export function compareNumbers(numberInput, randNum) {
    console.log(numberInput, randNum);
    if (numberInput > randNum) {
        return `Lower.`;
    } else if (numberInput < randNum) {
        return `Higher.`;
    } else {
        return `You guessed it!`;
    }
}

// if (clickCount > 2) {
//     document.getElementById('submit-button').disabled = true;
//     attempts.textContent = `You're out of guesses!`;
// } else {
//     attempts.textContent = `You've guessed ${clickCount}/3 times.`;
// }