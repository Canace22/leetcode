const bubbleSort = require('../../base/sort/bubbleSort');
const selectionSort = require('../../base/sort/selectionSort');
const insertionSort = require('../../base/sort/insertionSort');
const shellSort = require('../../base/sort/shellSort');
const mergeSort = require('../../base/sort/mergeSort');
const quickSort = require('../../base/sort/quickSort');

describe('测试排序算法', () => {
  const input = [[3, 5, 2, 15, 19, 26, 12, 27, 4, 1]];
  const output = [[1, 2, 3, 4, 5, 12, 15, 19, 26, 27]];
  test('测试冒泡排序', () => {
    input.forEach((ele, i) => {
      expect(bubbleSort(ele)).toEqual(output[i]);
    });
  });

  test('测试选择排序', () => {
    input.forEach((ele, i) => {
      expect(selectionSort(ele)).toEqual(output[i]);
    });
  });

  test('测试插入排序', () => {
    input.forEach((ele, i) => {
      expect(insertionSort(ele)).toEqual(output[i]);
    });
  });

  test('测试希尔排序', () => {
    input.forEach((ele, i) => {
      expect(shellSort(ele)).toEqual(output[i]);
    });
  });

  test('测试归并排序', () => {
    input.forEach((ele, i) => {
      expect(mergeSort(ele)).toEqual(output[i]);
    });
  });

  test('测试快速排序', () => {
    input.forEach((ele, i) => {
      expect(quickSort(ele)).toEqual(output[i]);
    });
  });
});
