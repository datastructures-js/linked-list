/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class LinkedListNode {
  /**
   * Creates a linked list node.
   * @param {any} value
   * @param {LinkedListNode} [next]
   */
  constructor(value, next) {
    this._value = value;
    this.setNext(next);
  }

  /**
   * @public
   * @param {any} value
   * @returns {LinkedListNode} - this
   */
  setValue(value) {
    this._value = value;
    return this;
  }

  /**
   * @public
   * @returns {any}
   */
  getValue() {
    return this._value;
  }

  /**
   * @public
   * @param {LinkedListNode} - [next]
   * @returns {LinkedListNode} - this
   */
  setNext(next) {
    this._next = (next instanceof LinkedListNode) ? next : null;
    return this;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */
  getNext() {
    return this._next;
  }
}

module.exports = LinkedListNode;
