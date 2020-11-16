/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 记录每个数字出现次数，重写数组
var sortColors = function (nums) {
  const { length } = nums;
  if (length < 2) return nums;
  const map = new Map();
  let result = [];

  for (let i = 0; i < length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  for (let i = 0; i < map.size; i++) {
    result = result.concat(new Array(map.get(nums[i])).fill(i));
  }
  return result;
};

// 两遍遍历法
sortColors.prototype.Iteration = function (nums) {
  const { length } = nums;
  if (length < 2) return nums;
  let result = [];
  let j = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      ++j;
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      ++j;
    }
  }

  result = [...nums];

  return result;
};

console.log(sortColors.prototype.Iteration([2, 0, 2, 1, 1, 0]));
