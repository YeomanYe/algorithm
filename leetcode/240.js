/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let binarySearch = (row) => {
        let len = matrix[row].length;
        let l = 0;
        let h = len - 1;
        while(l <= h) {
            let mid = (l + h) >> 1;
            if (matrix[row][mid] < target) {
                l = mid + 1;
            } else if(matrix[row][mid] > target) {
                h = mid - 1;
            } else  {
                return true;
            }
        }
        return false;
    };
    for(let i = 0;i < matrix.length;i++) {
        if(binarySearch(i)) {
            return true;
        }
    }
    return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const searchRec = (left, up, right, down) => {
        if (up > down || left > right) return false;
        else if (matrix[up][left] > target || matrix[down][right] < target)
            return false;
        let mid = (left + right) >> 1;
        let row = up;
        while(row <= down && matrix[row][mid] <= target) {
            if (matrix[row][mid] === target) {
                return true;
            }
            row++;
        }
        return searchRec(mid + 1, up, right, row - 1) || searchRec(left, row, mid - 1, down);
    };
    if (!matrix.length) return false;
    return searchRec(0, 0, matrix[0].length - 1, matrix.length - 1);
};