import readlineSync from 'readline-sync';

export const getNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name.toString();
};

export const questionAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ').toString();
};
