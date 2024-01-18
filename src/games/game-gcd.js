import logicGame from '../index.js';
import randomNumber from '../random.js';

const rule = 'Найдите наибольший общий делитель данных чисел.';
const startGame = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = (`${num1} ${num2}`);
  const getGcd = (num1, num2) => {
    if (num1 === 0) {
      return num2;
    }
    return getGcd(num2 % num1, num1);
  };
  const answer = getGcd(num1, num2);
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
