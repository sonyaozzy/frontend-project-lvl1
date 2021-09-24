import { getRandomNumberWithoutZero, getCorrectAnswer } from '../common.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateQuestionAnswer = () => {
  const question = getRandomNumberWithoutZero();
  const answer = getCorrectAnswer(isPrime(question));

  return [question, answer];
};
