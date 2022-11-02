/*  Recursion */

/* 
1. Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
2. Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
*/

const factorial = (n) => (n === 1 ? 1 : n * sumRange(n - 1));
const sumRange = (n) => (n === 1 ? 1 : n + sumRange(n - 1));
const power = (base, exponent) =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);

// Bubble Sort

const bubbleSort = (arr) => {
  const lastIndex = arr.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    for (let j = 0; j < lastIndex - i; j++) {
      const incJ = j + 1;
      if (arr[j] > arr[incJ]) {
        const temp = arr[j];
        arr[j] = arr[incJ];
        arr[incJ] = temp;
      }
    }
  }
  return arr;
};
