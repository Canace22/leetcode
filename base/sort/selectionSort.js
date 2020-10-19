function selectionSort(arr) {
  const len = arr.length;
  const result = [...arr];
  let minIndex = 0;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (result[j] < result[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }
  return result;
}
module.exports = selectionSort;
