/**
 * 自顶向下
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = [[triangle[0][0]]];
    for(let i = 1;i < triangle.length;i++){
        dp[i] = [];
    }
    for(let i = 1;i < triangle.length;i++){
        for(let j = 0;j < triangle[i].length;j++){
            if (j - 1 < 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
            } else if(j >= triangle[i - 1].length) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + triangle[i][j], dp[i - 1][j - 1] + triangle[i][j]);
            }
        }
    }
    let min = Infinity;
    let len = dp.length - 1;
    for(let i = 0;i < dp[len].length;i++){
        min = Math.min(dp[len][i], min);
    }
    return min;
};

/**
 * 自底向上
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = [];
    for(let i = 0;i < triangle[triangle.length - 1].length + 1;i++){
        dp[i] = 0;
    }
    for(let i = triangle.length - 1;i >= 0;i--){
        for(let j = 0;j < triangle[i].length;j++){
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};