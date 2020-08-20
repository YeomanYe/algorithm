/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let l = text1;
    let s = text2;
    if (text1.length < text2.length) {
        l = text2;
        s = text1;
    }
    let dp = Array.from(new Array(l.length + 1), () => (new Array(s.length + 1)).fill(0));

    for(let i = 1;i <= l.length;i++) {
        for(let j = 1;j <= s.length;j++) {
            if(l[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[l.length][s.length];
};