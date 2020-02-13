/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var sum = function(num1, num2) {
  // 确定num1为长字符串，num2为短字符串
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  while (num1.length !== num2.length) {
    // 对短的字符串补0
    num2 = "0" + num2;
  }
  //进位变量
  let addOne = 0;
  let result = [];
  //倒序相加
  for (let i = num1.length - 1; i >= 0; i--) {
    let c1 = num1[i] - 0;
    let c2 = num2[i] - 0;

    let sum = c1 + c2 + addOne;
    //若数字相加大于9，则进位
    if (sum > 9) {
      result.unshift(sum - 10);
      addOne = 1;
    } else {
      result.unshift(sum);
      addOne = 0;
    }
  }
  //"99" + "11" => "110"
  //它最后仍然要进位
  if (addOne) {
    result.unshift(addOne);
  }
  //"01" + "01" => "2"
  //而不是"02"，所以移除第一位的"0"
  if (!result[0]) {
    result.splice(0, 1);
  }
  return result.join("");
};
var multiply = function(num1, num2) {
  let res = "0";
  if (num2.length === 0 || num2.length === 0 || num1 === "0" || num2 === "0") {
    return res;
  }
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  for (let i = num2.length - 1; i >= 0; i--) {
    const carry = 10 ** i;
    const num = num2[num2.length - 1 - i];
    const newNum = num * carry;
    console.log(newNum * num1 + "");
    const multiplyRes = newNum * num1 + "";
    res = sum(res, multiplyRes);
    // console.log(res, multiplyRes);
  }
  return res;
};
const res = multiply("2", "3");
const res1 = multiply("123456789", "123456789");
const res2 = multiply("0", "123456789");
const res3 = multiply("498828660196", "840477629533");
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
