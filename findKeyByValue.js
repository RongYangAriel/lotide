const findKeyByValue = (obj, str) => {
  for (let key in obj) {
    if (obj[key] === str) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Expanse'));