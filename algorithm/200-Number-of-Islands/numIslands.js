// 一刷时间: 2020-04
// 来源: https://leetcode-cn.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先搜索 DFS
var dfs = function (grid, r, c) {
  const [nr, nc] = [grid.length, grid[0].length];
  grid[r][c] = '0';
  if (r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c);
  if (r + 1 < nr && grid[r + 1][c] === '1') dfs(grid, r + 1, c);
  if (c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1);
  if (c + 1 < nc && grid[r][c + 1] === '1') dfs(grid, r, c + 1);
};

var numIslands = function (grid) {
  const nr = grid.length;
  if (!nr) return 0;
  const nc = grid[0].length;
  let num_isLands = 0;
  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] === '1') {
        num_isLands += 1;
        dfs(grid, r, c);
      }
    }
  }
  return num_isLands;
};

module.exports = numIslands;







