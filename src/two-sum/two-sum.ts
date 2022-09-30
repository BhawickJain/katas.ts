export function twoNum_naive(nums: number[], target: number): [number, number] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            } else {
                continue
            }
        }
    }
    return [0, 0]
}