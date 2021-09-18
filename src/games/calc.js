// import readlineSync from 'readline-sync';

export const condition = 'What is the result of the expression?';

const randomNumber = () => Math.floor(Math.random() * 100);
const operators = ['+', '-', '*'];
const randomOperator = () => operators[Math.floor(Math.random() * 3)];

const randomExpressions = (count) => {
  const expressions = [];
  for (let i = 0; i < count; i += 1) {
    expressions.push(`${randomNumber()} ${randomOperator()} ${randomNumber()}`);
  }
  return expressions;
};

export const question = randomExpressions(3);

const stringToArr = (string) => {
  const arr = string.split(' ');
  return arr;
};

const answers = (expressions) => {
  const answersArr = [];
  for (let i = 0; i < expressions.length; i += 1) {
    const expressionToArr = stringToArr(expressions[i]);
    const firstNumber = Number(expressionToArr[0]);
    const secondNumber = Number(expressionToArr[2]);

    let correctAnswer = 0;

    switch (expressionToArr[1]) {
      case '+':
        correctAnswer = firstNumber + secondNumber;
        break;

      case '-':
        correctAnswer = firstNumber - secondNumber;
        break;

      case '*':
        correctAnswer = firstNumber * secondNumber;
        break;

      default:
    }
    answersArr.push(correctAnswer.toString());
  }
  return answersArr;
};

export const correctAnswer = answers(question);
