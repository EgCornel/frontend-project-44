import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('Могу я узнать ваше имя?');
  console.log(`Привет, ${name}!\n`);
};
