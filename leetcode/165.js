/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    for(let i = 0;i < v1.length;i++) {
        const d = parseInt(v1[i]) - parseInt(v2[i]);
        if (d > 0) {
            return 1;
        } else if(d < 0) {
            return  -1;
        }
    }
    if (v1.length > v2.length) {
        for(let i = v2.length;i < v1.length;i++) {
            if(parseInt(v1[i]) > 0) {
                return 1;
            } else if (parseInt(v1[i]) < 0) {
                return -1;
            }
        }
    } else if (v1.length < v2.length) {
        for(let i = v1.length;i < v2.length;i++) {
            if(parseInt(v2[i]) > 0) {
                return -1;
            } else if (parseInt(v2[i]) < 0) {
                return 1;
            }
        }
    }
    return 0;
};