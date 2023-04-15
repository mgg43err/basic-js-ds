const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(){
    this._root =null;
  } 
  root(data) {
    if (data != undefined){
          this._root = data;
    }
    return this._root;
  }
  add(data) {
    let node = new Node(data);
    if (!this._root) this._root = node;
    else {
      let current = this._root;
      while (!!current) {
        if (node.data < current.data) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.data > current.data) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    return this;
  }
  has(data) {
     throw new NotImplementedError("Not implemented");
    let current = this.rooted;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) current = current.left;
      if (data > current.data) current = current.right;
    }
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
