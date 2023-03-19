/**
 * datastructures-js/linked-list
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
   * @returns {LinkedListNode}
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
   * @param {LinkedListNode} [next]
   * @returns {LinkedListNode}
   */
  setNext(next) {
    if (next && !(next instanceof LinkedListNode)) {
      throw new Error('setNext expects a LinkedListNode or null');
    }
    this._next = next || null;
    return this;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */
  getNext() {
    return this._next;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasNext() {
    return this._next instanceof LinkedListNode;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */
  clone() {
    const props = { ...this };
    const clone = Reflect.construct(this.constructor, []);
    Object.keys(props).forEach((prop) => {
      clone[prop] = props[prop];
    });
    clone.setNext(null);
    return clone;
  }
}

exports.LinkedListNode = LinkedListNode;
