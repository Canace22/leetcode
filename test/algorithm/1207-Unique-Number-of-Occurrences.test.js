const uniqueOccurrences = require('../../algorithm/1207-Unique-Number-of-Occurrences/uniqueOccurrences');

test('独一无二的出现次数', () => {
  const input = [
    [1, 2, 2, 1, 1, 3],
    [1, 2],
    [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
    [4, 0, 2, -5, -4]
  ];
  const output = [true, false, true, false];
  input.forEach((ele, i) => {
    expect(uniqueOccurrences(ele)).toBe(output[i]);
  });
});
