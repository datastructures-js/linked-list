/**
 * @datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class
 */
class DoublyLinkedListNode {
  /**
   * Creates a doubly linked list node.
   * @param {any} value
   * @param {DoublyLinkedListNode} [prev]
   * @param {DoublyLinkedListNode} [next]
   */
  constructor(value, prev, next) {
    this._value = value;
    this.setPrev(prev);
    this.setNext(next);
  }

  /**
   * @public
   * @param {object} value
   */
  setValue(value) {
    this._value = value;
    return this;
  }

  /**
   * @public
   * @returns {object}
   */
  getValue() {
    return this._value;
  }

  /**
   * @public
   * @param {DoublyLinkedListNode} [next]
   */
  setNext(next) {
    this._next = (next instanceof DoublyLinkedListNode) ? next : null;
    return this;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  getNext() {
    return this._next;
  }

  /**
   * @public
   * @param {DoublyLinkedListNode} [prev]
   */
  setPrev(prev) {
    this._prev = (prev instanceof DoublyLinkedListNode) ? prev : null;
    return this;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  getPrev() {
    return this._prev;
  }
}

module.exports = DoublyLinkedListNode;
