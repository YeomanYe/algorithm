/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queue = [];
    let max = 0;
    let map = new Map();
    for(let i = 0;i < s.length;i++){
        let c = s.charAt(i);
        if(map.has(c)) {
            max = Math.max(queue.length, max);
            let p;
            do{
                p = queue.shift();
                map.delete(p);
            } while(p !== c);
        }
        queue.push(c);
        map.set(c, 0);
    }
    return Math.max(queue.length, max);
};