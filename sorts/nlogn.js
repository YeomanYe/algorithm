/**
 * 快速排序
 * @param  {[type]} arr [description]
 * @param  {Number} i   [description]
 * @param  {[type]} j   [description]
 * @return {[type]}     [description]
 */
export function quickSort(arr, i = 0, j = arr.length - 1) {
  let refer = arr[j],
      index = j,
      k = j;
  let len = arr.length;
  if (i >= j) return;
  while (j > i) {
    if (arr[--j] > refer) {
      let tmp = arr[j];
      for (let i = j; i < index; i++) {
        arr[i] = arr[i + 1];
      }
      arr[index] = tmp;
      index--;
    }
  }
  quickSort(arr, i, index - 1);
  quickSort(arr, index + 1, k);
  return arr;
}

/**
 * 归并排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function mergeSort(arr) {
  function merge(arr, arr1, arr2) {
    let len = arr1.length + arr2.length;
    let i = 0,
        j = 0,
        index = 0;
    arr1.push(Number.MAX_VALUE);
    arr2.push(Number.MAX_VALUE);
    while (len-- > 0) {
      if (arr1[i] > arr2[j]) {
        arr[index++] = arr2[j++];
      } else {
        arr[index++] = arr1[i++];
      }
    }
    return arr;
  }
  let len = arr.length;
  if (len <= 1) return;
  let count = Math.ceil(len / 2);
  let arr1 = new Array(count),
      arr2 = new Array(len - count);
  for (let k = 0; k < count; k++) {
    arr1[k] = arr[k];
  }
  for (let k = 0, len = arr2.length; k < len; k++) {
    arr2[k] = arr[count + k];
  }
  mergeSort(arr1);
  mergeSort(arr2);
  merge(arr, arr1, arr2);
  return arr;
}
