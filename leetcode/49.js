/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs) {
        let key = str.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
        let arr = map.get(key) || [];
        arr.push(str);
        map.set(key, arr);
    }
    return [...map.values()];
};