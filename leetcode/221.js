/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let dp = [];
    for(let i = 0;i < matrix.length;i++){
        dp[i] = [];
    }
    let area = 0;
    for(let i = 0;i < matrix.length;i++) {
        for(let j = 0;j < matrix[i].length;j++){
            if(i > 0 && j > 0 && matrix[i][j] === '1'){
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }else {
                dp[i][j] = matrix[i][j] === '0' ? 0 : 1;
            }
            let e = dp[i][j];
            area = Math.max(e * e, area);
        }
    }
    return area;
};