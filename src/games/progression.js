import getRandomNumber from '../common.js';
import newGame from '../index.js';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {
  const fromNumber = 0;
  const fromNumberForStep = 1;
  const membersCount = 10;

  const progression = getProgression(getRandomNumber(fromNumber),
    getRandomNumber(fromNumberForStep), membersCount);

  const firstMember = 0;
  const lastMember = membersCount - 1;

  const memberToHide = getRandomNumber(firstMember, lastMember);
  const answer = progression[memberToHide].toString();

  progression[memberToHide] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const brainProgression = () => newGame(description, generateQuestionAnswer);

export default brainProgression;
