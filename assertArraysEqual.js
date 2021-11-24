// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let valA = actual;
  let valB = expected;

  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
   
  }
};

const eqArrays = function(Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`:octagonal_sign: Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`:octagonal_sign: Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`:white_check_mark: Assertion Passed: ${arr1} === ${arr2}`);
  return true;
};


console.log(assertArraysEqual([1, 2, 3] , [1, 2, 3]), true);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// The tests can be written below the definition of your function. Here's one example to get you started.
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS