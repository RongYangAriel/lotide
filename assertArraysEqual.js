const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
    break;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
      break;
    }
  }
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
};

const assertArrayEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2);
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, '2', 3], [1, 2, 3]);
assertArrayEqual([], []);