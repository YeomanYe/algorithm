import {repareDatas, tempTest} from "../test.util";
import {heapSort, mergeSort, quickSort} from "../../sorts/nlogn";

let datas = [[]];

repareDatas(datas);

describe('nlogn',()=>{
  test('quickSort',()=>{
    tempTest(quickSort,datas);
  });
  test('mergeSort',()=>{
    tempTest(mergeSort,datas);
  });
  test('heapSort',()=>{
    tempTest(heapSort,datas);
  });
});
