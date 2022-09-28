interface IStackObject {
  push: (element: number) => number;
  pop: () => number | undefined;
  isEmpty: () => boolean;
}
export function createStack(): IStackObject {
  const memoryArray: number[] = [];

  const _push = (element: number): number => {
    memoryArray.push(element);
    return memoryArray.length;
  };

  const _pop = (): number | undefined => {
    const poppedValue = memoryArray.pop();
    return poppedValue;
  };
  const _isEmpty = (): boolean => {
    return memoryArray.length === 0;
  };

  const stackObject = {
    push: (element: number) => _push(element),
    pop: () => _pop(),
    isEmpty: () => _isEmpty(),
  };

  return stackObject;
}
