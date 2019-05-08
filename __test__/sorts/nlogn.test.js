import {repareArr, tempSortTest} from "../test.util";
import {heapSort, mergeSort, quickSort} from "../../sorts/nlogn";

let datas = [[]];

repareArr(datas);

describe('nlogn',()=>{
  test('quickSort',()=>{
    tempSortTest(quickSort,datas);
  });
  test('mergeSort',()=>{
    tempSortTest(mergeSort,datas);
  });
  test('heapSort',()=>{
    tempSortTest(heapSort,datas);
  });
});
