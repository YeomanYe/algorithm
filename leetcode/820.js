/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words.sort((a,b) => b.length - a.length);
    let S = '';
    for(let w of words) {
        const nw = w + '#';
        if (S.indexOf(nw) < 0) {
            S += nw;
        }
    }
    return S.length;
};