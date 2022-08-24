export function find<T>(
  arrayOfT: T[],
  predicateFn: (el: T) => boolean,
): T | undefined {
  for (const el of arrayOfT) {
    if (predicateFn(el)) {
      return el;
    }
  }

  return undefined;
}
