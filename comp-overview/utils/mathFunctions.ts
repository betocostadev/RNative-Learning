export function sumNumbersArr(arr: number[]): number {
  if (arr.some((num) => isNaN(num))) {
    // throw new Error('Please input valid numbers')
    return 0
  }

  return [...arr].reduce((acc, num) => acc + num, 0)
}
