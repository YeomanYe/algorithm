/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    if(!matrix.length) return ans;
    let u = 0;
    let d = matrix.length - 1;
    let l = 0;
    let r = matrix[0].length - 1;
    while(true) {
        for(let i = l;i <= r;i++) ans.push(matrix[u][i]);
        if(++u > d) break;
        for(let i = u;i <= d;i++) ans.push(matrix[i][r]);
        if(--r < l) break;
        for(let i = r;i >= l;i--) ans.push(matrix[d][i]);
        if(u > --d) break;
        for(let i = d;i >= u;i--) ans.push(matrix[i][l]);
        if(r < ++l) break;
    }
    return ans;
};