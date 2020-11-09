const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {
  let len = arr.length;
  let output = [];
  if (len <= 2) {
    return [];
  } else if (len % 2 === 0) {
    output.push(arr[len / 2 - 1] ,arr[len / 2]);
    return output;
  } else {
    return [arr[Math.floor(len / 2)]];
  }
};


assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 4, 6]), [4]);
assertArraysEqual(middle([1]), []);

module.exports = middle;