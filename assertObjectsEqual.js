const eqObjects = (obj1, obj2) => {
  for (let item in obj1) {
    if (typeof(obj1[item] === 'array')){
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
    } else if (typeof(obj1[item] === 'string')){
      console.log('string')
      if (obj1[item] !== obj2[item]) {
        return false;
      }
    } 
  }
  return true; 
};

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect; 
  console.log(eqObjects(obj1, obj2) ? 'Assertion Successed!' : 'Assertion Failed');
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));
assertObjectsEqual(ab, ba);