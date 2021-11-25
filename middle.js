// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   let valA = actual;
//   let valB = expected;

//   if (valA === valB) {
//     console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: $[valA] === $[valB]`);
//     console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
//   } else {
//     console.log(`Assertion Failed: $[valA] !=== $[valB]`);
//     console.log(`Assertion Failed: ${valA} !=== ${valB}`);
//   }
// }

// const eqArrays = function(Arr1, Arr2) {
//   if (Arr1.length !== Arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < Arr1.length; i++) {
//     if (Arr1[i] !== Arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     console.log(`:octagonal_sign: Assertion Failed: ${arr1} !== ${arr2}`);
//     return false;
//   }
//   for (let i = 0; i <= arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`:octagonal_sign: Assertion Failed: ${arr1} !== ${arr2}`);
//       return false;
//     }
//   }
//   console.log(`:white_check_mark: Assertion Passed: ${arr1} === ${arr2}`);
//   return true;
// }

const middle = function(array) {
  let midArr = [];
  
  if (array.length <= 2) {
    return [];
  }
 
  if (array.length % 2 !== 0) {
    let midInd = array.length / 2;
    let middleIndex = Math.floor(midInd);
    midArr.push(array[middleIndex]);
    return midArr;
  }
  if (array.length % 2 === 0) {
    let midInd = array.length / 2;
    let middleIndex = Math.floor(midInd);
    let lowmiddleInd = middleIndex - 1;
    midArr.push(array[lowmiddleInd])
    midArr.push(array[middleIndex]);
    return midArr;

  }
};
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// / instructions:
// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
// 1.For arrays with one or two elements, there is no middle. Return an empty array.
// 2.For arrays with odd number of elements, an array containing a single middle element should be returned.
// 3.For arrays with an even number of elements, an array containing the two elements in the middle should be returned
