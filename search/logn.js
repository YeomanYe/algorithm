
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
