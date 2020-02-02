/**
 * 按行求，高度过高时，超时
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 1;
    let queue = [];
    let sum = 0;
    do {
        queue = [];
        for (let j = 0;j < height.length;j++) {
            let h = height[j];
            if(h >= i) {
                queue.push(j);
            }
        }
        for(let j = 1;j < queue.length;j++){
            sum += queue[j] - queue[j - 1] - 1;
        }
        i++;
    }while(queue.length >= 2);
    return sum;
};

/**
 * 按列求
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0;
    let max_left = [0];
    let max_right = [];
    let len = height.length;
    max_right[len - 1] = 0;
    let i = 0;
    while(++i < len) max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
    i = len - 1;
    while(--i >= 0) max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    for(let i = 0;i < len;i++){
        let min = Math.min(max_left[i], max_right[i]);
        if (min > height[i]) {
            sum += min - height[i];
        }
    }
    return sum;
};