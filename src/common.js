export const getRandomNumber = () => Math.floor(Math.random() * 100);
export const getRandomNumberWithoutZero = () => Math.floor(Math.random() * 99) + 1;
export const getCorrectAnswer = (statement) => (statement ? 'yes' : 'no');
