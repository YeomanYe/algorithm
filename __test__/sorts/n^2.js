import {insertSort, selectSort, shellSort} from "../../sorts/n^2";

describe('n^2',()=>{
  test.each([[3,3,5,1,3]])('select %#',(arr)=>{
    selectSort(arr);
  });
});
