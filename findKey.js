// const assertEqual = function(actual, expected) {
//   let valA = actual;
//   let valB = expected;

//   if (valA === valB) {
//     console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
//   } else {
//     console.log(`Assertion Failed: ${valA} !=== ${valB}`);
//   }
// };

// example: findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"


const findKey = function(object, callback) {
  for (let key in object) {
    if(callback(object[key]));
    //sending the object key to the callback function which is in this case x => x.stars === 2
    return key;
  }
};
//ASSERTEQUAL FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//TEST CODES
assertEqual(findKey({
  "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");






