const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
        break;
      }
    }
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// const eqObjs = (obj1, obj2) => {
//   for (let item in obj1) {
//     if (typeof(obj1))
//   }
// };
const eqObjects = (obj1, obj2) => {
  for (let item in obj1) {
    console.log(`${obj1[item]} data type: ${typeof(obj1[item])}`);
    if (Array.isArray(obj1[item])) {
      if (obj1[item].length !== obj2[item].length) {
        console.log(`${obj1[item]} length is different from ${obj2[item]}`);
        return false;
      }
      for (let index = 0; index < obj1[item].length; index ++){
        if (obj1[item][index] !== obj2[item][index]) {
          console.log(`${obj1[item][index]} is different from ${obj2[item][index]}`);
          return false;
        }
      }
    } else if (typeof(obj1[item]) === 'string'){
      if (obj1[item] !== obj2[item]) {
        return false;
      }
    } else if (typeof(obj1[item]) === 'object'){
      eqObjects(obj1[item], obj1[item]);
    }
  }
  return true; 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(dc, cd)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const dc2 = {d: [3, '2'], c: 1};
console.log(eqObjects(dc, dc2)); // => false

// test nested objects
const girl = {
  score: 100,
  info: {
    name: 'Ariel',
    gender: 'f'
  }
};

const guy = {
  score: 100,
  info: {
    name: 'hoyman',
    gender: 'm'
  }
};

console.log(eqObjects(girl, guy)); //=> false