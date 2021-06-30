// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guess is higher than answer show "lower"', (expect) => {
    const guess = 9;
    const answer = 17;
    const expected = 'lower';
    const actual = compareNumbers(guess, answer);
    expect.equal(actual, expected);
})