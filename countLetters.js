const countLetters = (letters) => {
  let obj = {};
  for (let letter of letters) {
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }
  return obj;
}

console.log(countLetters('asdfasedfdfsf'));