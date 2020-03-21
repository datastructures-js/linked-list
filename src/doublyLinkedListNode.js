/**
 * datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class DoublyLinkedListNode
 */
class DoublyLinkedListNode {
  /**
   * @param {object} value
   * @param {DoublyLinkedListNode} prev
   * @param {DoublyLinkedListNode} next
   */
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
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
   * @param {DoublyLinkedListNode}
   */
  setNext(next) {
    this.next = next || null;
  }

  /**
   * @returns {DoublyLinkedListNode}
   */
  getNext() {
    return this.next;
  }

  /**
   * @param {DoublyLinkedListNode} prev
   */
  setPrev(prev) {
    this.prev = prev || null;
  }

  /**
   * @returns {DoublyLinkedListNode}
   */
  getPrev() {
    return this.prev;
  }
}

module.exports = DoublyLinkedListNode;
