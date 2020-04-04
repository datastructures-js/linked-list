/**
 * @datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class DoublyLinkedListNode
 */
class DoublyLinkedListNode {
  /**
   * @constructor
   * @param {object} value
   * @param {DoublyLinkedListNode} prev
   * @param {DoublyLinkedListNode} next
   */
  constructor(value, prev, next) {
    this._value = value;
    this._prev = prev || null;
    this._next = next || null;
  }

  /**
   * @public
   * @param {object} value
   */
  setValue(value) {
    this._value = value;
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
   * @param {DoublyLinkedListNode}
   */
  setNext(next) {
    this._next = next || null;
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
   * @param {DoublyLinkedListNode} prev
   */
  setPrev(prev) {
    this._prev = prev || null;
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
