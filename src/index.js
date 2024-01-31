import readlineSync from 'readline-sync';

const logicGame = (rule, startGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const lastRound = 3;
  for (let gameRound = 1; gameRound <= lastRound; gameRound += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    }
    if (userAnswer !== String(answer)) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default logicGame;
