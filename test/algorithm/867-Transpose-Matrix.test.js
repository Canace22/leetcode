const transpose = require('../../algorithm/867-Transpose-Matrix/transpose');

test('Given a matrix A, return the transpose of A', () => {
  const input = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [1, 2, 3],
      [4, 5, 6]
    ]
  ];
  const output = [
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ],
    [
      [1, 4],
      [2, 5],
      [3, 6]
    ]
  ];
  input.forEach((ele, i) => {
    expect(transpose(ele)).toEqual(output[i]);
  });
});
