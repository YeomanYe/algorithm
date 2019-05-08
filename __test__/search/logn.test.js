import {repareArrWithoutRepetition, tempSearchTest} from "../test.util";
import {bsearch} from "../../search/logn";

let datas = [[]];
repareArrWithoutRepetition(datas);

describe('logn', () => {
  test('bsearch', () => {
    tempSearchTest(bsearch,datas);
  })
});
