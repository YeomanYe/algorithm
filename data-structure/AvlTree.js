import BinarySearchTree, {Node} from "./BinarySearchTree";

export default class AvlTree extends BinarySearchTree{
  constructor(arr){
    super(arr);
  }
  rotateLL(node){
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  rotateRR(node){
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  rotateLR(node){
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }
  rotateRL(node){
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }
  heightNode(node){
    let h = -1;
    if(node !== null){
      h = this.heightNode(node.left,node.right) + 1;
    }
    return h;
  }
  balance(node){
    let lh = this.heightNode(node.left),
        rh = this.heightNode(node.right);
    if(lh - rh > 1){
      let llh = this.heightNode(node.left.left),
          lrh = this.heightNode(node.left.right);
      if(llh > lrh){
        node = this.rotateLL(node);
      }else{
        node = this.rotateLR(node);
      }
    }else if(rh - lh > 1){
      let rlh = this.heightNode(node.right.left),
          rrh = this.heightNode(node.right.right);
      if(rlh > rrh){
        node = this.rotateRL(node);
      }else{
        node = this.rotateRR(node);
      }
    }
    return node;
  }
  insertNode(node,d){
    if(node === null){
      node = new Node(d);
    }else if(node.data < d){
      node.right = this.insertNode(node.right,d);
      node.right = this.balance(node.right);
    }else if(node.data > d){
      node.left = this.insertNode(node.left,d);
      node.left = this.balance(node.left);
    }
    return node;
  }
  insert(d){
    this.root = this.insertNode(this.root,d);
  }
  removeNode(node,d){
    if(node !== null){
      if(node.data < d){
        node.right = this.removeNode(node.right,d);
      }else if(node.data > d){
        node.left = this.removeNode(node.left,d);
      }else {
        if(node.left && node.right){
          //有两个子节点的情况
          if(this.heightNode(node.left) > this.heightNode(node.right)){
            let maxNode = node.left;
            while(maxNode.right) maxNode = maxNode.right;
            node.data = maxNode.data;
            maxNode.data = d;
            node.left = this.removeNode(node.left,d);
          }else{
            let minNode = node.right;
            while(minNode.left) minNode = minNode.left;
            node.data = minNode.data;
            minNode.data = d;
            node.right = this.removeNode(node.right,d);
          }
        }else{
          //只有一个子节点的情况
          node = node.left ? node.left : node.right;
        }
      }
    }
    return node;
  }
  remove(d){
    this.root = this.removeNode(this.root,d);
  }
}
