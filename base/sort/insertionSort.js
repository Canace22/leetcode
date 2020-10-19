function insertionSort(arr) {
  const len = arr.length;
  const result = [...arr];
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = result[i];
    while (preIndex >= 0 && result[preIndex] > current) {
      result[preIndex + 1] = result[preIndex];
      preIndex--;
    }
    result[preIndex + 1] = current;
  }
  return result;
}
module.exports = insertionSort;
