const assertEqual = function (actual, expected) {
  let valA = actual;
  let valB = expected;

  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
  }
};

const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log("array test-> ", arr1, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in object1) {
    for (const j in object2) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[j])) {
        if (eqArrays(arr1[i], arr2[j]) === false) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test2-> ", eqObjects(ab, ba)); // => true
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
console.log("test3-> ", eqObjects(ab, abc)); // => false
assertEqual(ab, abc);