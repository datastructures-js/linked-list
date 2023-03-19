/**
 * datastructures-js/linked-list
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
   * @returns {DoublyLinkedListNode}
   */
  setNext(next) {
    if (next && !(next instanceof DoublyLinkedListNode)) {
      throw new Error('setNext expects a DoublyLinkedListNode or null');
    }
    this._next = next || null;
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
   * @returns {boolean}
   */
  hasNext() {
    return this._next instanceof DoublyLinkedListNode;
  }

  /**
   * @public
   * @param {DoublyLinkedListNode} [prev]
   * @returns {DoublyLinkedList}
   */
  setPrev(prev) {
    if (prev && !(prev instanceof DoublyLinkedListNode)) {
      throw new Error('setPrev expects a DoublyLinkedListNode or null');
    }
    this._prev = prev || null;
    return this;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  getPrev() {
    return this._prev;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasPrev() {
    return this._prev instanceof DoublyLinkedListNode;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  clone() {
    const props = { ...this };
    const clone = Reflect.construct(this.constructor, []);
    Object.keys(props).forEach((prop) => {
      clone[prop] = props[prop];
    });
    clone.setNext(null);
    clone.setPrev(null);
    return clone;
  }
}

exports.DoublyLinkedListNode = DoublyLinkedListNode;
