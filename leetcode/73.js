/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let arr = [];
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0;i < row;i++) {
        for(let j = 0;j < col;j++) {
            if(matrix[i][j] === 0) arr.push([i, j]);
        }
    }
    for(let [i, j] of arr) {
        let oi = i, oj = j;
        while(oi > 0) {
            matrix[--oi][j] = 0;
        }
        oi = i;
        while(oi < row - 1) {
            matrix[++oi][j] = 0;
        }
        oj = j;
        while(oj > 0) {
            matrix[i][--oj] = 0;
        }
        oj = j;
        while(oj < col - 1) {
            matrix[i][++oj] = 0;
        }
    }
};