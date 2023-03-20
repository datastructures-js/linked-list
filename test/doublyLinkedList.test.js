const { expect } = require('chai');
const { DoublyLinkedList } = require('../src/doublyLinkedList');
const { DoublyLinkedListNode } = require('../src/doublyLinkedListNode');

describe('doublyLinkedList tests', () => {
  const doublyLinkedList = new DoublyLinkedList();

  describe('.insertFirst(value)', () => {
    it('add a node at the beginning of the list', () => {
      expect(doublyLinkedList.insertFirst(1))
        .to.be.instanceof(DoublyLinkedListNode);
      expect(doublyLinkedList.insertFirst(2))
        .to.be.instanceof(DoublyLinkedListNode);
    });
  });

  describe('.insertLast(value)', () => {
    it('add a node to the end of the list', () => {
      expect(doublyLinkedList.insertLast(3))
        .to.be.instanceof(DoublyLinkedListNode);
      expect(doublyLinkedList.insertLast(4))
        .to.be.instanceof(DoublyLinkedListNode);
    });
  });

  describe('.insertAt(position, value)', () => {
    it('add a node at a specific position', () => {
      expect(doublyLinkedList.insertAt(2, 5))
        .to.be.instanceof(DoublyLinkedListNode);
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
      const positions = [];
      doublyLinkedList.forEach((node, position) => {
        values.push(node.getValue());
        positions.push(position);
      });
      expect(values).to.deep.equal([2, 1, 5, 3, 4]);
      expect(positions).to.deep.equal([0, 1, 2, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.forEach('test')).to.throw(Error)
        .and.to.have.property('message', '.forEach(cb) expects a callback');
    });
  });

  describe('.forEachReverse(cb)', () => {
    it('traverse the linked list', () => {
      const values = [];
      const positions = [];
      doublyLinkedList.forEachReverse((node, position) => {
        values.push(node.getValue());
        positions.push(position);
      });
      expect(values).to.deep.equal([4, 3, 5, 1, 2]);
      expect(positions).to.deep.equal([4, 3, 2, 1, 0]);
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

    it('fins a node from a starting node', () => {
      const n5 = doublyLinkedList.find((node) => node.getValue() === 5);
      const n4 = doublyLinkedList.find((node) => node.getValue() === 4, n5);
      expect(n4.getValue()).to.equal(4);
    });

    it('throws an error if starting node is not valid', () => {
      expect(() => doublyLinkedList.find(() => null, 'test')).to.throw(Error)
        .and.to.have.property('message', '.find(cb) expects to start from a DoublyLinkedListNode');
    });
  });

  describe('.findReverse(cb)', () => {
    it('finds the first node that fulfills the callback condition', () => {
      const n1 = doublyLinkedList.findReverse((node) => node.getValue() === 5);
      const n2 = doublyLinkedList.findReverse((node) => node.getValue() === 7);
      expect(n1.getValue()).to.equal(5);
      expect(n2).to.equal(null);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.findReverse('test')).to.throw(Error)
        .and.to.have.property('message', '.findReverse(cb) expects a callback');
    });

    it('fins a node from a starting node', () => {
      const n5 = doublyLinkedList.findReverse((node) => node.getValue() === 5);
      const n2 = doublyLinkedList.findReverse((node) => node.getValue() === 2, n5);
      expect(n2.getValue()).to.equal(2);
    });

    it('throws an error if starting node is not valid', () => {
      it('throws an error if starting node is not valid', () => {
        expect(() => doublyLinkedList.findReverse(() => null, 'test')).to.throw(Error)
          .and.to.have.property('message', '.find(cb) expects to start from a DoublyLinkedListNode');
      });
    });
  });

  describe('.toArray()', () => {
    it('convert the linked list to array in same order', () => {
      expect(doublyLinkedList.toArray().map((n) => n.getValue()))
        .to.deep.equal([2, 1, 5, 3, 4]);
    });
  });

  describe('.filter(cb)', () => {
    it('filters the linked list based on a callback', () => {
      expect(doublyLinkedList.filter(
        (node) => node.getValue() > 2
      ).toArray().map((n) => n.getValue())).to.deep.equal([5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => doublyLinkedList.filter('test')).to.throw(Error)
        .and.to.have.property('message', '.filter(cb) expects a callback');
    });
  });

  describe('.removeFirst()', () => {
    it('remove the first node', () => {
      const removed = doublyLinkedList.removeFirst();
      expect(removed.getValue()).to.equal(2);
      expect(doublyLinkedList.count()).to.equal(4);
      expect(doublyLinkedList.head().getValue()).to.equal(1);
    });

    it('remove first node with a single node list', () => {
      const d = new DoublyLinkedList();
      d.insertFirst('test');
      expect(d.removeFirst().getValue()).to.equal('test');
      expect(d.isEmpty()).to.equal(true);
    });
  });

  describe('.removeLast()', () => {
    it('remove the last node', () => {
      const removed = doublyLinkedList.removeLast();
      expect(removed.getValue()).to.equal(4);
      expect(doublyLinkedList.count()).to.equal(3);
      expect(doublyLinkedList.find((n) => n.getValue() === 4)).to.equal(null);
    });
  });

  describe('.removeAt(position)', () => {
    it('remove a node', () => {
      const removed = doublyLinkedList.removeAt(1);
      expect(removed.getValue()).to.equal(5);
      expect(doublyLinkedList.count()).to.equal(2);
      expect(doublyLinkedList.find((n) => n.getValue() === 5)).to.equal(null);
    });

    it('does nothing if position is not valid', () => {
      expect(doublyLinkedList.removeAt('test')).to.equal(null);
      expect(doublyLinkedList.removeAt(-1)).to.equal(null);
      expect(doublyLinkedList.removeAt(2)).to.equal(null);
    });
  });

  describe('.removeEach(cb)', () => {
    it('remove nodes based on a callback', () => {
      doublyLinkedList.insertLast(4);
      const removedCount = doublyLinkedList.removeEach((n) => n.getValue() > 1);
      expect(removedCount).to.deep.equal(2);
      expect(doublyLinkedList.toArray().map((n) => n.getValue())).to.deep.equal([1]);
      expect(doublyLinkedList.count()).to.equal(1);

      const dll2 = new DoublyLinkedList();
      [12, 21, 31, 42].forEach((n) => dll2.insertLast(n));
      dll2.removeEach((n) => n.getValue() <= 21);
      expect(dll2.toArray().map((n) => n.getValue())).to.eql([31, 42]);
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

  describe('.fromArray(values)', () => {
    it('create a doubly linked list from an array', () => {
      expect(DoublyLinkedList.fromArray([1, 2, 3, 4, 5]).toArray().map((n) => n.getValue()))
        .to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('LinkedList with extended node type', () => {
    class Point extends DoublyLinkedListNode {
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
    }
    const points = new DoublyLinkedList();

    it('insert instances of extended type', () => {
      points.insertLast(new Point(1, 10));
      points.insertLast(new Point(2, 15));
      points.insertLast(new Point(3, 8));
      expect(points.toArray().map(
        (p) => ({ x: p.x, y: p.y })
      )).to.eql([
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 8 }
      ]);
    });

    it('filter custom nodes', () => {
      const filtered = points.filter((p) => p.x >= 2);
      expect(filtered.toArray().map(
        (p) => ({ x: p.x, y: p.y })
      )).to.eql([
        { x: 2, y: 15 },
        { x: 3, y: 8 }
      ]);
    });
  });
});
