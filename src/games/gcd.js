import getRandomNumber from '../common.js';
import newGame from '../index.js';

const calculateGCD = (firstNumber, secondNumber) => {
  let firstNum = firstNumber;
  let secondNum = secondNumber;

  if (firstNumber < secondNumber) {
    firstNum = secondNumber;
    secondNum = firstNumber;
  }

  if (secondNum === 0) {
    return firstNum;
  }

  const remainder = firstNum % secondNum;

  if (remainder === 0) {
    return secondNum;
  }
  return calculateGCD(secondNum, remainder);
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
