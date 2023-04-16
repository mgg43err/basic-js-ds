const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
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
  /* has(data) {
    // throw new NotImplementedError("Not implemented");
    if (data === null) {
      return false;
    } else if (this._root !== null) {
      let current = this._root;
      if (current === null || data === null) {
        return false;
      }
      while (current) {
        if (data === current.data) return true;
        if (data < current.data) current = current.left;
        if (data > current.data) current = current.right;
      }
    }
    return false;
  }
  */
  has(data) {
    if (!this._root) return false;
    let current = this._root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return false;
    return true;
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
