/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let ans = 0;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let row = grid.length;
    let col = grid[0].length;
    let bad = [];
    let good = [];
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            let n = grid[i][j];
            if(n === 2) {
                bad.push([i, j]);
            } else if(n === 1) {
                good.push([i, j]);
            }
        }
    }
    while(bad.length) {
        let hasBad = false;
        for(let k = 0, len = bad.length;k < len;k++) {
            let [x, y] = bad.shift();
            for(let i = 0;i < 4;i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx < 0 || ny < 0 || nx >= row || ny >= col || grid[nx][ny] !== 1) continue;
                hasBad = true;
                bad.push([nx, ny]);
                grid[nx][ny] = 2;
            }
        }
        hasBad && ans++;
    }
    for(let [i, j] of good) {
        if(grid[i][j] === 1) return -1;
    }
    return ans;
};