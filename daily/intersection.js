/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
  const A = end1[0] * start1[1] - start1[0] * end1[1];
  const B = end2[0] * start2[1] - start2[0] * end2[1];
  const xa = end1[0] - start1[0];
  const xb = end2[0] - start2[0];
  const ya = end1[1] - start1[1];
  const yb = end2[1] - start2[1];
  const t = xa * yb - xb * ya;

  // console.log(A, B);
  // console.log(t);
  console.log(xa / ya, xb / yb);

  if (A === 0 && B === 0) {
    if (xa / ya && xb / yb) {
      return [xa / ya, xb / yb];
    }
    return [];
  }

  if (t === 0) {
    return [];
  }

  const resX = (A * xb - B * xa) / t;
  const resY = (A * yb - B * ya) / t;

  let res = [resX, resY];

  return res;
};

// const test1 = intersection([0, 0], [1, 0], [1, 1], [0, -1]);
// const test2 = intersection([0, 0], [3, 3], [1, 1], [2, 2]);
// const test3 = intersection([0, 0], [1, 1], [1, 0], [2, 1]);
const test4 = intersection([0, 0], [0, 1], [0, 2], [0, 3]);
const test5 = intersection([0, 0], [0, 1], [0, 0], [0, -1]);

// console.log(test1);
// console.log(test2);
// console.log(test3);
console.log(test4);
console.log(test5);
