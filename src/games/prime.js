import randomNumber from '../utils.js';

const MAX_NUMBER = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const genQA = () => {
  const number = randomNumber(0, MAX_NUMBER);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number, answer];
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const [question, correctAnswer] = genQA();

  return [question, correctAnswer];
};
