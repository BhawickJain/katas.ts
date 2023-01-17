const countDownFrom = (num: number): string[] => {
  const countDown: string[] = recurseCountDownFrom(num, []);
  // countDown.forEach((el) => console.log(el)); // uncomment for demo
  return countDown;
};

const recurseCountDownFrom = (num: number, partial: string[]): string[] => {
  if (num <= 0) {
    return [...partial, "Blast off!"];
  } else {
    partial = [...partial, `${num}!`];
    return recurseCountDownFrom(num - 1, partial);
  }
};

export default countDownFrom;
