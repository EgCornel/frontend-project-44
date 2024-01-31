import logicGame from '../index.js';
import getRandomNumber from '../random.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getPrimeNamber = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};
const startGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = getPrimeNamber(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
