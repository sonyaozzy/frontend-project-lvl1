import readlineSync from 'readline-sync';
import * as even from './games/even.js';
import * as prime from './games/prime.js';
import * as gcd from './games/gcd.js';
import * as calc from './games/calc.js';
import * as progression from './games/progression.js';

const newGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(game.gameCondition);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game.generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export const brainEven = () => newGame(even);
export const brainPrime = () => newGame(prime);
export const brainGCD = () => newGame(gcd);
export const brainCalc = () => newGame(calc);
export const brainProgression = () => newGame(progression);
