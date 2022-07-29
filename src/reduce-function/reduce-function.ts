// are the T | U types the right approach? have I unnecessarily widened the time signature of prev?
const reduce = <T, U>(arr: T[], callbackFn: (prev: T | U, curr: T, currentIndex?: number, arr?: T[]) => U, initialValue?: U): T | U => {

    let prev: T | U = initialValue ? initialValue : arr[0]

    for (let i = 1; i < arr.length; i++) {
        const curr: T = arr[i]
        prev = callbackFn(prev, curr, i, arr)
    }

    return prev
}

export default reduce
