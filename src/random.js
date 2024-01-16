const randomNumber = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const result = random(0, 100);
  console.log(result);
};
export default randomNumber;
