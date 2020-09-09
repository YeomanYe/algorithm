/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    let dfs = (num) => {
        if (visited.has(num)) return ;
        visited.add(num);
        const ls = rooms[num];
        for(let n of ls) {
            dfs(n);
        }
    };
    dfs(0);
    return visited.size === rooms.length;
};