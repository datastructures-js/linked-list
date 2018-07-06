const { expect } = require('chai');
const linkedList = require('./index');

describe('linkedList tests', () => {
  const ll = linkedList();

  describe('.addFirst(value)', () =>
    it('should add a node at the beginning of the list', () => {
      ll.addFirst('test 1');
      ll.addFirst('test 2');
    }));

  describe('.addLast(value)', () =>
    it('should add a node to the end of the list', () => {
      ll.addLast('test 3');
      ll.addLast('test 4');
    }));

  describe('.addAfter(value, newValue)', () => {
    it('should add a node after a specific value', () => {
      ll.addAfter('test 2', 'test 5');
      ll.addAfter('test 3', 'test 6');
    });

    it('should throw an error when value node does not exist', () =>
      expect(() => ll.addAfter('n123', 'test123'))
        .to.throw(Error).and.to.have
        .property('message', 'node n123 not found'));
  });

  describe('.addBefore(value, newValue)', () => {
    it('should add a node after a specific value', () => {
      ll.addBefore('test 5', 'test 7');
      ll.addBefore('test 2', 'test 8');
    });

    it('should throw an error when value node does not exist', () =>
      expect(() => ll.addBefore('n123', 'test123'))
        .to.throw(Error)
        .and.to.have.property('message', 'node n123 not found'));
  });

  describe('.count()', () =>
    it('should get the count of nodes in the list', () =>
      expect(ll.count()).to.equal(8)));

  describe('.head()', () =>
    it('should get the head node', () =>
      expect(ll.head().getValue()).to.equal('test 8')));

  describe('.toArray()', () =>
    it('should convert the linkedList to array in same order', () =>
      expect(ll.toArray()).to.deep.equal([
        'test 8',
        'test 2',
        'test 7',
        'test 5',
        'test 1',
        'test 3',
        'test 6',
        'test 4'
      ])));

  describe('.traverse(cb)', () =>
    it('should traverse the linked list', () => {
      const values = [];
      ll.traverse(v => values.push(v.getValue()));
      expect(values).to.deep.equal([
        'test 8',
        'test 2',
        'test 7',
        'test 5',
        'test 1',
        'test 3',
        'test 6',
        'test 4'
      ]);
    }));

  describe('.find(value)', () => {
    it('should find a nodes', () => {
      const n = ll.find('test 5');
      expect(n.getValue()).to.equal('test 5');
      expect(n.getNext().getValue()).to.equal('test 1');
    });

    it('should return null when a node not found', () =>
      expect(ll.find('not found')).to.equal(null));
  });

  describe('.removeFirst()', () =>
    it('should remove the first node', () => {
      ll.removeFirst();
      expect(ll.count()).to.equal(7);
      expect(ll.head().getValue()).to.equal('test 2');
    }));

  describe('.removeLast()', () =>
    it('should remove the last node', () => {
      ll.removeLast();
      expect(ll.count()).to.equal(6);
      expect(ll.find('test 4')).to.equal(null);
    }));

  describe('.remove(value)', () =>
    it('should remove a node', () => {
      ll.remove('test 5');
      expect(ll.count()).to.equal(5);
      expect(ll.find('test 5')).to.equal(null);
    }));

  describe('.clear()', () =>
    it('should clear the linked list', () => {
      ll.clear();
      expect(ll.count()).to.equal(0);
    }));
});
