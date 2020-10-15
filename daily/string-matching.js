/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const len = words.length;
  let map = {};
  let res = [];

  if (len == 0) return [];

  for (let i = 0; i < len; i++) {
    const item = words[i];
    map[item] = i;
    // for (let j = 0; j < Object.keys(map).length; j++) {
    //   if (Object.keys(map)[j].match(item)) {
    //     res.push(item);
    //   }
    // }
  }
  for (let i = 0; i < Object.keys(map).length; i++) {
    const item = Object.keys(map)[i];
    for (let j = i; j < len; j++) {
      console.log(words[j].match(item));
      if (words[j].match(item)) {
        res.push(item);
      }
    }
  }
  console.log(res);
  return res;
};
stringMatching(['mass', 'as', 'hero', 'superhero']);
