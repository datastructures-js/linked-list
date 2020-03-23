/**
 * datastructures-js/linked-list
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const DoublyLinkedListNode = require('./doublyLinkedListNode');

/**
 * @class DoublyLinkedList
 * @extends LinkedList
 */
class DoublyLinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.nodesCount = 0;
  }

  /**
   * @public
   * adds a node at the beginning of the linked list
   *
   * @param {object} value
   * @returns {boolean}
   */
  insertFirst(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.headNode.setPrev(newNode);
      newNode.setNext(this.headNode);
      this.headNode = newNode;
    }
    this.nodesCount += 1;
    return this.headNode;
  }

  /**
   * @public
   * adds a node at the end of the linked list
   *
   * @param {object} value
   * @returns {boolean}
   */
  insertLast(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      newNode.setPrev(this.tailNode);
      this.tailNode.setNext(newNode);
      this.tailNode = newNode;
    }
    this.nodesCount += 1;
    return this.tailNode;
  }

  /**
   * @public
   * adds a node at a specific position
   *
   * @param {object} value
   * @param {number} position
   * @returns {boolean}
   */
  insertAt(value, position = 0) {
    if (Number.isNaN(+position)
      || position < 0 || position > this.nodesCount) return null;

    if (position === 0) {
      return this.insertFirst(value);
    }

    if (position === this.nodesCount) {
      return this.insertLast(value);
    }

    let counter = 1;
    let prev = this.headNode;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    const newNode = new DoublyLinkedListNode(value);
    newNode.setNext(prev.getNext());
    newNode.setPrev(prev);
    newNode.getNext().setPrev(newNode);
    newNode.getPrev().setNext(newNode);
    this.nodesCount += 1;
    return newNode;
  }

  /**
   * @public
   * removes the head node
   *
   * @returns {boolean}
   */
  removeFirst() {
    if (this.headNode === null) return false;

    this.headNode = this.headNode.getNext();
    this.headNode.setPrev(null);
    this.nodesCount -= 1;
    return true;
  }

  /**
   * @public
   * removes last node in the linked list
   *
   * @returns {boolean}
   */
  removeLast() {
    if (this.headNode === null) return false;

    if (this.headNode.getNext() === null) {
      this.headNode = null;
      this.tailNode = null;
      this.nodesCount -= 1;
      return true;
    }

    this.tailNode = this.tailNode.getPrev();
    this.tailNode.setNext(null);
    this.nodesCount -= 1;
    return true;
  }

  /**
   * @public
   * removes a node in a specific position
   *
   * @param {number} position
   * @returns {boolean}
   */
  removeAt(position) {
    if (Number.isNaN(+position)
      || position < 0
      || position >= this.nodesCount) return false;

    if (position === 0) {
      return this.removeFirst();
    }

    if (position === this.nodesCount - 1) {
      return this.removeLast();
    }

    let counter = 1;
    let prev = this.headNode;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    prev.setNext(prev.getNext().getNext());
    prev.getNext().setPrev(prev);
    this.nodesCount -= 1;
    return true;
  }

  /**
   * @public
   * removes all nodes based on a callback
   *
   * @param {number} position
   * @returns {number} count of removed nodes
   */
  removeEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.removeEach(cb) expects a callback');
    }

    let removed = 0;
    let prev = null;
    let node = this.headNode;

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
          this.nodesCount -= 1;
        }
        removed += 1;
      }
      prev = node;
      node = node.getNext();
    }

    return removed;
  }

  /**
   * @public
   * traverse the list from beginning to end
   *
   * @param {function} cb
   */
  forEach(cb, node = this.headNode) {
    if (typeof cb !== 'function') {
      throw new Error('.forEach(cb) expects a callback');
    }

    if (node === null) return;

    cb(node);
    this.forEach(cb, node.getNext());
  }

  /**
   * @public
   * traverse the list from end to beginning
   *
   * @param {function} cb
   */
  forEachReverse(cb, node = this.tailNode) {
    if (typeof cb !== 'function') {
      throw new Error('.forEachReverse(cb) expects a callback');
    }

    if (node === null) return;

    cb(node);
    this.forEachReverse(cb, node.getPrev());
  }

  /**
   * @public
   * finds a node in the linked list using on a callback
   *
   * @param {function} cb
   * @returns {DoublyLinkedListNode}
   */
  find(cb, node = this.headNode) {
    if (typeof cb !== 'function') {
      throw new Error('.find(cb) expects a callback');
    }

    // did not find the node
    if (node === null) return null;

    // found the node
    if (cb(node)) return node;

    // haven't found the node, check next
    return this.find(cb, node.getNext());
  }

  /**
   * @public
   * filters the linked list based on a callback
   *
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
    return this.headNode;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  tail() {
    return this.tailNode;
  }

  /**
   * @public
   * @returns {number}
   */
  count() {
    return this.nodesCount;
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
   * clears the linked list
   */
  clear() {
    this.headNode = null;
    this.tailNode = null;
    this.nodesCount = 0;
  }
}

module.exports = DoublyLinkedList;
