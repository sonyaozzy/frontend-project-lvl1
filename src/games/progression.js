export const condition = 'What number is missing in the progression?';

const randomNumber = () => Math.floor(Math.random() * 100);

const randomProgressions = (count) => {
  const progression = [];

  let result = randomNumber();
  let arr = [result];
  let difference = randomNumber();

  for (let i = 0; i < count; i += 1) {
    for (let j = 1; j < 10; j += 1) {
      result += difference;

      arr.push(result);
    }

    progression.push(arr);

    result = randomNumber();
    arr = [result];
    difference = randomNumber();
  }

  return progression;
};

const progressions = randomProgressions(3);
// console.log(progressions);

const randomMember = () => Math.floor(Math.random() * 10);

const randomMembers = (count) => {
  const members = [];
  for (let i = 0; i < count; i += 1) {
    members.push(randomMember());
  }

  return members;
};
// console.log(randomMembers());

const membersToHide = randomMembers(3);
// console.log(membersToChange);

const incompleteProgressions = (arr, arrMembers) => {
  const newArr = JSON.parse(JSON.stringify(arr));

  for (let i = 0; i < arrMembers.length; i += 1) {
    newArr[i][arrMembers[i]] = '..';
  }

  const arrsToString = [];
  for (let i = 0; i < newArr.length; i += 1) {
    arrsToString.push(newArr[i].join(' '));
  }

  return arrsToString;
};

export const question = incompleteProgressions(progressions, membersToHide);
// console.log(progressions);

const answers = (arr, arrMembers) => {
  const answersArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    answersArr.push(arr[i][arrMembers[i]].toString());
  }

  return answersArr;
};

export const correctAnswer = answers(progressions, membersToHide);
