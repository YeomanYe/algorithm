/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = [];
    for(let row of matrix) {
        for(let c of row) {
            arr.push(c);
        }
    }
    arr.sort((a, b) => a - b);
    return arr[k - 1];
};

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let check =  (mid) => {
        let i = n - 1;
        let j = 0;
        let num = 0;
        while(i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                num += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return num >= k;
    };
    let left = matrix[0][0];
    let n = matrix.length;
    let right = matrix[n - 1][n - 1];
    while(left < right) {
        let mid = (left + right) >> 1;
        if(check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};