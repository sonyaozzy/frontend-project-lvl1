import { getRandomNumber } from '../common.js';

const isEven = (number) => number % 2 === 0;

export const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateQuestionAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};
