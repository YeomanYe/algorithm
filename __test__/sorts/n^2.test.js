import {insertSort, selectSort, shellSort} from "../../sorts/n^2";
import {randInt, repareArr, tempSortTest} from "../test.util";

let datas = [[]];
repareArr(datas);

describe('n^2',()=>{
  test('selectSort',()=>{
    tempSortTest(selectSort,datas);
  });
  test('insertSort',()=>{
    tempSortTest(insertSort,datas);
  });
  test('shellSort',()=>{
    tempSortTest(shellSort,datas);
  });
});
