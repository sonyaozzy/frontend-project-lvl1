import { getRandomNumberWithoutZero } from '../common.js';

const findDivisors = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const findCommonDivisors = (firstDivisors, secondDivisors) => {
  const commons = [];

  for (let i = 0; i < firstDivisors.length; i += 1) {
    for (let j = 0; j < secondDivisors.length; j += 1) {
      if (secondDivisors[j] === firstDivisors[i]) {
        commons.push(firstDivisors[i]);
      }
    }
  }

  return commons;
};

const calculateGCD = (firstNumber, secondNumber) => {
  const firstNumberDivisors = findDivisors(firstNumber);
  const secondNumberDivisors = findDivisors(secondNumber);

  const commonDivisors = findCommonDivisors(firstNumberDivisors, secondNumberDivisors);

  let result = 0;

  for (let i = 0; i < commonDivisors.length; i += 1) {
    if (commonDivisors[i] > result) {
      result = commonDivisors[i];
    }
  }

  return result;
};

export const gameCondition = 'Find the greatest common divisor of given numbers.';

export const generateQuestionAnswer = () => {
  const firstNumber = getRandomNumberWithoutZero();
  const secondNumber = getRandomNumberWithoutZero();

  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};
