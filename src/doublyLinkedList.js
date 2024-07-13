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
   * @param {T | DoublyLinkedListNode} value
   * @returns {T | DoublyLinkedListNode}
   */
  insertFirst(value) {
    let newNode = value;
    if (!(newNode instanceof DoublyLinkedListNode)) {
      newNode = new DoublyLinkedListNode(value);
    }

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
   * @param {T | DoublyLinkedListNode} value
   * @returns {T | DoublyLinkedListNode}
   */
  insertLast(value) {
    let newNode = value;
    if (!(newNode instanceof DoublyLinkedListNode)) {
      newNode = new DoublyLinkedListNode(value);
    }

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
   * @param {T | DoublyLinkedListNode} value
   * @returns {T | DoublyLinkedListNode}
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

    let newNode = value;
    if (!(newNode instanceof DoublyLinkedListNode)) {
      newNode = new DoublyLinkedListNode(value);
    }
    newNode.setNext(prev.getNext());
    newNode.setPrev(prev);
    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);
    this._count += 1;
    return newNode;
  }

  /**
   * Adds a node before an existing node.
   * @public
   * @param {T | DoublyLinkedListNode} value
   * @param {T | DoublyLinkedListNode} existingNode
   * @returns {T | DoublyLinkedListNode}
   */
  insertBefore(value, existingNode) {
    if (!existingNode) {
      return this.insertLast(value);
    }

    if (existingNode === this._head) {
      return this.insertFirst(value);
    }

    let newNode = value;
    if (!(newNode instanceof DoublyLinkedListNode)) {
      newNode = new DoublyLinkedListNode(value);
    }

    newNode.setNext(existingNode);
    newNode.setPrev(existingNode.getPrev());

    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);

    this._count += 1;

    return newNode;
  }

  /**
   * Adds a node after an existing node.
   * @public
   * @param {T | DoublyLinkedListNode} value
   * @param {T | DoublyLinkedListNode} existingNode
   * @returns {T | DoublyLinkedListNode}
   */
  insertAfter(value, existingNode) {
    if (!existingNode) {
      return this.insertFirst(value);
    }

    if (existingNode === this._tail) {
      return this.insertLast(value);
    }

    let newNode = value;
    if (!(newNode instanceof DoublyLinkedListNode)) {
      newNode = new DoublyLinkedListNode(value);
    }

    newNode.setPrev(existingNode);
    newNode.setNext(existingNode.getNext());

    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);

    this._count += 1;

    return newNode;
  }

  /**
   * Removes the head node.
   * @public
   * @returns {T | DoublyLinkedListNode}
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
   * @returns {T | DoublyLinkedListNode}
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
   * @returns {T | DoublyLinkedListNode}
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
   * @param {T | DoublyLinkedListNode} node
   * @returns {T | DoublyLinkedListNode}
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
   * @param {T | DoublyLinkedListNode} [startingNode]
   * @returns {T | DoublyLinkedListNode}
   */
  find(cb, startingNode = this._head) {
    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    if (startingNode && !(startingNode instanceof DoublyLinkedListNode)) {
      throw new Error('.find(cb) expects to start from a DoublyLinkedListNode');
    }

    let current = startingNode;
    while (current instanceof DoublyLinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  /**
   * Finds a node in the list using a callback in reverse order
   * @public
   * @param {function} cb
   * @param {T | DoublyLinkedListNode} [startingNode]
   * @returns {T | DoublyLinkedListNode}
   */
  findReverse(cb, startingNode = this._tail) {
    if (typeof cb !== 'function') {
      throw new Error('.findReverse(cb) expects a callback');
    }

    if (startingNode && !(startingNode instanceof DoublyLinkedListNode)) {
      throw new Error('.findReverse(cb) expects to start from a DoublyLinkedListNode');
    }

    let current = startingNode;
    while (current instanceof DoublyLinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = current.getPrev();
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
      if (cb(node, position)) {
        result.insertLast(node.clone());
      }
    });
    return result;
  }

  /**
   * Returns the head node.
   * @public
   * @returns {T | DoublyLinkedListNode}
   */
  head() {
    return this._head;
  }

  /**
   * Returns the tail node.
   * @public
   * @returns {T | DoublyLinkedListNode}
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
    this.forEach((node) => result.push(node));
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

  /**
   * Creates a doubly linked list from an array
   * @public
   * @static
   * @param {array} values
   * @return {DoublyLinkedList}
   */
  static fromArray(values) {
    if (!Array.isArray(values)) {
      throw new Error('cannot create DoublyLinkedList from none-array values');
    }

    const doublyLinkedList = new DoublyLinkedList();
    values.forEach((value) => {
      doublyLinkedList.insertLast(value);
    });
    return doublyLinkedList;
  }
}

exports.DoublyLinkedList = DoublyLinkedList;
