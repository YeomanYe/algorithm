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