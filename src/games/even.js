export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumber = () => Math.floor(Math.random() * 100);

const randomNumbers = (count) => {
  const arr = [];
  for (let i = 0; i < count; i += 1) {
    arr.push(randomNumber());
  }
  return arr;
};

export const question = randomNumbers(3);

const isEven = (numbers) => {
  const answers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (question[i] % 2 === 0) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }
  return answers;
};

export const correctAnswer = isEven(question);
