/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0;
    if(grid.length === 0) return ans;
    let row = grid.length, col = grid[0].length;
    let visited = Array.from(new Array(row), () => (new Array(col)).fill(false));
    let backtrack = function(i, j) {
        if(i < 0 || j < 0 || i > row - 1 || j > col - 1 || grid[i][j] === '0' || visited[i][j]) return;
        visited[i][j] = true;
        backtrack(i, j + 1);
        backtrack(i + 1, j);
        backtrack(i, j - 1);
        backtrack(i - 1, j);
        return true;
    };
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(backtrack(i,j)) ans++;
        }
    }
    return ans;
};