import logicGame from '../index.js';
import randomNumber from '../random.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};
const startGame = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = (`${num1} ${num2}`);
  const answer = getGcd(num1, num2);
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
