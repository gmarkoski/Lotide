// FUNCTION IMPLEMENTATION

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

module.exports = assertArraysEqual;
