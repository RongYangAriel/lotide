const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
      break;
    }
  }
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
};

const asserArrayEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2);
};

asserArrayEqual([1, 2, 3], [1, 2, 3]);
asserArrayEqual([1, '2', 3], [1, 2, 3]);