/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    let dp = Array.from(new Array(row), () => (new Array(col)).fill(0));
    dp[0][0] = obstacleGrid[0][0] ? 0 : 1;
    for(let i = 1;i < row;i++) {
        if(!obstacleGrid[i][0]) dp[i][0] = dp[i - 1][0];
        else dp[i][0] = 0;
    }
    for(let i = 1;i < col;i++) {
        if(!obstacleGrid[0][i]) dp[0][i] = dp[0][i - 1];
        else dp[0][i] = 0;
    }
    for(let i = 1;i < row;i++) {
        for(let j = 1;j < col;j++) {
            if(obstacleGrid[i][j]) dp[i][j] = 0;
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[row - 1][col - 1];
};