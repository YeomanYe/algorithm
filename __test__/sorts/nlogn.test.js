import {repareDatas, tempTest} from "./util";
import {mergeSort, quickSort} from "../../sorts/nlogn";

let datas = [[]];

repareDatas(datas);

describe('nlogn',()=>{
  test('quickSort',()=>{
    tempTest(quickSort,datas);
  });
  test('mergeSort',()=>{
    tempTest(mergeSort,datas);
  });
});
