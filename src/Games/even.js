import readlineSync from 'readline-sync';

const randomNumber = () => Math.floor(Math.random() * 100);

const evenQuestions = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const evenNumber = number % 2 === 0;

    console.log(`Question:${number}`);

    const answer = readlineSync.question('Your answer:');
    const answerCaseInsensitive = answer.toLowerCase();

    if (evenNumber) {
      if (answerCaseInsensitive === 'yes') {
        console.log('Correct!');
      } if (answerCaseInsensitive !== 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
        return;
      }
    }
    if (!evenNumber) {
      if (answerCaseInsensitive === 'no') {
        console.log('Correct!');
      } if (answerCaseInsensitive !== 'no') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenQuestions;
