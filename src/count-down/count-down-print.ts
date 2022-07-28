const countDownFrom = (num: number): void => {
  if (num <= 0) {
    console.log("Blast off!");
  } else {
    console.log(`${num}!`);
    countDownFrom(num - 1);
  }
};

export default countDownFrom;
