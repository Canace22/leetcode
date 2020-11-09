const moveZeroes = require('../../algorithm/283-Move-Zeroes/moveZeroes')

test("Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements", () => {
  const input = [
    [0, 0, 0],
    [0, 1, 0, 3, 12],
    [1, 3, 12],
  ];
  const output = [
    [0, 0, 0],
    [1, 3, 12, 0, 0],
    [1, 3, 12],
  ];
  input.forEach((ele, i) => {
    expect(moveZeroes(ele)).ToEqual(output[i]);
  });
});