class Node {
  data;
  left = null;
  right = null;

  constructor(d) {
    this.data = d;
  }
}

export default class BinarySearchTree {
  root = null;

  static Node = Node;

  constructor(arr){
    arr.forEach(d => {
      this.insert(d);
    });
  }

  insert(d){
    let q = new BinarySearchTree.Node(d);
    if (!this.root) return this.root = q;
    let {last,cur} = this.findLastAndCur(d);
    if(cur) return;
    else if(last.data > d) last.left = q;
    else last.right = q;
  }

  remove(d){
    let {last,cur} = this.findLastAndCur(d);
    if(cur){
      //删除有两个子节点的节点
      if(cur.left && cur.right){
        let pp = cur,p = cur.right;
        while(p.left){
          pp = p;
          p = p.left;
        }
        //替换节点内容，接下来变成删除叶子节点
        cur.data = p.data;
        cur = p;
        last = pp;
      }
      //cur不为根节点
      if(last){
        //删除一个子节点或没有子节点
        if(last.left === cur){
          if(cur.left) last.left = cur.left;
          else if(cur.right) last.left = cur.right;
          else last.left = null;
        }else if(last.right === cur){
          if(cur.left) last.right = cur.left;
          else if(cur.right) last.right = cur.right;
          else last.right = null;
        }
      }else{
        //cur为根节点
        if(cur.left) this.root = cur.left;
        else if(cur.right) this.root = cur.right;
        else this.root = null;
      }


    }
  }

  findLastAndCur(d){
    let cur = this.root,
        last = null;
    while (cur) {
      if (cur.data > d) {
        last = cur;
        cur = cur.left;
      } else if (cur.data < d) {
        last = cur;
        cur = cur.right;
      } else break;
    }
    return {last,cur};
  }

  find(d){
    let {cur} = this.findLastAndCur(d);
    return cur;
  }

  //先序遍历
  preOrder(func,r = this.root){
    if(!r) return;
    func(r);
    this.preOrder(func,r.left);
    this.preOrder(func,r.right);
  }
  //中序遍历
  inOrder(func,r = this.root){
    if(!r) return;
    this.inOrder(func,r.left);
    func(r);
    this.inOrder(func,r.right);
  }
  //后序遍历
  postOrder(func,r = this.root){
    if(!r) return;
    this.postOrder(func,r.left);
    this.postOrder(func,r.right);
    func(r);
  }
}
