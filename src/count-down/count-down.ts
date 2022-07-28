const countDownFrom = (num: number): void => {
  const countDown: string[] = recurseCountDownFrom(num, []);
  countDown.forEach((el) => console.log(el));
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
