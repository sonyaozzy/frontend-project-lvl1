import { getRandomNumber } from '../common.js';

const calculateExpression = (firstNumber, operator, secondNumber) => {
  let correctAnswer = 0;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
  }

  return correctAnswer;
};

export const gameCondition = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[Math.floor(Math.random() * 3)];

export const generateQuestionAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateExpression(firstNumber, operator, secondNumber).toString();

  return [question, answer];
};
