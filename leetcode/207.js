/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let n = numCourses;
    // 2访问中，1已访问，0未访问
    let visited = (new Array(n)).fill(0);
    let matrix = Array.from(new Array(n), () => new Array());
    for(let i = 0, len = prerequisites.length;i < len;i++) {
        let [p1, p2] = prerequisites[i];
        matrix[p2].push(p1);
    }
    let ans = true;
    let dfs = function (index) {
        if(visited[index] === 2) {
            ans = false;
            return;
        } else if(visited[index] === 1) {
            return;
        }
        visited[index] = 2;
        for(let i = 0;i < matrix[index].length;i++) {
            dfs(matrix[index][i]);
        }
        visited[index] = 1;
    };
    for(let i = 0;i < n;i++) {
        if(!ans) return false;
        dfs(i);
    }
    return ans;
};