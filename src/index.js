import readlineSync from 'readline-sync';

const logicGame = (rule, startGame) => {
  console.log('Добро пожаловать в Игры Разума!');
  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log(`Привет, ${name}!`);
  console.log(rule);

  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    }
    if (userAnswer !== String(answer)) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default logicGame;
