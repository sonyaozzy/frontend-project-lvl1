import getRandomNumber from '../common.js';
import newGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const question = getRandomNumber(fromNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const brainPrime = () => newGame(description, generateQuestionAnswer);

export default brainPrime;
