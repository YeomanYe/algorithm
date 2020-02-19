/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = Array.from(new Array(n), () => (new Array(n)).fill('.'));
    let visited = Array.from(new Array(n), () => (new Array(n)).fill(0));
    let ans = [];
    let placeQueen = function (i, j) {
        if(visited[i][j] <= 0) {
            visited[i][j] += 1;
            result[i][j] = 'Q';
            let oi = i, oj = j;
            while(i < n - 1 && j < n - 1) visited[++i][++j] += 1;
            i = oi; j = oj;
            while(i < n - 1 && j > 0) visited[++i][--j] += 1;
            i = oi; j = oj;
            while(i < n - 1) visited[++i][j] += 1;
            return true;
        }
        return false;
    };
    let removeQueen = function(i,j) {
        result[i][j] = '.';
        visited[i][j] -= 1;
        let oi = i, oj = j;
        while(i < n - 1 && j < n - 1) visited[++i][++j] -= 1;
        i = oi; j = oj;
        while(i < n - 1 && j > 0) visited[++i][--j] -= 1;
        i = oi; j = oj;
        while(i < n - 1) visited[++i][j] -= 1;
    };
    let placeLine = function (l) {
        if(l === n) return ans.push(result.map(item => item.join('')));
        for(let i = 0;i < n;i++) {
            let res = placeQueen(l, i);
            if(res) {
                placeLine(l + 1);
                removeQueen(l, i);
            }
        }
    };
    placeLine(0);
    return ans;
};