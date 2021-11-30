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



module.exports = eqArrays;
