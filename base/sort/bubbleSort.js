function bubbleSort(arr) {
  const len = arr.length;
  const result = [...arr];
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比
      if (result[j] > result[j + 1]) {
        // 元素交换
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}
module.exports = bubbleSort;
