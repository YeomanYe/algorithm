/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0;
    let sl = s.length, pl = p.length;
    let start = -1,match = 0;
    while(i < sl) {
        if(s[i] === p[j] || p[j] === '?'){
            i++;
            j++;
        } else if(p[j] === '*') {
            start = j;
            j++;
            match = i;
        } else if(start !== -1) {
            j = start + 1;
            match++;
            i = match;
        } else return false;
    }
    while(j < pl) {
        if(p[j++] !== '*') return false;
    }
    return true;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let row = s.length + 1, col = p.length + 1;
    let dp = Array.from(new Array(row), _ => (new Array(col)).fill(false));
    dp[0][0] = true;
    for(let i = 1;i < col;i++) {
        dp[0][i] = dp[0][i-1] && p[i - 1] === '*';
    }
    for(let i = 1;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(p[j - 1] === s[i - 1] || p[j - 1] === '?'){
                dp[i][j] = dp[i - 1][j - 1];
            } else if(p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j] || dp[i - 1][j - 1];
            }
        }
    }
    return dp[row - 1][col - 1];
};