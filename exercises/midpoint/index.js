// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
// 1 2 3
// 1 2 3 4 5 6 7 8
function midpoint(list) {
  if (!list.head) {
    return;
  }
  let fast = list.head;
  let slow = list.head;

  while (fast) {
    if (!fast.next) {
      return slow;
    }
    if (!fast.next.next) {
      return slow;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
}

module.exports = midpoint;
