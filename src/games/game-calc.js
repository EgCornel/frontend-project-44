import logicGame from '../index.js';
import getRandomNumber from '../random.js';

const rule = 'What is the result of the expression?';
const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
  return calc;
};

const startGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operatorArray = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const operator = operatorArray[randomIndex];
  const question = (`${num1} ${operator} ${num2}`);
  const answer = calc(num1, num2, operator);
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
