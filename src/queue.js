const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.first_item = null;
    this.last_item = null;
    this.length = 0;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length == 0) {
      return;
    }else {
      return this.first_item;
    }
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length == 0) {
      this.first_item = new ListNode(value);
      this.last_item = this.first_item;
    }else {
      let last = this.last_item;
      last.next = new ListNode(value);
      this.last_item = last.next;
    }
    this.length++;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length <= 0) {
      return;
    }else {
      let ret = this.first_item.value;
      if (this.first_item == this.last_item) {
        this.first_item = null;
        this.last_item = null;
      }else {
        let new_first = this.first_item.next;
        this.first_item = new_first;
      }
      this.length--;
      return ret;
    }
  }
}


module.exports = {
  Queue
};
