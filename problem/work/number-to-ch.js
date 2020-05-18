function sectionToCh(num) {
  const chnNumChar = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
  ];
  const chnUnitChar = ['', '十', '百', '千', '万','十万', '百万', '千万', '亿', '万亿', '亿亿'];
  let res = '';
  let unitPos = 0;
  let zero = true;
  while (num > 0) {
    const lastNum = num % 10; // 截取最后一位数字
    let chNum = chnNumChar[lastNum]; // 最后一位数字对应的中文
    if (lastNum === 0) {
      if (!zero) {
        zero = true;
        res = chNum + res;
      }
    } else {
      zero = false;
      chNum += chnUnitChar[unitPos];
      res = chNum + res;
    }
    unitPos++;  // 进一位
    num = Math.floor(num / 10);
  }
  if (res.match('一十万')) res = res.replace('一十万', '十万');
  return res;
}
console.log(sectionToCh(100212));
console.log(sectionToCh(1000));
console.log(sectionToCh(9));
