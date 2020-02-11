/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let dfs = function (i) {
        for(let j = 0;j < M.length;j++){
            if(M[i][j] && !visited[j]) {
                visited[j] = 1;
                dfs(j);
            }
        }
    };
    let visited = [];
    let count = 0;
    for(let i = 0;i < M.length;i++){
        if(!visited[i]) {
            visited[i] = 1;
            dfs(i);
            count++;
        }
    }
    return count;
};