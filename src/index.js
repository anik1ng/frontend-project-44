import { getNameAndGreet, questionAnswer } from './cli.js';

const MAX_ROUNDS = 3;

export default (gameData) => {
  const userName = getNameAndGreet();
  let correctAnswers = 0;
  console.log(gameData.description);

  while (correctAnswers < MAX_ROUNDS) {
    const [question, correctAnswer] = gameData.generateRound();
    const answer = questionAnswer(question);

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
