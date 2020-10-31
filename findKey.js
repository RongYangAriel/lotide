const findKey = (obj, callback) => {
  for (let key in obj) {
    if(callback(obj[key])) {
      return key;
    }  
  }
  return undefined;
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

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertArrayEqual(result, 'noma');