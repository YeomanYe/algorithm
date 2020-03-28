/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    let stack = [[0, 0]];
    let set = new Set();
    while(stack.length) {
        let [rx, ry] = stack.pop();
        let key = rx + '@' + ry;
        if(rx === z || ry === z || rx + ry === z)
            return true;
        if(set.has(key))
            continue;
        set.add(key);
        // x壶倒满
        stack.push([x, ry]);
        // y壶倒满
        stack.push([rx, y]);
        // x壶倒空
        stack.push([0, ry]);
        // y壶倒空
        stack.push([rx, 0]);
        // 把x壶的水灌进y壶，直到y满或x空
        stack.push([rx - Math.min(rx, y - ry), ry + Math.min(rx, y - ry)]);
        // 把y壶的水灌进y壶，直到y满或x空
        stack.push([rx + Math.min(x - rx, ry), ry - Math.min(x - rx, ry)]);
    }
    return false;
};