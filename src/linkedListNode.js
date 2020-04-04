/**
 * @datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class LinkedListNode
 */
class LinkedListNode {
  /**
   * @constructor
   * @param {object} value
   * @param {LinkedListNode} next
   */
  constructor(value, next) {
    this._value = value;
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
   * @param {LinkedListNode}
   */
  setNext(next) {
    this._next = next || null;
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
