const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.start = undefined
    this.end = undefined
    this.length = 0
  }

  getUnderlyingList() {
    return this.start
  }

  enqueue(value) {
    const uzel = new ListNode(value)
    if(this.start) {
      this.end.next = uzel;
      this.end = uzel;
    } else {
      this.start = uzel;
      this.end = uzel;
    }
    this.length ++
  }

  dequeue() {
    const nodeToDelete = this.start;
    this.start = this.start.next;
    this.length--
    return nodeToDelete.value
  }
}

module.exports = {
  Queue
};
