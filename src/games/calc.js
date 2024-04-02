import randomNumber from '../utils.js';

const MIN_RAND_NUM = 1;
const MAX_RAND_NUM = 100;
const OPERATORS = ['+', '-', '*'];

const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation in func calculateExpression: '${operation}' !`);
  }
};

export const description = 'What is the result of the expression?';

export const generateRound = () => {
  const num1 = randomNumber(MIN_RAND_NUM, MAX_RAND_NUM);
  const num2 = randomNumber(MIN_RAND_NUM, MAX_RAND_NUM);
  const operation = OPERATORS[randomNumber(0, OPERATORS.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, operation).toString();

  return [question, correctAnswer];
};
