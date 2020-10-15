const n = 1000 * 10000;
const a = Array(n);
let start = 0
let b = ''

start = +new Date();
b = [...a];
console.log('spread', +new Date() - start);

start = +new Date();
b = a.slice();
console.log("slice", +new Date() - start);