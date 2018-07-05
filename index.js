/**
 * datastructures-js/linked-list
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const node = (val, nex) => {
  let value = val;
  let next = nex;

  /**
   * @param {string|number} v
   */
  const setValue = (v) => {
    value = v;
  };

  /**
   * @param {object} - node
   */
  const setNext = (n) => {
    next = n;
  };

  /**
   * @return {string|number}
   */
  const getValue = () => value;

  /**
   * @return {object} - node
   */
  const getNext = () => next || null;

  // linkedList node API
  return {
    setValue,
    getValue,
    setNext,
    getNext
  };
};

const linkedList = () => {
  let headNode = null;
  let count = 0;

  /**
   * @returns {object} - node
   */
  const head = () => headNode;

  /**
   * @returns {number}
   */
  const length = () => count;

  /**
   * @param {string|number} value
   * @returns {object} - node
   */
  const find = (value) => {
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        return current;
      }
      current = current.getNext();
    }
    return current;
  };

  /**
   * @param {string|number} value
   */
  const addFirst = (value) => {
    if (headNode === null) {
      headNode = node(value);
    } else {
      headNode = node(value, headNode);
    }
    count += 1;
  };

  /**
   * @param {string|number} value
   */
  const addLast = (value) => {
    if (headNode === null) {
      headNode = node(value);
    } else {
      let current = headNode;
      while (current.getNext() !== null) {
        current = current.getNext();
      }
      current.setNext(node(value));
    }
    count += 1;
  };

  /**
   * adds a new node after an existing node
   * @param {string|number} value
   * @param {string|number} newValue
   * @throws {Error}
   */
  const addAfter = (value, newValue) => {
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        current.setNext(node(newValue, current.getNext()));
        count += 1;
        break;
      } else {
        current = current.getNext();
      }
    }
    if (current === null) {
      throw new Error(`node ${value} not found`);
    }
  };

  /**
   * @public
   * adds a new node before an existing node
   * @param {(string|number)} value
   * @param {(string|number)} newValue
   * @throws {Error}
   */
  const addBefore = (value, newValue) => {
    let prev = null;
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        if (prev === null) {
          addFirst(newValue);
        } else {
          prev.setNext(node(newValue, current));
          count += 1;
        }
        break;
      } else {
        prev = current;
        current = current.getNext();
      }
    }
    if (current === null) {
      throw new Error(`node ${value} not found`);
    }
  };

  /**
   * removes the first node
   */
  const removeFirst = () => {
    if (headNode !== null) {
      if (headNode.getNext() === null) {
        headNode = null;
      } else {
        headNode = headNode.getNext();
      }
      count -= 1;
    }
  };

  /**
   * removes the last node
   */
  const removeLast = () => {
    let prev = null;
    let current = headNode;
    while (current.getNext() !== null) {
      prev = current;
      current = current.getNext();
    }
    if (prev === null) {
      removeFirst();
    } else {
      prev.setNext(null);
      count -= 1;
    }
  };

  /**
   * removes a node by its value
   * @param {(string|number)} value
   */
  const remove = (value) => {
    let prev = null;
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        if (prev === null) {
          removeFirst();
        } else {
          prev.setNext(current.getNext());
          count -= 1;
        }
        break;
      } else {
        prev = current;
        current = current.getNext();
      }
    }
  };

  /**
   * traverse the linkedlist from a beginning to end
   * @param {function} cb - called with node in the linked list
   */
  const traverse = (cb) => {
    let current = headNode;
    while (current !== null) {
      cb(current);
      current = current.getNext();
    }
  };

  /**
   * @returns {array}
   */
  const toArray = () => {
    const arr = [];
    traverse(n => arr.push(n.getValue()));
    return arr;
  };

  /**
   * clears the linked list
   */
  const clear = () => {
    headNode = null;
    count = 0;
  };

  // linkedList API
  return {
    node,
    head,
    length,
    find,
    addFirst,
    addLast,
    addBefore,
    addAfter,
    remove,
    removeFirst,
    removeLast,
    traverse,
    toArray,
    clear
  };
};

module.exports = linkedList;
