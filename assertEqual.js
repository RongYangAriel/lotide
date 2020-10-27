const happy = String.fromCodePoint(0xF600);

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`${happy} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);