const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k){
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }
  function createL(a){
    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new ListNode(a[i]);
        else {
            temp = new ListNode(a[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}
  let a = []
  while (l) {
    a.push(l.value)
    l = l.next
  }
  a = a.filter(x=>x!=k)
  return createL(a);
}

module.exports = {
  removeKFromList,
};
