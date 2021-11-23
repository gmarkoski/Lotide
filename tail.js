const assertEqual = function(actual, expected) {
  let valA = actual;
  let valB = expected;
    
  
  if (valA === valB) {
    console.log(`\uD83D\uDE00 \uD83D\uDE00 \uD83D\uDE4F Assertion Passed: ${valA} === ${valB}`);
  } else {
    console.log(`Assertion Failed: ${valA} !=== ${valB}`);
  }
}
function tail(array) {
  //let newArray = array.slice(1);
  //return newArray;
    return array.slice(1);


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!