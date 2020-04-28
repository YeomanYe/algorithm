/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false;
    let row = matrix.length;
    let col = matrix[0].length;
    let l = 0, r = row * col - 1;
    while(l <= r) {
        let m = (l + r) >> 1;
        let i = row === 1 ? 0 : col === 1 ? m : Math.floor(m / col);
        let j = row === 1 ? m : col === 1 ? 0 : m % col;
        if(matrix[i][j] < target) {
            l = m + 1;
        } else if(matrix[i][j] > target) {
            r = m - 1;
        } else {
            return true;
        }
    }
    return false;
};