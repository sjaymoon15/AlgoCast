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

  // getLast() {
  //   let currentHead = this.head;
  //   if (currentHead && currentHead.next) {
  //     while(currentHead.next) {
  //       currentHead = currentHead.next;
  //     }
  //   }
  //   return currentHead;
  // }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
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

  // removeLast() {
  //   if (!this.head) {
  //     return;
  //   }
  //   let prevNode = this.head;
  //   if (!prevNode.next) {
  //     this.head = null;
  //     this.numItem = 0;
  //   } else {
  //     let currentNode = prevNode.next;
  //     while(currentNode.next) {
  //       currentNode = currentNode.next;
  //       prevNode = prevNode.next;
  //     }
  //     prevNode.next = null;
  //     this.numItem--;
  //   }
  // }

  removeLast() {
    // no head
    if (!this.head) {
      return;
    }
    // no head.next
    if (!this.head.next) {
      this.head = null;
      this.numItem = 0;
      return;
    }
    //
    let prevNode = this.head;
    let currentNode = prevNode.next;
    while(currentNode.next) {
      currentNode = currentNode.next;
      prevNode = prevNode.next;
    }
    prevNode.next = null;
    this.numItem--;

  }

  // insertLast(record) {
  //   const lastNode = this.getLast();
  //   const newNode = new Node(record, null);
  //   lastNode.next = newNode;
  //   this.numItem++;
  // }

  insertLast(record) {
    const lastNode = this.getLast();
    if (lastNode) {
      const newNode = new Node(record, null);
      lastNode.next = newNode;
      this.numItem++;
    } else {
      this.head = new Node(record, null);
    }
  }

  getAt(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex < index) {
      if(currentNode && currentNode.next) {
        currentNode = currentNode.next;
        currentIndex++;
      } else {
        return null;
      }
    }
    return currentNode;
  }

  removeAt(index) {
    if (!this.getAt(index)) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prevNode = this.getAt(index - 1);
    if (!prevNode.next) {
      return;
    }
    const nextNode = prevNode.next.next;
    prevNode.next = nextNode;
  }

  // Didn't get this first time
  insertAt(record, index) {
    if (!this.head) {
      this.head = new Node(record, null);
      this.numItem++;
      return;
    }

    if (index === 0) {
      const oldHead = this.head;
      this.head = new Node(record, oldHead);
      this.numItem++;
      return;
    }

    const prevNode = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(record, prevNode.next);
    prevNode.next = newNode;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }

}

module.exports = { Node, LinkedList };
