const assertEqual = function (actual, expected) {
  let valA = actual;
  let valB = expected;

  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
  }
};

const countLetters = function(arr) {
  let count = 0;
  let characters = new Map();
  for (const key of arr) {
    if (key !== ' ')
      characters.set(key, count);     //initialized each character in the string  console.log(characters) works
  }

  for (const key of arr) {           //count the # of times that the character occurs
    let count = characters.get(key);
    if (key !== ' ')                        //gets rid of the space character
      characters.set(key, count + 1);

    for (const [key, value] of characters) {    //output
      console.log([key, value]);
    }
  }
};

countLetters("lighthouse in the house");


