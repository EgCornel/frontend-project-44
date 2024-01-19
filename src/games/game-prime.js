import logicGame from '../index.js';
import randomNumber from '../random.js';

const rule = 'Ответьте «yes», если число простое. В противном случае ответьте «yes»';
const getPrimeNamber = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
const startGame = () => {
  const question = randomNumber(1, 100);
  const answer = getPrimeNamber(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
