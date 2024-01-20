import logicGame from '../index.js';
import randomNumber from '../random.js';

const rule = 'What number is missing in the progression?';
const getProgression = () => {
  const step = randomNumber(2, 5);
  let numProgression = randomNumber(0, 10);
  const progressionArray = [];
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(numProgression);
    numProgression += step;
  }
  return progressionArray;
};
const startGame = () => {
  const progression = getProgression();
  const randomIndex = randomNumber(0, 10);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;
  return [question, answer];
};
export default () => {
  logicGame(rule, startGame);
};
