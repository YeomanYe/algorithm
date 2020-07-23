/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    let sum = 0;
    let len = arr.length;
    arr.sort((a,b) => a - b);
    for(let i = 0;i < len;i++) {
        let x = parseInt((target - sum) / (len - i));
        if (x < arr[i]) {
            let fx = (target - sum) / (len - i);
            if (fx - x  > 0.5) {
                return x + 1;
            } else {
                return x;
            }
        }
        sum += arr[i];
    }
    return arr[len - 1];
};