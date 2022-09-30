export function twoNum_naive(nums: number[], target: number): [number, number] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else {
        continue;
      }
    }
  }
  return [0, 0];
}

export function twoNum_one(nums: number[], target: number): [number, number] {
  const knownIndices: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const pairingValue: number = target - i;
    if (knownIndices[pairingValue] === undefined) {
      knownIndices[pairingValue] = nums.indexOf(pairingValue);
    }
    const pairing: number = knownIndices[pairingValue];
    if (pairing !== -1) {
      return [i, pairing];
    }
  }
  return [0, 0];
}
