/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let n = numCourses;
    if (n <= 0 ) {
        return [];
    }
    if(prerequisites.length === 0) {
        let arr = [];
        for(let i = 0;i < n;i++) {
            arr.push(i);
        }
        return arr;
    }
    let stack = [];
    let graph = Array.from(new Array(n), () => new Array());
    let marked = [];
    let dfs = function (index) {
        if(marked[index] === 1) {
            return true;
        } else if(marked[index] === 2) {
            return false;
        }
        marked[index] = 1;
        for(let i = 0;i < graph[index].length;i++) {
            let p = graph[index][i];
            if(dfs(p)) {
                return false;
            }
        }
        stack.push(index);
        marked[index] = 2;
    };
    for(let i = 0;i < prerequisites.length;i++) {
        let [p0, p1] = prerequisites[i];
        graph[p1].push(p0);
    }
    for(let i = 0;i < n;i++) {
        if(dfs(i)) {
            return [];
        }
    }
    return stack.reverse();
};