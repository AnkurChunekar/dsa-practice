/*  Recursion */

/* 
1. Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
2. Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
*/

const factorial = (n) => (n === 1 ? 1 : n * sumRange(n - 1));