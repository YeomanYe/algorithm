/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(!matrix.length) return 0;
    let row = matrix.length, col = matrix[0].length;
    let dp = Array.from(new Array(row), () => (new Array(col)).fill(0));
    let ans = 0;
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(matrix[i][j] === '1') {
                dp[i][j] = j !== 0 ? dp[i][j - 1] + 1 : 1;
                let k = i;
                let long = 0, width = dp[i][j];
                while(k >= 0 && dp[k][j] > 0) {
                    long++;
                    width = Math.min(width, dp[k][j]);
                    --k;
                    ans = Math.max(ans, long * width);
                }
            }
        }
    }
    return ans;
};