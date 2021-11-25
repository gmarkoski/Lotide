// FUNCTION IMPLEMENTATION
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

const eqArrays = function (Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) {         //if array length doesn't match remove now
    return false;
  }
  for (let i = 0; i < Arr1.length; i++) {      //
    if (Arr1[i] !== Arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function (sentence) {
  let results = {};
  // let characters = new Map();

  // for (const key of sentence) {    // initialize to run through the sentence
  //   if (key !== ' ')
  //     characters.set(key, count);
  // }

  for (let i = 0; i < sentence.length; i++) {           //count the # of times that the character occurs
    let position = i;
    let letter = sentence[i]

    if (letter !== ' ') {

      if (results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));




//assertArraysEqual(letterPositions("hello").e, [1]);


// console.log("hello");