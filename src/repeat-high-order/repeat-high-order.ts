const repeat = <T>(repeat: number, callbackFn: () => T): void => {
  for (let i = 0; i < repeat; i++) {
    callbackFn();
  }
};

export default repeat;
