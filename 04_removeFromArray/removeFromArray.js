const removeFromArray = function (arr, ...remove) {
  for (let i = 0; i < remove.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === remove[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
