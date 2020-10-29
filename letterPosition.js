const letterPosition = (letters) => {
  let result = {};
  for (let index = 0; index < letters.length; index ++ ) {
    if (result[letters[index]] === undefined) {
      result[letters[index]] = [];
    }
    result[letters[index]].push(index);
  }
  return result;
};

console.log(letterPosition('abcdeghijklmfdnopqrstuvaaaaaaddwxyz'));