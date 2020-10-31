const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => {
  let results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};


const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ?   console.log(`Assertion Passed: ${arr1} === ${arr2}`) :   console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
};

const double = (ele) => ele * 2;
const mins1 = (ele) => ele - 1;
assertArrayEqual([2, 6, 10], map([1, 3, 5], double));
assertArrayEqual(map([1, 1, 1],mins1), [0, 0, 0]);

