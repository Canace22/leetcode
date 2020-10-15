/**
 * 递推算法
 * 如果一对两个月大的兔子以后每一个月都可以生一对小兔子，而一对新生的兔子出生两个月后才可以生小兔子。
 * 那么假定一年没有产生兔子死亡事件，问一年后共有多少对兔子？
 * 解法：
 * 头两个月，兔子都是只有一对，第三个月是2对，第四个月是3对，第五个月是5对。。。
 * 由此可以看出。从第三个月开始，每个月的兔子对数，等于前两个月之和。
 * 所以第n个月的兔子对数为 fₙ = fₙ₋₂ + fₙ₋₁
 *
 * @param month 月份
 */
var recursiveDeduceAlgorithm = (month) => {
  let f1, f2;
  if (month === 1 || month === 2) {
    return 1;
  }
  f1 = recursiveDeduceAlgorithm(month - 1); //递归调用
  f2 = recursiveDeduceAlgorithm(month - 2); //递归调用
  console.log(f1+f2);
  return f1 + f2; //根据fₙ₋₁和fₙ₋₂，推导出fₙ
};
const month = 12;
const num = recursiveDeduceAlgorithm(month);
console.log("经过 [%d] 个月，共有 [%d] 对兔子。", month, num);
