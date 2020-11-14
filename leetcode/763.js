/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let result = [];
    let len = S.length;
    let findEnd = (start) => {
        let end = S.lastIndexOf(S[start]);
        for(let i = start + 1;i < end;i++) {
            let end2 = S.lastIndexOf(S[i]);
            end = Math.max(end, end2);
        }
        return end;
    };
    for(let i = 0;i < len;i++) {
        let end = findEnd(i);
        result.push(end - i + 1);
        i = end;
    }
    return result;
};