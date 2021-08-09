/**
 * datastructures-js/linked-list
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */

const { DoublyLinkedListNode } = require('./doublyLinkedListNode');

/**
 * @class
 */
class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  /**
   * Adds a node at the beginning of the list.
   * @public
   * @param {any} value
   * @returns {DoublyLinkedListNode}
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
    return newNode;
  }

  /**
   * Adds a node at the end of the list.
   * @public
   * @param {any} value
   * @returns {DoublyLinkedListNode}
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
    return newNode;
  }

  /**
   * Adds a node at a specific position.
   * @public
   * @param {number} position
   * @param {any} value
   * @returns {DoublyLinkedListNode}
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

    let currentPosition = 1;
    let prev = this._head;
    while (currentPosition < position) {
      currentPosition += 1;
      prev = prev.getNext();
    }

    const newNode = new DoublyLinkedListNode(value);
    newNode.setNext(prev.getNext());
    newNode.setPrev(prev);
    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);
    this._count += 1;
    return newNode;
  }

  /**
   * Removes the head node.
   * @public
   * @returns {DoublyLinkedListNode}
   */
  removeFirst() {
    if (this.isEmpty()) return null;

    const removedNode = this._head;
    if (this._head.hasNext()) {
      this._head = this._head.getNext();
      this._head.setPrev(null);
    } else {
      this._head = null;
      this._tail = null;
    }
    this._count -= 1;
    return removedNode.setNext(null);
  }

  /**
   * Removes the tail node.
   * @public
   * @returns {DoublyLinkedListNode}
   */
  removeLast() {
    if (this.isEmpty()) return null;

    const removedNode = this._tail;
    if (this._tail.hasPrev()) {
      this._tail = this._tail.getPrev();
      this._tail.setNext(null);
    } else {
      this._head = null;
      this._tail = null;
    }
    this._count -= 1;
    return removedNode.setPrev(null);
  }

  /**
   * Removes a node in a specific position.
   * @public
   * @param {number} position
   * @returns {DoublyLinkedListNode}
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

    if (position === this._count - 1) {
      return this.removeLast();
    }

    let currentPosition = 1;
    let current = this._head.getNext();
    while (currentPosition < position) {
      currentPosition += 1;
      current = current.getNext();
    }
    return this.remove(current);
  }

  /**
   * Removes a node from the list by its reference.
   * @public
   * @param {DoublyLinkedListNode} node
   * @returns {DoublyLinkedListNode}
   */
  remove(node) {
    if (node && !(node instanceof DoublyLinkedListNode)) {
      throw new Error('remove: expects a DoublyLinkedListNode node');
    }

    if (!node) {
      return null;
    }

    if (!node.hasPrev()) {
      return this.removeFirst();
    }

    if (!node.hasNext()) {
      return this.removeLast();
    }

    node.getPrev().setNext(node.getNext());
    node.getNext().setPrev(node.getPrev());
    this._count -= 1;
    return node.setPrev(null).setNext(null);
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} cb
   * @returns {number} number of removed nodes
   */
  removeEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.removeEach(cb) expects a callback');
    }

    let removedCount = 0;
    let position = 0;
    let current = this._head;
    while (current instanceof DoublyLinkedListNode) {
      if (cb(current, position)) {
        const next = current.getNext();
        this.remove(current);
        removedCount += 1;
        current = next;
      } else {
        current = current.getNext();
      }
      position += 1;
    }
    return removedCount;
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

    let current = this._head;
    let position = 0;
    while (current instanceof DoublyLinkedListNode) {
      cb(current, position);
      position += 1;
      current = current.getNext();
    }
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

    let current = this._tail;
    let position = this._count - 1;
    while (current instanceof DoublyLinkedListNode) {
      cb(current, position);
      position -= 1;
      current = current.getPrev();
    }
  }

  /**
   * Finds a node in the list using a callback
   * @public
   * @param {function} cb
   * @param opts
   * @param {boolean} opts.reverse Traverse the list backwards
   * @param {DoublyLinkedListNode} opts.startAt Node to start the search from
   * @returns {DoublyLinkedListNode}
   */
  find(cb, opts = {}) {
    const reverse = !!opts.reverse;
    const startAt = opts.startAt || null;

    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    if (startAt && !(startAt instanceof DoublyLinkedListNode)) {
      throw new Error('opts.startAt expects a DoublyLinkedListNode');
    }

    let current = startAt || (reverse ? this._tail : this._head);
    while (current instanceof DoublyLinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = reverse ? current.getPrev() : current.getNext();
    }
    return null;
  }

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} cb
   * @returns {LinkedList}
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.filter(cb) expects a callback');
    }

    const result = new DoublyLinkedList();
    this.forEach((node, position) => {
      if (!cb(node, position)) return;
      result.insertLast(node.getValue());
    });
    return result;
  }

  /**
   * Returns the head node.
   * @public
   * @returns {DoublyLinkedListNode}
   */
  head() {
    return this._head;
  }

  /**
   * Returns the tail node.
   * @public
   * @returns {DoublyLinkedListNode}
   */
  tail() {
    return this._tail;
  }

  /**
   * Returns the nodes count in the list.
   * @public
   * @returns {number}
   */
  count() {
    return this._count;
  }

  /**
   * Converts the doubly linked list into an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * Checks if the list is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._head === null;
  }

  /**
   * Clears the list
   * @public
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }
}

exports.DoublyLinkedList = DoublyLinkedList;
