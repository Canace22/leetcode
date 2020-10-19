function shellSort(arr) {
  const len = arr.length;
  const result = [...arr];

  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = result[i];
      while (j - gap >= 0 && current < result[j - gap]) {
        result[j] = result[j - gap];
        j = j - gap;
      }
      result[j] = current;
    }
  }
  return result;
}
module.exports = shellSort;
