const middle = function(array) {
  let midArr = [];
  
  if (array.length <= 2) {
    return [];
  }
 
  if (array.length % 2 !== 0) {
    let midInd = array.length / 2;
    let middleIndex = Math.floor(midInd);
    midArr.push(array[middleIndex]);
    return midArr;
  }
  if (array.length % 2 === 0) {
    let midInd = array.length / 2;
    let middleIndex = Math.floor(midInd);
    let lowmiddleInd = middleIndex - 1;
    midArr.push(array[lowmiddleInd]);
    midArr.push(array[middleIndex]);
    return midArr;

  }
};

module.exports = middle;
