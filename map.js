
const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(Arr1, Arr2) {
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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    
    results.push(callback(item));
  }
  return results;
};
const whatever = function (value) {
  return `I have ${value}`;
};

console.log(map(words, whatever));

console.log(
  eqArrays(map(words, whatever), [
    "I have ground",
    "I have control",
    "I have to",
    "I have major",
    "I have tom",
  ])
);


