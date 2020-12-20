/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let dict = (new Array(26)).fill(0);
    for(let t of tasks) {
        dict[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    dict.sort((a, b) => b - a);
    let x = 1;
    while(x < dict.length && dict[x] === dict[0]) x++;
    return Math.max(tasks.length, (dict[0] - 1) * (n + 1) + x);
};