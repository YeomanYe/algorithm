/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let result = [];
    if (!matrix.length) return result;
    let i = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let x = i;
    let y = i;
    // 是否是纵向
    let btu = true;
    while(true) {
        if (btu) {
            if (x >= 0 && y < col) {
                result.push(matrix[x][y]);
                x -= 1;
                y += 1;
            } else {
                btu = false;
                i++;
                if (i >= col && x + 1 >= row) {
                    break;
                } else if (i < col) {
                    x = 0;
                    y = i;
                } else {
                    x += 2;
                    y = col - 1;
                }
            }

        } else {
            if (y >= 0 && x < row) {
                result.push(matrix[x][y]);
                y -= 1;
                x += 1;
            } else {
                btu = true;
                i++;
                if (i >= row && y + 1 >= col) {
                    break;
                } else if (i < row) {
                    y = 0;
                    x = i;
                } else {
                    y += 2;
                    x = row - 1;
                }
            }
        }
    }
    return result;
};