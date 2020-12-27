/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */

const DoublyLinkedListNode = require('./doublyLinkedListNode');

/**
 * @class
 */
class DoublyLinkedList {
  /**
   * Creates a doubly linked list.
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  /**
   * Adds a node at the beginning of the linked list.
   * @public
   * @param {any} value
   * @returns {DoublyLinkedList} - reference to this
   */
  insertFirst(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.isEmpty()) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._head.setPrev(newNode);
      newNode.setNext(this._head);
      this._head = newNode;
    }

    this._count += 1;
    return this;
  }

  /**
   * Adds a node at the end of the linked list.
   * @public
   * @param {any} value
   * @returns {DoublyLinkedList} - reference to this
   */
  insertLast(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.isEmpty()) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.setPrev(this._tail);
      this._tail.setNext(newNode);
      this._tail = newNode;
    }
    this._count += 1;
    return this;
  }

  /**
   * Adds a node at a specific position.
   * @public
   * @param {number} position
   * @param {any} value
   * @returns {DoublyLinkedList} - reference to this
   */
  insertAt(position, value) {
    if (
      Number.isNaN(+position)
      || position < 0 || position > this._count
    ) {
      throw new Error('.insertAt expects a position num <= linked list size');
    }

    if (position === 0) {
      return this.insertFirst(value);
    }

    if (position === this._count) {
      return this.insertLast(value);
    }

    let counter = 1;
    let prev = this._head;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    const newNode = new DoublyLinkedListNode(value);
    newNode.setNext(prev.getNext());
    newNode.setPrev(prev);
    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);
    this._count += 1;
    return this;
  }

  /**
   * Removes the head node.
   * @public
   * @returns {boolean}
   */
  removeFirst() {
    if (this._head === null) return false;

    this._head = this._head.getNext();
    this._head.setPrev(null);
    this._count -= 1;

    return true;
  }

  /**
   * Removes the tail node.
   * @public
   * @returns {boolean}
   */
  removeLast() {
    if (this._head === null) return false;

    if (this._head.getNext() === null) {
      this._head = null;
      this._tail = null;
      this._count -= 1;
      return true;
    }

    this._tail = this._tail.getPrev();
    this._tail.setNext(null);
    this._count -= 1;
    return true;
  }

  /**
   * Removes a node in a specific position.
   * @public
   * @param {number} position
   * @returns {boolean}
   */
  removeAt(position) {
    if (
      Number.isNaN(+position)
      || position < 0
      || position >= this._count
    ) {
      return false;
    }

    if (position === 0) {
      return this.removeFirst();
    }

    if (position === this._count - 1) {
      return this.removeLast();
    }

    let counter = 1;
    let prev = this._head;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    prev.setNext(prev.getNext().getNext());
    prev.getNext().setPrev(prev);
    this._count -= 1;
    return true;
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} cb
   * @returns {number} count of removed nodes
   */
  removeEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.removeEach(cb) expects a callback');
    }

    let removed = 0;
    let prev = null;
    let node = this._head;

    while (node !== null) {
      if (cb(node)) {
        if (prev === null) {
          this.removeFirst();
        } else if (prev.getNext() === null) {
          this.removeLast();
        } else {
          prev.setNext(prev.getNext().getNext());
          if (prev.getNext() !== null) {
            prev.getNext().setPrev(prev);
          }
          this._count -= 1;
        }
        removed += 1;
      }
      prev = node;
      node = node.getNext();
    }

    return removed;
  }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.forEach(cb) expects a callback');
    }

    const forEachRecursive = (current, position = 0) => {
      if (current === null) return;

      cb(current, position);
      forEachRecursive(current.getNext(), position + 1);
    };

    forEachRecursive(this._head);
  }

  /**
   * Traverses the list backward from end to beginning
   * @public
   * @param {function} cb
   */
  forEachReverse(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.forEachReverse(cb) expects a callback');
    }

    const forEachReverseRecursive = (current, position = this._count - 1) => {
      if (current === null) return;

      cb(current, position);
      forEachReverseRecursive(current.getPrev(), position - 1);
    };

    forEachReverseRecursive(this._tail);
  }

  /**
   * @public
   * finds a node in the linked list using on a callback
   * @param {function} cb
   * @returns {DoublyLinkedListNode}
   * @throws {Error} if cb is not a function
   */
  find(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    const findRecursive = (current) => {
      // did not find the node
      if (current === null) return null;

      // found the node
      if (cb(current)) return current;

      // haven't found the node yet, check next
      return findRecursive(current.getNext());
    };

    return findRecursive(this._head);
  }

  /**
   * Filters the linked list based on a callback.
   * @public
   * @param {function} cb
   * @returns {LinkedList}
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.filter(cb) expects a callback');
    }

    const result = new DoublyLinkedList();
    let last = null;
    this.forEach((node) => {
      if (!cb(node)) return;
      last = result.insertLast(node.getValue(), last);
    });

    return result;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  head() {
    return this._head;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  tail() {
    return this._tail;
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
   * Clears the linked list
   * @public
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }
}

module.exports = DoublyLinkedList;
