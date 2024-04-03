import randomNumber from '../utils.js';

const MAX_PROGRESSION = 10;
const MAX_STEP = 10;

const genProgression = () => {
  const progression = [];
  const start = randomNumber(5, MAX_PROGRESSION);
  const step = randomNumber(1, MAX_STEP);

  for (let i = 0; i < MAX_PROGRESSION; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const genQA = () => {
  const progression = genProgression();
  const index = randomNumber(0, progression.length - 1);
  const answer = progression[index].toString();
  progression[index] = '..';

  return [progression, answer];
};

export const description = 'What number is missing in the progression?';

export const generateRound = () => {
  const [question, correctAnswer] = genQA();

  return [question, correctAnswer];
};
