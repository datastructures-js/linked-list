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
    this.headNode = null;
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
    const head = new LinkedListNode(value, this.headNode);
    this.headNode = head;
    this.nodesCount += 1;
    return this.headNode;
  }

  /**
   * @public
   * adds a node at the end of the linked list
   *
   * @param {object} value
   * @param {LinkedListNode} node
   * @returns {boolean}
   */
  insertLast(value, node = this.headNode) {
    const lastNode = new LinkedListNode(value);

    // empty linked list
    if (node === null) {
      this.headNode = lastNode;
      this.nodesCount += 1;
      return lastNode;
    }

    // arrived to last node, add new node after
    if (node.getNext() === null) {
      node.setNext(lastNode);
      this.nodesCount += 1;
      return lastNode;
    }

    // not the last node, move to next
    return this.insertLast(value, node.getNext());
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

    // head node is at position 0
    if (position === 0) {
      return this.insertFirst(value);
    }

    let counter = 1;
    let prev = this.headNode;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    // add it at a position after the head
    const newNode = new LinkedListNode(value);
    newNode.setNext(prev.getNext());
    prev.setNext(newNode);
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
    this.nodesCount -= 1;
    return true;
  }

  /**
   * @public
   * removes last node in the linked list
   *
   * @returns {boolean}
   */
  removeLast(prev = null, node = this.headNode) {
    if (node === null) return false;

    // not last node, move next
    if (node.getNext() !== null) {
      return this.removeLast(node, node.getNext());
    }

    // linked list has 1 node
    if (prev === null) {
      return this.removeFirst();
    }

    // arrived to last node, remove it
    prev.setNext(null);
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
        } else {
          prev.setNext(prev.getNext().getNext());
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

    let counter = 1;
    let prev = this.headNode;
    while (counter < position) {
      counter += 1;
      prev = prev.getNext();
    }

    prev.setNext(prev.getNext().getNext());
    this.nodesCount -= 1;
    return true;
  }

  /**
   * @public
   * traverse the linkedlist from beginning to end
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
   * finds a node in the linked list using on a callback
   *
   * @param {function} cb
   * @returns {LinkedListNode}
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
   *
   * @returns {LinkedList}
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
    return this.headNode;
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
    this.nodesCount = 0;
  }
}

module.exports = LinkedList;
