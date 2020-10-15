/**
 * 递归算法思想
 * 求阶乘(factorial)问题
 * n的阶乘为：n! = n * (n-1) * (n-2) * ······ * 2 * 1
 * 解法，每一项都等于前一项-1，结果也等于之前的结果*前一项-1
 * 我们这里用int，要注意int的取值范围，不要超过int的上限。
 * @param n 求n的阶乘
 * @return n的阶乘
 */
var recursiveAlgorithm = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveAlgorithm(n - 1); //递归调用
};
const n = 8;
const result = recursiveAlgorithm(n);
console.log("%d 的阶乘为： %d", n, result);
