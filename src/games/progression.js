import { getRandomNumber, getRandomNumberWithoutZero } from '../common.js';

const getProgression = (start, step, length) => {
  const progression = [start];
  let member = start;
  for (let i = 1; i < length; i += 1) {
    member += step;
    progression.push(member);
  }

  return progression;
};

const randomMember = () => Math.floor(Math.random() * 10);

export const gameCondition = 'What number is missing in the progression?';

export const generateQuestionAnswer = () => {
  const progression = getProgression(getRandomNumber(), getRandomNumberWithoutZero(), 10);
  const progressionCopy = [...progression];

  const memberToHide = randomMember();
  progressionCopy[memberToHide] = '..';

  const question = progressionCopy.join(' ');
  const answer = progression[memberToHide].toString();

  return [question, answer];
};
