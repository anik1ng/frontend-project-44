import randomNumber from '../utils.js';

const MIN_RAND_NUM = 1;
const MAX_RAND_NUM = 100;

const gcd = (a, b) => {
  let result = null;

  if (b === 0) {
    result = a;
  } else {
    result = gcd(b, a % b);
  }

  return result;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = randomNumber(MIN_RAND_NUM, MAX_RAND_NUM);
  const num2 = randomNumber(MIN_RAND_NUM, MAX_RAND_NUM);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};
