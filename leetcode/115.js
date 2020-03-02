/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let sn = s.length;
    let tn = t.length;
    let dp = Array.from(new Array(tn + 1), () => (new Array(sn + 1)).fill(0));
    for(let i = 0;i < sn;i++) {
        dp[0][i] = 1;
    }
    for(let i = 1;i < tn + 1;i++) {
        for(let j = 1;j < sn + 1;j++) {
            if(s[j - 1] === t[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[tn][sn];
};