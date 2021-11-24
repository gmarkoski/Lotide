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

const without = function(source, itemsToRemove) {
  let missingItems = [];

  for (let i = 0; i <= source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      missingItems.push(source[i])
    }
  }
  return missingItems;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// instructions
/*
Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

process steps
create a function with source array and itemsToRemove array
define a working array so the original is not changed
compare each array element, and if not a match, push                                              the mismatch element to my working array
then return working array
then console log the test conditions


Here are a couple examples, but please don't limit your testing to just these scenarios:
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/