const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
      break;
    }
  }
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
};

const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let ele of source) {
    if (itemsToRemove.indexOf(ele) < 0) {
      newArr.push(ele);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3, 4], [4]));
console.log(without(['a', 'b', 'c'], ['a']));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);