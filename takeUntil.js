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
// };

const takeUntil = function(array, callback) {
  let result = [];

  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);