// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// [1,2,3]
// []
// keep stacking in left if right is empty (add)
// once (peek or remove) are called move them to right until left is empty if right is empty
// []
// [3,2,1] -> if peek return right.peek(), if remove return right.pop()
// let's say added 3 times, and asked for remove Then add(4)
  // [4]
  // [3,2,1] -> can keep calling q.remove()
  // if right is empty, check left and move anything over until left is empty

  // [4,5,6,7]
  // [3,2,1]
  //

// add, peek, remove

const Stack = require('./stack');

class Queue {
  constructor() {
    this.left = new Stack();
    this.right = new Stack();
  }

  add(record) {
    this.left.push(record);
  }

  peek() {
    if (!this.right.peek()) {
      if (!this.left.peek()) {
        return undefined;
      } else {
        // move all left stuff to right
        while (this.left.peek()) {
          this.right.push(this.left.pop());
        }
        return this.right.peek();
      }
    } else {
      return this.right.peek();
    }
  }

  remove() {
    if (!this.right.peek()) {
      if (!this.left.peek()) {
        return undefined;
      } else {
        // move all left stuff to right
        while (this.left.peek()) {
          this.right.push(this.left.pop());
        }
        return this.right.pop();
      }
    } else {
      return this.right.pop();
    }
  }

}

module.exports = Queue;
