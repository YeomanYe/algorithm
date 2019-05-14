/**
 * 二分搜索
 * @param arr
 * @param val
 * @returns {number}
 */
import SkipList from "../data structure/SkipList";

export function bsearch(arr,val) {
  let index = -1;
  let l = 0,
      h = arr.length - 1;
  while(index === -1 && l <= h){
    let m = parseInt((l + h) / 2);
    if(arr[m] > val) h = m - 1;
    else if(arr[m] < val) l = m + 1;
    else index = m;
  }
  return index;
}

/**
 * 跳表搜索
 * @param arr
 * @param val
 * @returns {*}
 */
export function slsearch(arr,val) {
  let sl = new SkipList(arr);
  let node = sl.find(val);
  return node && node.data;
}
