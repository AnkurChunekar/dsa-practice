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

// Selection Sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (i !== minIndex) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

// Insertion sort

const insertionSort = (arr) => {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }

  return arr;
};

// Merge Sort

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  /*  1st possible Solution
  
  while (true) {
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArr.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        mergedArr.push(arr2[j]);
        j++;
      }
    } else if (i < arr1.length) {
      mergedArr.push(arr1[i]);
      i++;
    } else if (j < arr2.length) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      return mergedArr;
    }
  }

*/

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  return mergedArr;
};

/*  
Merge sort steps
 1. Break arrays in half till array.length = 1
 2. Use mergeSortedArrays fn to merge into one big arr.
*/

const mergeSort = (array) => {
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return mergeSortedArrays(mergeSort(left), mergeSort(right));
};

// Quick sort

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, 0, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort([4, 6, 1, 7, 3, 2, 5]));
