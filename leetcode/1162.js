/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    let m = grid.length, n = grid[0].length;
    let queue = [];
    for(let i = 0;i < m;i++) {
        for(let j = 0;j < n;j++) {
            if(grid[i][j]) queue.push([i, j]);
        }
    }
    let point;
    let hasOcean = false;
    while(queue.length) {
        point = queue.shift();
        let [x, y] = point;
        for(let i = 0;i < 4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny]) continue;
            hasOcean = true;
            grid[nx][ny] = grid[x][y] + 1;
            queue.push([nx, ny]);
        }
    }
    if(!point || !hasOcean) return -1;
    return grid[point[0]][point[1]] - 1;
};