const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//test
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
