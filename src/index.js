import readlineSync from 'readline-sync';

const newGame = (condition, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(`${condition}`);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${question[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default newGame;
