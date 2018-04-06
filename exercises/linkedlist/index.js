// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.numItem = 0;
  }

  insertFirst(record) {
    if (this.head) {
      const oldHead = this.head;
      this.head = new Node(record, oldHead);
    } else {
      this.head = new Node(record, null);
    }
    this.numItem++;
  }

  size() {
    return this.numItem;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentHead = this.head;
    while(currentHead.next) {
      currentHead = currentHead.next;
    }
    return currentHead;
  }

  clear() {
    this.head = null;
    this.numItem = 0;
  }

  removeFirst() {
    if (this.head) {
      const currentHead = this.head;
      this.head = currentHead.next;
      this.numItem--;
    } else {
      return;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    let prevNode = this.head;
    if (!prevNode.next) {
      this.head = null;
      this.numItem = 0;
    } else {
      let currentNode = prevNode.next;
      while(currentNode.next) {
        currentNode = currentNode.next;
        prevNode = prevNode.next;
      }
      prevNode.next = null;
      this.numItem--;
    }
  }
}

module.exports = { Node, LinkedList };
