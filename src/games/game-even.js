import logicGame from '../index.js';
import getRandomNumber from '../random.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGame = () => {
  const number = getRandomNumber(0, 100);
  const question = number;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
