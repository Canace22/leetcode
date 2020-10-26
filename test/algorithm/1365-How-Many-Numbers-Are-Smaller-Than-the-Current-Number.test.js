const smallerNumbersThanCurrent = require('../../algorithm/1365-How-Many-Numbers-Are-Smaller-Than-the-Current-Number/smallerNumbersThanCurrent');

describe('given the array nums, for each nums[i] find out how many numbers in the array are smaller than it', () => {
  const input = [
    [8, 1, 2, 2, 3],
    [6, 5, 4, 8],
    [7, 7, 7, 7]
  ];
  const output = [
    [4, 0, 1, 1, 3],
    [2, 1, 0, 3],
    [0, 0, 0, 0]
  ];
  test('bruteForce success', () => {
    input.forEach((ele, i) => {
      expect(smallerNumbersThanCurrent.bruteForce(ele)).toEqual(output[i]);
    });
  });
  test('sort success', () => {
    input.forEach((ele, i) => {
      expect(smallerNumbersThanCurrent.sort(ele)).toEqual(output[i]);
    });
  });
});
