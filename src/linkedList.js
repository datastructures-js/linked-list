/**
 * datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const LinkedListNode = require('./linkedListNode');

/**
 * @class LinkedList
 */
class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  /**
   * @public
   * adds a node at the beginning of the linked list
   * @param {object} value
   * @returns {boolean}
   */
  insertFirst(value) {
    this._head = new LinkedListNode(value, this._head);
    this._count += 1;
    return this._head;
  }

  /**
   * @public
   * adds a node at the end of the linked list
   * @param {object} value
   * @param {LinkedListNode} current - the starting node
   * @returns {boolean}
   */
  insertLast(value, current = this._head) {
    if (this.isEmpty()) {
      return this.insertFirst(value);
    }

    // not the last node, move to next
    if (current.getNext() instanceof LinkedListNode) {
      return this.insertLast(value, current.getNext());
    }

    // arrived to last node, add new node after
    current.setNext(new LinkedListNode(value));
    this._count += 1;
    return current.getNext();
  }

  /**
   * @public
   * adds a node at a specific position
   * @param {object} value
   * @param {number} position
   * @returns {boolean}
   */
  insertAt(value, position = 0) {
    if (Number.isNaN(+position)
      || position < 0 || position > this._count) return null;

    // head node is at position 0
    if (position === 0) {
      return this.insertFirst(value);
    }

    let counter = 1;
    let prev = this._head;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    // add it at a position after the head, between prev & prev.getNext()
    prev.setNext(new LinkedListNode(value, prev.getNext()));
    this._count += 1;
    return prev.getNext();
  }

  /**
   * @public
   * removes the head node
   * @returns {boolean}
   */
  removeFirst() {
    if (this.isEmpty()) return false;

    this._head = this._head.getNext();
    this._count -= 1;
    return true;
  }

  /**
   * @public
   * removes last node in the linked list
   * @param {LinkedListNode} prev - default is null
   * @param {LinkedListNode} current - default is head
   * @returns {boolean}
   */
  removeLast(prev = null, current = this._head) {
    if (this.isEmpty()) return false;

    // not last node, move next
    if (current.getNext() instanceof LinkedListNode) {
      return this.removeLast(current, current.getNext());
    }

    // linked list has 1 node
    if (prev === null) {
      return this.removeFirst();
    }

    // arrived to last node, remove it
    prev.setNext(null);
    this._count -= 1;
    return true;
  }

  /**
   * @public
   * removes all nodes based on a callback condition
   * @param {function} cb
   * @returns {number} count of removed nodes
   * @throws {Error} if cb is not a function
   */
  removeEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.removeEach(cb) expects a callback');
    }

    let removed = 0;
    let prev = null;
    let current = this._head;

    while (current instanceof LinkedListNode) {
      if (cb(current)) {
        if (prev === null) {
          this.removeFirst();
        } else {
          prev.setNext(prev.getNext().getNext());
          this._count -= 1;
        }
        removed += 1;
      }
      prev = current;
      current = current.getNext();
    }

    return removed;
  }

  /**
   * @public
   * removes a node in a specific position
   * @param {number} position
   * @returns {boolean}
   */
  removeAt(position) {
    if (Number.isNaN(+position)
      || position < 0
      || position >= this._count) return false;

    if (position === 0) {
      return this.removeFirst();
    }

    let counter = 1;
    let prev = this._head;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    prev.setNext(prev.getNext().getNext());
    this._count -= 1;
    return true;
  }

  /**
   * @public
   * traverse the linkedlist from beginning to end
   * @param {function} cb
   * @param {LinkedListNode} current
   * @throws {Error} if cb is not a function
   */
  forEach(cb, current = this._head) {
    if (typeof cb !== 'function') {
      throw new Error('.forEach(cb) expects a callback');
    }

    if (current === null) return;

    cb(current);
    this.forEach(cb, current.getNext());
  }

  /**
   * @public
   * finds a node in the linked list based on a callback condition
   * @param {function} cb
   * @returns {LinkedListNode} current
   * @throws {Error} if cb is not a function
   */
  find(cb, current = this._head) {
    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    // did not find the node
    if (current === null) return null;

    // found the node
    if (cb(current)) return current;

    // haven't found the node, check next
    return this.find(cb, current.getNext());
  }

  /**
   * @public
   * filters the linked list based on a callback condition
   * @param {function} cb
   * @returns {LinkedList}
   * @throws {Error} if cb is not a function
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.filter(cb) expects a callback');
    }

    const result = new LinkedList();
    let last = null;
    this.forEach((node) => {
      if (!cb(node)) return;
      last = result.insertLast(node.getValue(), last);
    });

    return result;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */
  head() {
    return this._head;
  }

  /**
   * @public
   * @returns {number}
   */
  count() {
    return this._count;
  }

  /**
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._head === null;
  }

  /**
   * @public
   * clears the linked list
   */
  clear() {
    this._head = null;
    this._count = 0;
  }
}

module.exports = LinkedList;
