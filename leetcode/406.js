/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let result = [];
    if (!people.length) return result;
    let groups = [];
    let len = people.length;
    let i = 0;
    while(len) {
        let g = _.filter(people, p => p[1] === i);
        len -= g.length;
        if (i) {
            g.sort((a, b) => b[0] - a[0]);
        } else {
            g.sort((a, b) => a[0] - b[0]);
        }
        groups.push(g);
        i++;
    }
    result.push(...groups[0]);
    for(let i = 1, len = groups.length;i < len;i++) {
        for(let j = 0, len2 = groups[i].length;j < len2;j++) {
            let g = groups[i][j];
            let count = g[1];
            let index = 0;
            while(count) {
                while(g[0] > result[index][0]) index++;
                count--;
                index++;
            }
            result.splice(index, 0, g);
        }
    }
    return result;
};

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let result = [];
    for(let p of people) {
        result.splice(p[1], 0, p);
    }
    return result;
};