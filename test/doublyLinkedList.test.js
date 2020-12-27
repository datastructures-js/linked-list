const { expect } = require('chai');
const DoublyLinkedList = require('../src/doublyLinkedList');

describe('doublyLinkedList tests', () => {
  const doublyLinkedList = new DoublyLinkedList();

  describe('.insertFirst(value)', () => {
    it('add a node at the beginning of the list', () => {
      expect(doublyLinkedList.insertFirst(1))
        .to.be.instanceof(DoublyLinkedList);
      expect(doublyLinkedList.insertFirst(2))
        .to.be.instanceof(DoublyLinkedList);
    });
  });

  describe('.insertLast(value)', () => {
    it('add a node to the end of the list', () => {
      expect(doublyLinkedList.insertLast(3))
        .to.be.instanceof(DoublyLinkedList);
      expect(doublyLinkedList.insertLast(4))
        .to.be.instanceof(DoublyLinkedList);
    });
  });

  describe('.insertAt(position, value)', () => {
    it('add a node at a specific position', () => {
      expect(doublyLinkedList.insertAt(2, 5))
        .to.be.instanceof(DoublyLinkedList);
    });

    it('throws error position is not a valid number', () => {
      expect(() => doublyLinkedList.insertAt(-1, 5)).to.throws(Error)
        .and.to.have.property(
          'message',
          '.insertAt expects a position num <= linked list size'
        );
    });
  });

  describe('.count()', () => {
    it('get the count of nodes in the list', () => {
      expect(doublyLinkedList.count()).to.equal(5);
    });
  });

  describe('.isEmpty()', () => {
    it('checks if the list is empty', () => {
      expect(doublyLinkedList.isEmpty()).to.equal(false);
    });
  });

  describe('.head()', () => {
    it('get the head node', () => {
      expect(doublyLinkedList.head().getValue()).to.equal(2);
    });
  });

  describe('.tail()', () => {
    it('get the tail node', () => {
      expect(doublyLinkedList.tail().getValue()).to.equal(4);
    });
  });

  describe('.forEach(cb)', () => {
    it('traverse the linked list', () => {
      const values = [];
      doublyLinkedList.forEach((node) => values.push(node.getValue()));
      expect(values).to.deep.equal([2, 1, 5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.forEach('test')).to.throw(Error)
        .and.to.have.property('message', '.forEach(cb) expects a callback');
    });
  });

  describe('.forEachReverse(cb)', () => {
    it('traverse the linked list', () => {
      const values = [];
      doublyLinkedList.forEachReverse((node) => values.push(node.getValue()));
      expect(values).to.deep.equal([4, 3, 5, 1, 2]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.forEachReverse('test')).to.throw(Error)
        .and.to.have.property(
          'message',
          '.forEachReverse(cb) expects a callback'
        );
    });
  });

  describe('.find(cb)', () => {
    it('finds the first node that fulfills the callback condition', () => {
      const n1 = doublyLinkedList.find((node) => node.getValue() === 5);
      const n2 = doublyLinkedList.find((node) => node.getValue() === 7);
      expect(n1.getValue()).to.equal(5);
      expect(n2).to.equal(null);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.find('test')).to.throw(Error)
        .and.to.have.property('message', '.find(cb) expects a callback');
    });
  });

  describe('.toArray()', () => {
    it('convert the linked list to array in same order', () => {
      expect(doublyLinkedList.toArray())
        .to.deep.equal([2, 1, 5, 3, 4]);
    });
  });

  describe('.filter(cb)', () => {
    it('filters the linked list based on a callback', () => {
      expect(doublyLinkedList.filter((node) => node.getValue() > 2).toArray())
        .to.deep.equal([5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.filter('test')).to.throw(Error)
        .and.to.have.property('message', '.filter(cb) expects a callback');
    });
  });

  describe('.removeFirst()', () => {
    it('remove the first node', () => {
      expect(doublyLinkedList.removeFirst()).to.equal(true);
      expect(doublyLinkedList.count()).to.equal(4);
      expect(doublyLinkedList.head().getValue()).to.equal(1);
    });
  });

  describe('.removeLast()', () => {
    it('remove the last node', () => {
      expect(doublyLinkedList.removeLast()).to.equal(true);
      expect(doublyLinkedList.count()).to.equal(3);
      expect(doublyLinkedList.find((n) => n.getValue() === 4)).to.equal(null);
    });
  });

  describe('.removeAt(position)', () => {
    it('remove a node', () => {
      expect(doublyLinkedList.removeAt(1)).to.equal(true); // remove 5
      expect(doublyLinkedList.count()).to.equal(2);
      expect(doublyLinkedList.find((n) => n.getValue() === 5)).to.equal(null);
    });

    it('does nothing if position is not valid', () => {
      expect(doublyLinkedList.removeAt('test')).to.equal(false);
      expect(doublyLinkedList.removeAt(-1)).to.equal(false);
      expect(doublyLinkedList.removeAt(2)).to.equal(false);
    });
  });

  describe('.removeEach(cb)', () => {
    it('remove nodes based on a callback', () => {
      expect(doublyLinkedList.removeEach((n) => n.getValue() > 1)).to.equal(1);
      expect(doublyLinkedList.count()).to.equal(1);
      expect(doublyLinkedList.find((n) => n.getValue() === 5)).to.equal(null);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.removeEach('test')).to.throw(Error)
        .and.to.have.property('message', '.removeEach(cb) expects a callback');
    });
  });

  describe('.clear()', () => {
    it('clear the linked list', () => {
      doublyLinkedList.clear();
      expect(doublyLinkedList.count()).to.equal(0);
      expect(doublyLinkedList.isEmpty()).to.equal(true);
    });
  });
});
