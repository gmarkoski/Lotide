const assertEqual = function(actual, expected) {
  let valA = actual;
  let valB = expected;

  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
  }
};
function head(array) {
  return array[0];
}



// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");