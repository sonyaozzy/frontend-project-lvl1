export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = () => Math.floor(Math.random() * 100);

const randomNumbers = (count) => {
  const arr = [];

  for (let i = 0; i < count; i += 1) {
    arr.push(randomNumber());
  }

  return arr;
};

export const question = randomNumbers(3);

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const answers = (numbers) => {
  const arr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    arr.push(isPrime(numbers[i]));
  }

  return arr;
};

export const correctAnswer = answers(question);
