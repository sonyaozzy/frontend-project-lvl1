export const condition = 'Find the greatest common divisor of given numbers.';

const randomNumber = () => Math.floor(Math.random() * 100);

const randomNumbers = (count) => {
  const numbers = [];

  for (let i = 0; i < count; i += 1) {
    numbers.push(`${randomNumber()} ${randomNumber()}`);
  }

  return numbers;
};

export const question = randomNumbers(3);

const stringToArr = (string) => {
  const arr = string.split(' ');

  return arr;
};

const findDivisors = (number) => {
  const divisors = [];
  if (number === 1) {
    divisors.push(1);
  }

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

const answers = (numbers) => {
  const answersArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const numbersToArr = stringToArr(numbers[i]);

    const firstNumber = Number(numbersToArr[0]);
    const secondNumber = Number(numbersToArr[1]);

    const commonDivisors = findCommonDivisors(
      findDivisors(firstNumber), findDivisors(secondNumber),
    );

    let result = 0;

    for (let j = 0; j < commonDivisors.length; j += 1) {
      if (commonDivisors[j] > result) {
        result = commonDivisors[j];
      }
    }

    answersArr.push(result.toString());
  }

  return answersArr;
};

export const correctAnswer = answers(question);
