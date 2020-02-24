/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let visited = Array.from(new Array(n), _ => (new Array(n)).fill(0));
    let ans = 0;
    let placeQueen = function (i, j) {
        if(visited[i][j] === 0) {
            visited[i][j] += 1;
            let oi = i, oj = j;
            while(i < n - 1) visited[++i][j] += 1;
            i = oi;j = oj;
            while(i + 1 < n && j + 1 < n) visited[++i][++j] += 1;
            i = oi;j = oj;
            while(i + 1 < n && j - 1 >= 0) visited[++i][--j] += 1;
            return true;
        }
        return false;
    };
    let delQueen = function (i, j) {
        visited[i][j] -= 1;
        let oi = i, oj = j;
        while(i < n - 1) visited[++i][j] -= 1;
        i = oi;j = oj;
        while(i + 1 < n && j + 1 < n) visited[++i][++j] -= 1;
        i = oi;j = oj;
        while(i + 1 < n && j - 1 >= 0) visited[++i][--j] -= 1;
    };
    let backtrack = function (l) {
        if(l === n) return ++ans;
        for(let i = 0;i < n;i++) {
            if(placeQueen(l,i)) {
                backtrack(l + 1);
                delQueen(l, i);
            }
        }
    };
    backtrack(0);
    return ans;
};