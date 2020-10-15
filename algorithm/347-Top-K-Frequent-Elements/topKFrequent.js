// 一刷时间: 2020-09
// 来源: https://leetcode-cn.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  const map1 = {};
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
      map1[num].push(i);
    } else {
      map.set(num, 1);
      // maps1[num] = [].concat
    }
  }

  console.log('map', map);

  // 如果元素数量小于等于 k
  if (map.size <= k) {
    return [...map.keys()];
  }

  return bucketSort(map, k);
};

// 桶排序
let bucketSort = (map, k) => {
  let arr = [],
    res = [];
  map.forEach((value, key) => {
    // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
    if (!arr[value]) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  });
  // 倒序遍历获取出现频率最大的前k个数
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i]);
    }
  }
  return res;
};

const test = [
  { nums: [2, 1, 2, 2, 6, 1, 5], k: 5 },
  { nums: [5, 5, 2, 1, 5, 2], k: 2 }
];

test.forEach((ele) => {
  console.log('result:', topKFrequent(ele.nums, ele.k));
});
