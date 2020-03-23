/**
 * datastructures-js/linked-list
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */
class LinkedListNode {
  /**
   * @param {object} value
   * @param {LinkedListNode} next
   */
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  /**
   * @param {object} value
   */
  setValue(value) {
    this.value = value;
  }

  /**
   * @returns {object}
   */
  getValue() {
    return this.value;
  }

  /**
   * @param {LinkedListNode}
   */
  setNext(next) {
    this.next = next || null;
  }

  /**
   * @returns {LinkedListNode}
   */
  getNext() {
    return this.next;
  }
}

module.exports = LinkedListNode;
