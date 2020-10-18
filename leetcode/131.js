/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let len = s.length;
    let dp = Array.from({length: len}, () => (new Array(len)).fill(false));
    for(let i = len - 1;i >= 0;i--) {
        for(let j = i;j < len;j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
        }
    }
    let paths = [];
    let backtrack = function(start) {
        if(start === len) {
            result.push([...paths]);
            return ;
        }
        for(let i = start;i < len;i++) {
            if(!dp[start][i]) continue;
            paths.push(s.substring(start, i + 1));
            backtrack(i + 1);
            paths.pop();
        }
    };
    backtrack(0);
    return result;
};