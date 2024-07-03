export function sumTwoNumbersArr(arr: number[]): number {
  if (arr.length !== 2) {
    // throw new Error('Array must have 2 numbers')
    return 0
  } else if (arr.some((num) => isNaN(num))) {
    // throw new Error('Array must have 2 numbers')
    return 0
  }

  return [...arr].reduce((acc, num) => acc + num, 0)
}
