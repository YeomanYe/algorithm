/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let len = len1 + len2;
    let mid1 = Math.ceil(len / 2);
    let mid2 = Math.ceil((len + 1) / 2);
    function getKth(nums1, s1, e1, nums2, s2, e2, k){
        let len1 = e1 - s1 + 1;
        let len2 = e2 - s2 + 1;
        if(len1 > len2) return getKth(nums2, s2, e2, nums1, s1, e1, k);
        if(len1 === 0) return nums2[s2 + k - 1];
        if(k === 1) return Math.min(nums1[s1], nums2[s2]);

        let i = s1 + Math.min(len1, Math.floor(k / 2)) - 1;
        let j = s2 + Math.min(len2, Math.floor(k / 2)) - 1;
        if(nums1[i] > nums2[j]) {
            return getKth(nums1, s1, e1, nums2, j + 1, e2, k - (j - s2 + 1));
        } else {
            return getKth(nums1, i + 1, e1, nums2, s2, e2, k - (i - s1 + 1));
        }
    }
    return (getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, mid1) + getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, mid2)) * 0.5;
};