const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", ()=> {
  it("should return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("should return [4] for [1, 4, 6]", () => {
    assert.deepEqual(middle([1, 4, 6]), [4]);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
})

