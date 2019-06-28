import AdjMatrixGraph from "../../data-structure/AdjMatrixGraph";

let arr = [[0,1],[1,3],[3,5],[5,6],[3,8],[8,4],[4,9],[2,4],[4,9]];
describe('AdjMatrixGraph', () => {
  test('dft', () => {
    let g = new AdjMatrixGraph(10);
    g.insertAll(arr);
    let cArr = [0,1,3,5,6,8,4,2,9,7];
    let rArr = [];
    g.dft((d)=>rArr.push(d));
    console.log('rArr',rArr);
    expect(rArr).toEqual(cArr);
  });
  test('bft', () => {
    let g = new AdjMatrixGraph(10);
    g.insertAll(arr);
    let cArr = [0,1,3,5,8,6,4,2,9,7];
    let rArr = [];
    g.bft((d)=>rArr.push(d));
    console.log('rArr',rArr);
    expect(rArr).toEqual(cArr);
  });
});
