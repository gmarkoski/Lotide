// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let valA = actual;
  let valB = expected;

  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: $[valA] === $[valB]`);
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: $[valA] !=== $[valB]`);
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


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// The tests can be written below the definition of your function. Here's one example to get you started.
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS