/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let len = graph.length;
    let visited = (new Array(len)).fill(0);
    let queue = [];
    for(let i = 0;i < len;i++) {
        if (visited[i] !== 0) continue;
        queue.push(i);
        visited[i] = 1;
        while(queue.length) {
            let w = queue.pop();
            for(let g of graph[w]) {
                if(visited[g] === visited[w]) {
                    return false;
                }
                if(!visited[g]) {
                    visited[g] = -visited[w];
                    queue.push(g);
                }
            }
        }
    }
    return true;
};