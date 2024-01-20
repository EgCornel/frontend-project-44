import logicGame from '../index.js';
import randomNumber from '../random.js';
import calc from '../calcul.js';

const rule = 'What is the result of the expression?';
const startGame = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const operatorArray = ['+', '-', '*'];
  const randomIndex = randomNumber(0, 2);
  const operator = operatorArray[randomIndex];
  const question = (`${num1} ${operator} ${num2}`);
  const answer = calc(num1, num2, operator);
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
