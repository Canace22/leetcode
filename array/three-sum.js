// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  if (nums.length < 3) return res;
  nums.sort((a, b) => a - b);
  // 双指针
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // 由于是有小到大排序，当前数字都大于零了，后面的数字肯定大于 0，所以 sum 肯定不等于 0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 第一层去重
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R + 1]) R++;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return res;
};

const output1 = threeSum([-1, 0, 1, 2, -1, -4]);
// output: [[-1,-1,2],[-1,0,1]]
const output2 = threeSum([]);
// output: []
const output3 = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
// output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
const output4 = threeSum([0, 0, 0, 0, 0]);
// output:[0,0,0]

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
