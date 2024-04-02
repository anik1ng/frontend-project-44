import randomNumber from '../utils.js';

const MIN_RAND_NUM = 1;
const MAX_RAND_NUM = 100;

const isEven = (number) => number % 2 === 0;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const question = randomNumber(MIN_RAND_NUM, MAX_RAND_NUM);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
