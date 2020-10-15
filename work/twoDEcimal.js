// 精确到小数点两位
function twoDEcimal(number, precision = 2) {
  const temp = number;
  number = Number(number);
  // 判断是否为数字，不是数字抛出异常
  if (Number.isNaN(number)) {
    console.log("无效的数字", temp);
    throw new Error("无效的数字", temp);
  }

  number = String(number);
  let numbers = number.split(".");
  // 如果不是小数，补充对应的 0
  if (numbers.length === 1) {
    return number + "." + "0".repeat(precision);
  } else {
    // 如果是小数，但位数比要保留的位数少，也要补 0
    if (numbers[1].length < precision) {
      return number + "." + "0".repeat(precision - numbers[1].length);
    } else {
      // 取整数部分
      let intNumber = parseInt(number.split(".")[0]);
      // 取小数部分
      let decimal = number.split(".")[1];
      // 取出要保留的小数
      let frontDecimal = parseInt(decimal.substr(0, precision));
      // 去除要保留小数的后一位
      let lastDecimal = parseInt(decimal.substr(precision, 1));
      // 如果最后一位大于5，就进位
      if (lastDecimal >= 5) {
        frontDecimal += 1;
      }
      // 判断小数部位是否需要进位
      if (frontDecimal === Math.pow(10, precision)) {
        frontDecimal = "0".repeat(precision);
        intNumber += 1;
      }
      // 处理保留的小数中有 0 出现的情况
      frontDecimal =
        "0".repeat(precision - String(frontDecimal).length) + frontDecimal;

      return `${intNumber}.${frontDecimal}`;
    }
  }
}

let a = twoDEcimal(1.255);
console.log(a);
a = twoDEcimal(0.005);
console.log(a);
