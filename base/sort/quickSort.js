function quickSort(arr, left, right) {
  const len = arr.length;
  let partitionIndex;

  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // 分区操作
  let pivot = left; // 设定基准值（pivot）
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }

  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];

  return index - 1;
}

module.exports = quickSort;
