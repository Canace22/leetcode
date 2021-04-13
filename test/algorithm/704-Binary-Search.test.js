const search = require('../../algorithm/704-Binary-Search/binarySearch');

const description = `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1`;
test(description, () => {
  const input = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2 },
  ];
  const output = [4, -1];

  input.forEach((ele, i) => {
    expect(search(ele.nums, ele.target)).toBe(output[i]);
  });
});
