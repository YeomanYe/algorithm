/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else if (count !== 1) {
            chars.splice(i - count + 2, count - 1, ...String(count));
            i = i - count + 2;
            count = 1;
        }
    }
    return chars.length;
};