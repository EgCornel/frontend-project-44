import readlineSync from 'readline-sync';

export default () => {
  console.log('Добро пожаловать в Игры Разума!');

  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log(`Привет, ${name}!\n`);
};
