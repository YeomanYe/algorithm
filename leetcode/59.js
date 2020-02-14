/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let ans = Array.from(new Array(n), () => (new Array(n)).fill(0));
    let u = 0;
    let d = n - 1;
    let l = 0;
    let r = n - 1;
    let count = 1;
    while(true) {
        for(let i = l;i <= r;i++) ans[u][i] = count++;
        if(++u > d) break;
        for(let i = u;i <= d;i++) ans[i][r] = count++;
        if(l > --r) break;
        for(let i = r;i >= l;i--) ans[d][i] = count++;
        if(u > --d) break;
        for(let i = d;i >= u;i--) ans[i][l] = count++;
        if(++l > r) break;
    }
    return ans;
};