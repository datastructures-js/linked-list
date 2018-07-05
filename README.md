# @datastrucures-js/linked-list

[![build:?](https://travis-ci.org/eyas-ranjous/datatructures-js/linked-list.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datatructures-js/linked-list) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/linked-list.svg)](https://www.npmjs.com/packages/@datastructures-js/linked-list) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)

node's data type: **number**, **string**, **boolean**, **null**, **undefined**.

<img width="429" alt="ll" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

## Usage
```js
const linkedListFn = require('@datastructures-js/linked-list');
const linkedList = linkedListFn();
```

## API

**.node(value)**

creates a linked list node with a given value. The node object exposes the following functions:

* **.setNext(node)** sets the next linkedListNode object.
* **.getNext()** gets the next linkedListNode object.
* **.setValue(value)** sets the value of the node.
* **.getValue() gets** the value of the node

```javascript
const n = linkedList.node('new_node');
console.log(n.getValue()); // new_node
```

**.addFirst(value)** 

adds a node of the given value at the beginning of the list.
```javascript
linkedList.addFirst('n1');
```

**.addLast(value)** 

adds a node of the given value at the end of the list.
```javascript
linkedList.addLast('n4');
```

**.addAfter(value, newValue)** 

adds a node with a given value after an existing value's node.
```javascript
try {
  linkedList.addAfter('n1', 'n2');
  linkedList.addAfter('n33', 'n3');
}
catch (e) {
  console.log(e.message); // node n33 not found
}
```

**.addBefore(value, newValue)** 

adds a node with a given value before an existing value's node.
```javascript
try {
  linkedList.addBefore('n4', 'n3');
  linkedList.addBefore('n33', 'n3');
}
catch (e) {
  console.log(e.message); // node n33 not found
}
```

**.find(value)** 
finds a node by its value and returns a linked list node object.

```javascript
let n3 = linkedList.find('n3');
console.log(n3.getValue()); // n3
console.log(n3.getNext().getValue()); // n4
```

**.head()** 

returns the first linkedListNode object in the list.
```javascript
let head = linkedList.head();
console.log(head.getValue()); // n1
```

**.traverse(cb)** 

traverse the linked list and calls cb for each node
```javascript
linkedList.traverse((n) => { console.log(n.getValue()); });
// n1
// n2   
// n3
// n4
```

**.remove(value)** 

remove the value's node - if exists - from the list.
```javascript
linkedList.remove('n3');
```

**.removeFirst()** 

removes the first node in the list.
```javascript
linkedList.removeFirst(); // n1 removed
```

**.removeLast()** 

removes the last node in the list.
```javascript
linkedList.removeLast(); // n4 removed
```

**.toArray()** 

converts the linkedList to an array
```javascript
console.log(linkedList.toArray());
// ['n1', 'n2', 'n3', 'n4']
```

**.count()** 

returns nodes' count in the list.
```javascript
console.log(linkedList.count()); // 1
```

**.clear()** 

removes all nodes from the list.
```javascript
linkedList.clear();
console.log(linkedList.head()); // null
console.log(linkedList.count()); // 0
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/linked-list/blob/master/LICENSE)
