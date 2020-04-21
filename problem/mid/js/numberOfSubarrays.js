/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  nums.push(1);
  const len = nums.length;
  let odd = [-1];
  let ans = 0;
  let j = 1;

  for (let i = 0; i < len; ++i) {
    const num = nums[i];
    if (num % 2) {
      odd.push(i);
      if (odd[k + 1]) {
        ans += (odd[j] - odd[j - 1]) * (odd[k + 1] - odd[k]);
        ++k;
        ++j;
      }
    }
  }
  return ans;
};

const test1 = numberOfSubarrays([1, 1, 2, 1, 1], 3);

const test2 = numberOfSubarrays([2, 4, 6], 1);

const test3 = numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2);

console.log('test1:', test1);
console.log('test2:', test2);
console.log('test3:', test3);
