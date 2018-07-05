# @datastrucures-js/linked-list

[![build:?](https://travis-ci.org/eyas-ranjous/datatructures-js/linked-list.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datatructures-js/linked-list) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/linked-list.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/linked-list.svg)](https://www.npmjs.com/packages/@datastructures-js/linked-list) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/linked-list)

elements data type: number, string, boolean, null, undefined.

## Usage
```js
const linkedListFn = require('@datastructures-js/linked-list');
const linkedList = linkedListFn();
```

## API

<img width="429" alt="ll" src="https://user-images.githubusercontent.com/6517308/35762715-5d00c9bc-0861-11e8-88f7-6e503a1fa3af.png">

**.addFirst(value)** 

add a node with the specified value to the beginning of the list.
```javascript
linkedList.addFirst('n1');
```

**.addLast(value)** 

add a node with the specified value to the end of the list.
```javascript
linkedList.addLast('n4');
```

**.addAfter(value, newValue)** 

add a node with newValue after an existing value's node, throws exception if value doesnt exist.
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

add a node with newValue before an existing value's node, throws exception if value doesnt exist.
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

returns a linkedListNode object that contains two functions:
* .getNext() returns the next linkedListNode object.
* .getValue() returns the node value.
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
linkedList.traverse((value) => { console.log(value); });
// n1
// n2   
// n3
// n4
```

**.remove(value)** 

remove the value's node from the list or throw an exception if value not found.
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

**.length()** 

returns the number of nodes in the list.
```javascript
console.log(linkedList.count()); // 1
```

**.clear()** 

removes all the nodes from the list.
```javascript
linkedList.clear();
console.log(linkedList.length()); // 0  
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/linked-list/blob/master/LICENSE)
