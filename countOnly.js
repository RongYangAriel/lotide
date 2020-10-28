// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let ele in itemsToCount) {
    let count = 0;
    if (itemsToCount[ele] === true) {
      for (let items of allItems) {
        if (items === ele) {
          count += 1;
        }
      }
      if (count === 0) {
        result[ele] = undefined;
      } else {
        result[ele] = count;
      }
    } else {
      result[ele] = undefined;
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const obj = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const lastNames = [
  "Smith",
  "martin",
  "Young",
  "Chen",
  "Chen",
  "Chen",
  "Chen",
  "Young"
];

const ppl = { 'Smith': true, 'Zack': true, "Young": false, 'Chen': true};

console.log(countOnly(firstNames, obj));
console.log(countOnly(lastNames, ppl));