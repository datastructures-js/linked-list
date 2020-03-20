const { expect } = require('chai');
const LinkedListNode = require('../src/linkedListNode');
const LinkedList = require('../src/linkedList');

describe('linkedList tests', () => {
  const linkedList = new LinkedList();

  describe('.insertFirst(value)', () => {
    it('insert a node at the beginning', () => {
      expect(linkedList.insertFirst(1)).to.be.instanceof(LinkedListNode);
      expect(linkedList.insertFirst(2)).to.be.instanceof(LinkedListNode);
    });
  });

  describe('.insertLast(value)', () => {
    it('insert a node to the end ', () => {
      expect(linkedList.insertLast(3)).to.be.instanceof(LinkedListNode);
      expect(linkedList.insertLast(4)).to.be.instanceof(LinkedListNode);
    });
  });

  describe('.insertAt(value, position)', () => {
    it('add a node at a specific position', () => {
      expect(linkedList.insertAt(5, 2)).to.be.instanceof(LinkedListNode);
    });

    it('does not add a node when position is not a valid number', () => {
      expect(linkedList.insertAt(5, -1)).to.equal(null);
    });
  });

  describe('.count()', () => {
    it('get the count of nodes in the list', () => {
      expect(linkedList.count()).to.equal(5);
    });
  });

  describe('.head()', () => {
    it('get the head node', () => {
      expect(linkedList.head().getValue()).to.equal(2);
    });
  });

  describe('.forEach(cb)', () => {
    it('traverse the linked list', () => {
      const values = [];
      linkedList.forEach((node) => values.push(node.getValue()));
      expect(values).to.deep.equal([2, 1, 5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => linkedList.forEach('test')).to.throw(Error)
        .and.to.have.property('message', '.forEach(cb) expects a callback');
    });
  });

  describe('.find(cb)', () => {
    it('finds the first node that fulfills the callback condition', () => {
      const n1 = linkedList.find((node) => node.getValue() === 5);
      const n2 = linkedList.find((node) => node.getValue() === 7);
      expect(n1.getValue()).to.equal(5);
      expect(n2).to.equal(null);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => linkedList.find('test')).to.throw(Error)
        .and.to.have.property('message', '.find(cb) expects a callback');
    });
  });

  describe('.toArray()', () => {
    it('convert the linkedList to array in same order', () => {
      expect(linkedList.toArray())
        .to.deep.equal([2, 1, 5, 3, 4]);
    });
  });

  describe('.filter(cb)', () => {
    it('filters the linked list based on a callback', () => {
      expect(linkedList.filter((node) => node.getValue() > 2).toArray())
        .to.deep.equal([5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => linkedList.filter('test')).to.throw(Error)
        .and.to.have.property('message', '.filter(cb) expects a callback');
    });
  });

  describe('.removeFirst()', () => {
    it('remove the first node', () => {
      expect(linkedList.removeFirst()).to.equal(true);
      expect(linkedList.count()).to.equal(4);
      expect(linkedList.head().getValue()).to.equal(1);
    });
  });

  describe('.removeLast()', () => {
    it('remove the last node', () => {
      expect(linkedList.removeLast()).to.equal(true);
      expect(linkedList.count()).to.equal(3);
      expect(linkedList.find((n) => n.getValue() === 4)).to.equal(null);
    });
  });

  describe('.removeAt(position)', () => {
    it('remove a node', () => {
      expect(linkedList.removeAt(2)).to.equal(true); // remove 5
      expect(linkedList.count()).to.equal(2);
      expect(linkedList.find((n) => n.getValue() === 3)).to.equal(null);
    });

    it('does nothing if position is not valid', () => {
      expect(linkedList.removeAt('test')).to.equal(false);
      expect(linkedList.removeAt(-1)).to.equal(false);
      expect(linkedList.removeAt(2)).to.equal(false);
    });
  });

  describe('.removeEach(cb)', () => {
    it('remove nodes based on a callback', () => {
      expect(linkedList.removeEach((n) => n.getValue() > 1)).to.equal(1);
      expect(linkedList.count()).to.equal(1);
      expect(linkedList.find((n) => n.getValue() === 5)).to.equal(null);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => linkedList.removeEach('test')).to.throw(Error)
        .and.to.have.property('message', '.removeEach(cb) expects a callback');
    });
  });

  describe('.clear()', () => {
    it('clear the linked list', () => {
      linkedList.clear();
      expect(linkedList.count()).to.equal(0);
    });
  });
});
