/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    function getArea(x, y) {
        if(x < grid.length && x > -1 && y < grid[0].length && y > -1 &&grid[x][y]) {
            grid[x][y] = 0;
            return (1 + getArea(x - 1, y) + getArea(x + 1,y) + getArea(x, y - 1) + getArea(x, y + 1))
        }
        return 0;
    }
    let ans = 0;
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[0].length;j++){
            ans = Math.max(getArea(i, j), ans);
        }
    }
    return ans;
};