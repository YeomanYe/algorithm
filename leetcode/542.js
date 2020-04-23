/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let queue = [];
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(matrix[i][j] === 0) {
                queue.push([i, j]);
            } else {
                matrix[i][j] = -1;
            }
        }
    }
    while(queue.length) {
        let [x, y] = queue.shift();
        for(let i = 0;i < 4;i++) {
            let nx = dx[i] + x;
            let ny = dy[i] + y;
            if(nx < 0 || ny < 0 || nx >= row || ny >= col || matrix[nx][ny] !== -1) continue;
            matrix[nx][ny] = matrix[x][y] + 1;
            queue.push([nx, ny]);
        }
    }
    return matrix;
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let dp = Array.from(new Array(row), () => (new Array(col)).fill(0));
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            dp[i][j] = matrix[i][j] === 0 ? 0 : Infinity;
        }
    }
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
            if(j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
    }
    for(let i = row - 1;i >= 0;i--) {
        for(let j = col - 1;j >= 0;j--) {
            if(i + 1 < row) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
            if(j + 1 < col) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
    }
    return dp;
};