/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let row = word1.length + 1;
    let col = word2.length + 1;
    let dp = Array.from(new Array(row), () => (new Array(col)).fill(0));
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = i + j;
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1), dp[i - 1][j] + 1, dp[i][j - 1] + 1) ;
            }
        }
    }
    return dp[row - 1][col - 1];
};