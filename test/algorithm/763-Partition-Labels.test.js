const partitionLabels = require('../../algorithm/763-Partition-Labels/partitionLabels');

test('partition a string S of lowercase English letters into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts', () => {
  const input = ['ababcbacadefegdehijhklijz', 'ababcbacadefegdehijhklij'];
  const output = [
    [9, 7, 8, 1],
    [9, 7, 8]
  ];
  input.forEach((ele, i) => {
    expect(partitionLabels(ele)).toEqual(output[i]);
  });
});
