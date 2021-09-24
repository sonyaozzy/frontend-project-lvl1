import { getRandomNumber, getCorrectAnswer } from '../common.js';

const isEven = (number) => number % 2 === 0;

export const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionAnswer = () => {
  const question = getRandomNumber();
  const answer = getCorrectAnswer(isEven(question));

  return [question, answer];
};
