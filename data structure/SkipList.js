const MAX_LEVEL = 10;
class Node{
  data;
  maxLevel = MAX_LEVEL;
  refer = new Array(MAX_LEVEL);
}

export default class SkipList{
  levelCount = 1;
  constructor(arr){
    for(let i=0,len=arr.length;i<len;i++){
      this.insert(arr[i]);
    }
  }
  head = new Node();
  static randomLevel(){
    let lv = 0;
    for(let i = 0;i<MAX_LEVEL;i++){
      if(Math.random()>0.5) lv += 1;
    }
    return lv;
  }
  insert(val){
    let lv = SkipList.randomLevel(),
        p = new Node();
    p.data = val;
    p.maxLevel = lv;
    let update = new Array(lv).fill(new Node());
    let q = this.head;
    for(let i = lv - 1;i>=0;i--){
      while(q.refer[i] !== undefined && q.refer[i].data < val){
        q = q.refer[i];
      }
      update[i] = q;
    }
    for(let i=0;i<lv;i++){
      p.refer[i] = update[i].refer[i];
      update[i].refer[i] = p;
    }
    if(lv > this.levelCount){
      this.levelCount = lv;
    }
  }
  find(val){
    let p = this.head;
    for(let i = this.levelCount - 1;i>=0;i--){
      while(p.refer[i] !== undefined && p.refer[i].data < val){
        p = p.refer[i];
      }
    }
    // console.log('p',p);
    if(p.refer[0] !== undefined && p.refer[0].data === val)
      return p.refer[0];
    return null;
  }
  remove(val){
    let p = this.find(val);
    let q = this.head;
    for(let i = p.maxLevel-1;i>=0;i--){
      while(q.refer[i] && q.refer[i].data < val) {
        q = q.refer[i];
      }
      // console.log('q',q);
      q.refer[i] = q.refer[i].refer[i];
    }
  }
  getStruct(){
    let p = this.head;
    let allArr = [];
    for(let i=this.levelCount;i>0;i--){
      let arr = [];
      while(p.refer[i] !== undefined){
        arr.push(p.refer[i].data);
        p = p.refer[i];
      }
      allArr.push(arr);
      // console.log(arr);
      p = this.head;
    }
    // console.log(allArr.join('\n'));
    return allArr;
  }
  printStruct(){
    let list = this.getStruct();
    let str = '';
    list.forEach(arr => {
      str += arr.join(' -> ') + '\n';
    });
    console.log(str);
  }
}
