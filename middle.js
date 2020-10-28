const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
      break;
    }
  }
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
};


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


eqArrays(middle([]),[]);
eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
eqArrays(middle([1, 4, 6]), [4]);
eqArrays(middle([1]), []);