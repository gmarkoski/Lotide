const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//Test inputs
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// The tests can be written below the definition of your function. Here's one example to get you started.
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
