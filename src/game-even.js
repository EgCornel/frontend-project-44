import readlineSync from 'readline-sync';

const getQuestion = () => {
  const number = Math.ceil(Math.random() * 100);
  return number;
};

const getCorrectAnswer = (value) => {
  const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const brainEven = () => {
  console.log('Добро пожаловать в Игры Разума!');
  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log(`Привет, ${name}!\n`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (answer !== correctAnswer) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainEven;
