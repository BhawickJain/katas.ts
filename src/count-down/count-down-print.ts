const countDownFrom = (num: number): void => {
  if (num <= 0) {
    // console.log("Blast off!"); // uncomment for demo
  } else {
    // console.log(`${num}!`); // uncomment for demo
    countDownFrom(num - 1);
  }
};

export default countDownFrom;
