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

const findKeyByValue = function(inputObject, inputValue) {
  let workingArr = Object.keys(inputObject);  // this use of Object.keys will return an array that can be accessed using a for..of loop, because objects are not iterable (unless using for in loop?)

  for (const key of workingArr) {               // for of loop for an array
    if (inputObject[key] === inputValue) {        // [key] is used here instead of .key as I don't know the key value I'm looking for
      console.log(key);
      return key;
    }
  }
  //return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


//*Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined. /*
