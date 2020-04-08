function MakeRandomList(minNum, maxNum, option) {
  let res = [];
  const len = maxNum - minNum + 1;

  for (let i = 0; i < option; i++) {
    const random = Math.floor(Math.random() * len);
    if (random < minNum || random > maxNum) {
      i--;
      continue;
    }
    res.push(random);
  }

  return res;
}

const test = MakeRandomList(2, 6, 5);
console.log(test);
