const climbStairs = require('../../algorithm/70-Climbing-Stairs/climb-stairs');

test('求到达楼顶的楼梯阶数的方法总数', () => {
  const input = [2, 3, 5];
  const output = [2, 3, 8];
  input.forEach((ele, i) => {
    expect(climbStairs(ele)).toBe(output[i]);
  });
});
