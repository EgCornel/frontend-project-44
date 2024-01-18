import logicGame from '../index.js';
import randomNumber from '../random.js';

const rule = 'Ответьте «yes», если число четное, в противном случае ответьте «no».';
const startGame = () => {
  const number = randomNumber(0, 100);
  const question = number;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
