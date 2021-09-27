import getRandomNumber from '../common.js';
import newGame from '../index.js';

const calculateGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return calculateGCD(secondNumber, firstNumber % secondNumber);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const firstNumber = getRandomNumber(fromNumber);
  const secondNumber = getRandomNumber(fromNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const brainGCD = () => newGame(description, generateQuestionAnswer);

export default brainGCD;
