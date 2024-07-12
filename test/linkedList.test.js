const { expect } = require('chai');
const { LinkedList } = require('../src/linkedList');
const { LinkedListNode } = require('../src/linkedListNode');

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

  describe('.insertAt(position, value)', () => {
    it('add a node at a specific position', () => {
      expect(linkedList.insertAt(2, 5)).to.be.instanceof(LinkedListNode);
    });

    it('throws an error position is not a valid number', () => {
      expect(() => linkedList.insertAt(-1, 5)).to.throws(Error)
        .and.to.have.property(
          'message',
          '.insertAt expects a position num <= linked list size'
        );
    });
  });

  describe('.count()', () => {
    it('get the count of nodes in the list', () => {
      expect(linkedList.count()).to.equal(5);
    });
  });

  describe('.isEmpty()', () => {
    it('checks if the list is empty', () => {
      expect(linkedList.isEmpty()).to.equal(false);
    });
  });

  describe('.head()', () => {
    it('get the head node', () => {
      expect(linkedList.head().getValue()).to.equal(2);
    });
  });

  describe('.forEach(cb)', () => {
    it('traverse the linked list', () => {
      const positions = [];
      const values = [];
      linkedList.forEach((node, position) => {
        values.push(node.getValue());
        positions.push(position);
      });
      expect(values).to.deep.equal([2, 1, 5, 3, 4]);
      expect(positions).to.deep.equal([0, 1, 2, 3, 4]);
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

    it('fins a node from a starting node', () => {
      const n5 = linkedList.find((node) => node.getValue() === 5);
      const n4 = linkedList.find((node) => node.getValue() === 4, n5);
      expect(n4.getValue()).to.equal(4);
    });

    it('throws an error if starting node is not valid', () => {
      expect(() => linkedList.find(() => null, 'test')).to.throw(Error)
        .and.to.have.property('message', '.find(cb) expects to start from a LinkedListNode');
    });
  });

  describe('.toArray()', () => {
    it('convert the linkedList to array in same order', () => {
      expect(linkedList.toArray().map((n) => n.getValue()))
        .to.deep.equal([2, 1, 5, 3, 4]);
    });
  });

  describe('.filter(cb)', () => {
    it('filters the linked list based on a callback', () => {
      expect(linkedList.filter((node) => node.getValue() > 2).toArray().map((n) => n.getValue()))
        .to.deep.equal([5, 3, 4]);
    });

    it('throws an error if cb is not a function', () => {
      expect(() => linkedList.filter('test')).to.throw(Error)
        .and.to.have.property('message', '.filter(cb) expects a callback');
    });
  });

  describe('.removeFirst()', () => {
    it('remove the first node', () => {
      const removed = linkedList.removeFirst();
      expect(removed.getValue()).to.equal(2);
      expect(linkedList.count()).to.equal(4);
      expect(linkedList.head().getValue()).to.equal(1);
    });
  });

  describe('.removeLast()', () => {
    it('remove the last node', () => {
      const removed = linkedList.removeLast();
      expect(removed.getValue()).to.equal(4);
      expect(linkedList.count()).to.equal(3);
      expect(linkedList.find((n) => n.getValue() === 4)).to.equal(null);
    });
  });

  describe('.removeAt(position)', () => {
    it('remove a node', () => {
      const removed = linkedList.removeAt(1);
      expect(removed.getValue()).to.equal(5);
      expect(linkedList.count()).to.equal(2);
      expect(linkedList.find((n) => n.getValue() === 5)).to.equal(null);
    });

    it('does nothing if position is not valid', () => {
      expect(linkedList.removeAt('test')).to.equal(null);
      expect(linkedList.removeAt(-1)).to.equal(null);
      expect(linkedList.removeAt(2)).to.equal(null);
    });
  });

  describe('.removeEach(cb)', () => {
    it('remove nodes based on a callback', () => {
      linkedList.insertLast(4);
      const n3 = linkedList.find((n) => n.getValue() === 3);
      expect(linkedList.removeEach((n) => n.getValue() > 1)).to.equal(2);
      expect(linkedList.count()).to.deep.equal(1);
      expect(linkedList.toArray().map((n) => n.getValue())).to.deep.equal([1]);
      expect(n3.getNext()).to.equal(null);

      const ll2 = new LinkedList();
      [12, 21, 31, 42].forEach((n) => ll2.insertLast(n));
      ll2.removeEach((n) => n.getValue() <= 21);
      expect(ll2.toArray().map((n) => n.getValue())).to.eql([31, 42]);
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
      expect(linkedList.isEmpty()).to.equal(true);
    });
  });

  describe('.fromArray(values)', () => {
    it('create a linked list from an array', () => {
      expect(LinkedList.fromArray([1, 2, 3, 4, 5]).toArray().map((n) => n.getValue()))
        .to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('LinkedList with extended node type', () => {
    class Point extends LinkedListNode {
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
    }
    const points = new LinkedList();

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
