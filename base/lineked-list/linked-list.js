//节点
function Node(element) {
  this.element = element; //当前节点的元素
  this.next = null; //下一个节点链接
}

class ListClass {
  constructor() {
    this.head = new Node('head'); //头节点
  }
  //查找给定节点
  find(item) {
    let currNode = this.head;

    while (currNode && currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  //插入节点
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }
  //显示链表元素
  display() {
    let currNode = this.head;
    let arr = [];
    while (!(currNode.next == null)) {
      currNode = currNode.next;
      arr.push(currNode.next);
    }

    return arr;
  }
  //查找带删除节点的前一个节点
  findPrev(item) {
    let currNode = this.head;
    while (currNode && currNode.next && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 删除节点
  remove(item) {
    let prevNode = this.findPrev(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

module.exports = ListClass;
