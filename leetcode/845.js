/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    if (A.length < 3) return 0;
    let up;
    let stack = [A[0]];
    let max = 0;
    for(let i=1;i < A.length;i++) {
        let a = A[i];
        let f = stack[stack.length - 1];
        if (a > f) {
            if (up !== false) {
                stack.push(a);
                up = true;
            }
            else {
                max = Math.max(stack.length, max);
                stack = [f, a];
                up = true;
            }
        } else if(a < f && up !== undefined) {
            stack.push(a);
            up = false;
        } else {
            if (up === false) {
                max = Math.max(stack.length, max);
                stack = [f, a];
            }
            stack = [a];
            up = undefined;
        }
    }
    return stack.length > 2 && up === false ? Math.max(max, stack.length) : max;
};


/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let n = A.length;
    let ans = 0;
    let left = 0;
    while (left + 2 < n) {
        let right = left + 1;
        if (A[left] < A[left + 1]) {
            while(right + 1 < n && A[right] < A[right + 1]) {
                ++right;
            }
            if (right + 1 < n && A[right] > A[right + 1]) {
                while (right + 1 < n && A[right] > A[right + 1]) {
                    ++right;
                }
                ans = Math.max(ans, right - left + 1);
            } else {
                ++right;
            }
        }
        left = right;
    }
    return ans;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let n = A.length;
    if (!n) return 0;
    let left = [0];
    for(let i = 1;i < n;i++) {
        left[i] = A[i - 1] < A[i] ? left[i - 1] + 1 : 0;
    }
    let right = [];
    right[n - 1] = 0;
    for(let i = n - 2;i >= 0;--i) {
        right[i] = A[i + 1] < A[i] ? right[i + 1] + 1 : 0;
    }
    let ans = 0;
    for(let i = 0;i < n;i++) {
        if(left[i] && right[i]) {
            ans = Math.max(ans, left[i] + right[i] + 1);
        }
    }
    return ans;
};