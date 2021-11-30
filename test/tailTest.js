const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;
// Test Case: Check the original array


it("returns [2, 3] for [1, 2, 3]", () => {
  assert.deepEqual(tail([1, 2, 3]), [2, 3]);
});

// // function tail(array) { another way to declare a function

//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3]; // => false