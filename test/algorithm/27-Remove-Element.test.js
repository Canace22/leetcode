const removeElement = require('../../algorithm/27-Remove-Element/removeElement');

test('原地移除数组中的指定元素', () => {
  const input = [
    { nums: [3, 2, 2, 3], val: 3 },
    { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 }
  ];
  const output = [2, 5];
  input.forEach((ele, i) => {
    expect(removeElement(ele.nums, ele.val)).toBe(output[i]);
  });
});
