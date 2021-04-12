/**
 * datastructures-js/linked-list
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */

const LinkedListNode = require('./linkedListNode');

/*
 * @class
 */
class LinkedList {
  constructor() {
    this._head = null;
    this._count = 0;
  }

  /**
   * Adds a node at the beginning of the linked list.
   * @public
   * @param {any} value
   * @returns {LinkedListNode}
   */
  insertFirst(value) {
    this._head = new LinkedListNode(value, this._head);
    this._count += 1;
    return this._head;
  }

  /**
   * Adds a node at the end of the linked list.
   * @public
   * @param {any} value
   * @param {LinkedListNode} [startingNode]
   * @returns {LinkedListNode}
   */
  insertLast(value, startingNode) {
    if (this.isEmpty()) {
      return this.insertFirst(value);
    }

    if (startingNode && !(startingNode instanceof LinkedListNode)) {
      throw new Error('insertLast expects a LinkedListNode starting node');
    }

    let current = startingNode || this._head;
    while (current.hasNext()) {
      current = current.getNext();
    }

    current.setNext(new LinkedListNode(value, null));
    this._count += 1;
    return current.getNext();
  }

  /**
   * Adds a node at a specific position.
   * @public
   * @param {number} position
   * @param {any} value
   * @returns {LinkedListNode}
   */
  insertAt(position, value) {
    if (
      Number.isNaN(+position)
      || position < 0 || position > this._count
    ) {
      throw new Error('.insertAt expects a position num <= linked list size');
    }

    // head node is at position 0
    if (position === 0) {
      return this.insertFirst(value);
    }

    let currentPosition = 1;
    let prev = this._head;
    while (currentPosition < position) {
      currentPosition += 1;
      prev = prev.getNext();
    }

    // add it at a position after the head, between prev & prev.getNext()
    prev.setNext(new LinkedListNode(value, prev.getNext()));
    this._count += 1;
    return prev.getNext();
  }

  /**
   * Removes the head node.
   * @public
   * @returns {LinkedListNode|null}
   */
  removeFirst() {
    if (this.isEmpty()) return null;

    const removed = this._head;
    this._head = this._head.getNext();
    this._count -= 1;
    return removed.setNext(null);
  }

  /**
   * Removes last node in the linked list.
   * @public
   * @param {LinkedListNode} [startingNode]
   * @returns {LinkedListNode|null}
   */
  removeLast(startingNode) {
    if (this.isEmpty()) return null;

    if (startingNode && !(startingNode instanceof LinkedListNode)) {
      throw new Error('removeLast expects a LinkedListNode starting node');
    }

    let prev = null;
    let current = startingNode || this._head;
    while (current.hasNext()) {
      prev = current;
      current = current.getNext();
    }

    // linked list has 1 node
    if (prev === null) {
      return this.removeFirst();
    }

    prev.setNext(null);
    this._count -= 1;
    return current;
  }

  /**
   * Removes all nodes based on a callback condition.
   * @public
   * @param {function} cb - callback should return true for removed nodes.
   * @returns {number} number of removed nodes
   */
  removeEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.removeEach(cb) expects a callback');
    }

    let removedCount = 0;
    let position = 0;
    let prev = null;
    let current = this._head;
    while (current instanceof LinkedListNode) {
      if (cb(current, position)) {
        if (prev === null) {
          this.removeFirst();
        } else {
          prev.setNext(prev.getNext().getNext());
          this._count -= 1;
          removedCount += 1;
        }
      }
      position += 1;
      prev = current;
      current = current.getNext();
    }
    return removedCount;
  }

  /**
   * Removes a node at a specific position.
   * @public
   * @param {number} position
   * @returns {LinkedListNode|null}
   */
  removeAt(position) {
    if (
      Number.isNaN(+position)
      || position < 0
      || position >= this._count
    ) {
      return null;
    }

    if (position === 0) {
      return this.removeFirst();
    }

    let counter = 1;
    let prev = this._head;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }
    const removed = prev.getNext();
    prev.setNext(prev.getNext().getNext());
    this._count -= 1;
    return removed.setNext(null);
  }

  /**
   * Traverses the linked list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.forEach(cb) expects a callback');
    }

    let current = this._head;
    let position = 0;
    while (current instanceof LinkedListNode) {
      cb(current, position);
      position += 1;
      current = current.getNext();
    }
  }

  /**
   * Finds one node in the linked list based on a callback condition.
   * @public
   * @returns {LinkedListNode|null}
   */
  find(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    let current = this._head;
    while (current instanceof LinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  /**
   * Filters the linked list based on a callback condition.
   * @public
   * @param {function} cb - callback should return true for required nodes.
   * @returns {LinkedList}
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.filter(cb) expects a callback');
    }

    let last = null;
    const result = new LinkedList();
    this.forEach((node, position) => {
      if (!cb(node, position)) return;
      last = result.insertLast(node.getValue(), last);
    });
    return result;
  }

  /**
   * Returns the head node.
   * @public
   * @returns {LinkedListNode|null}
   */
  head() {
    return this._head;
  }

  /**
   * Returns the nodes count in the linked list.
   * @public
   * @returns {number}
   */
  count() {
    return this._count;
  }

  /**
   * Converts the linked list into an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * Checks if the linked list is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._head === null;
  }

  /**
   * Clears the linked list
   * @public
   */
  clear() {
    this._head = null;
    this._count = 0;
  }
}

module.exports = LinkedList;
