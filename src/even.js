import readlineSync from 'readline-sync';

const getNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const askQuestion = () => {
  const number = randomNumber(1, 100);
  console.log(`Question: ${number}`);

  return number;
};

const isNumberEven = (number) => number % 2 === 0;

export default () => {
  let rightAnswers = 0;
  const name = getNameAndGreet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswers < 3) {
    const number = askQuestion();

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isNumberEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
