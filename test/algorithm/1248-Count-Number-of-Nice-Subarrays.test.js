const numberOfSubarrays = require('../../algorithm/1248-Count-Number-of-Nice-Subarrays/numberOfSubarrays');

test('求优美子数组的个数', () => {
  const input = [
    { nums: [1, 1, 2, 1, 1], k: 3 },
    { nums: [2, 4, 6], k: 1 },
    { nums: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k: 2 }
  ];
  const output = [2, 0, 16];
  input.forEach((ele, i) => {
    expect(numberOfSubarrays(ele.nums, ele.k)).toBe(output[i]);
  });
});
