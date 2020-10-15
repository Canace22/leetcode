// 来源: https://leetcode-cn.com/problems/valid-anagram/

// 答案错误

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let res = false;
  s = s.toLocaleLowerCase();
  t = t.toLocaleLowerCase();
  let test = [];
  if (t.length !== s.length) {
    return res;
  }
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s.charAt(i))) {
      test.push(true);
    } else {
      test.push(false);
    }
  }
  res = test.every((ele) => {
    return ele;
  });
  return res;
};
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'b'));
