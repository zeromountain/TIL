# 원형 연결 리스트

- 각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조입니다.

## 원형 연결 리스트 구현

### size(), isEmpty()

```js
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;
console.log(cll); // CircularLinkedList { head: null, length: 0 }

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length;
console.log(cll);
/*
CircularLinkedList {
  head: <ref *1> Node { data: 123, next: [Circular *1] },
  length: 1
}
*/

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);
/*
CircularLinkedList {
  head: <ref *1> Node {
    data: 123,
    next: Node { data: 456, next: [Circular *1] }
  },
  length: 2
}
*/
```

- `size()`

  - `length` 속성을 통해서 Linked List의 크기를 구합니다.

- `isEmpty()`
  - `length`가 0이면 Linked List에 노드가 존재하지 않음
  - → Linked List가 비어 있음을 알 수 있습니다

### printNode(), append()

```js
...
// printNode(): 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write('head → ');

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} → `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} → `);
    }
  }
  console.log('null');
};

// append(): 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;
  this.length++;
};

let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode(); // head → 1 → 10 → 100 → null
console.log(cll.size()); // 3
```

- `printNode()`

  - Linked List의 노드를 순차적으로 출력합니다.
  - 원형이기 때문에 가장 마지막 노드는 head 노드와 연결됩니다.

- `append()`
  - 연결 리스트의 가장 끝에 노드를 추가합니다.
  - 연결 리스트에 노드가 없는 경우 → 연결 리스트의 head에 새로 생성한 노드를 연결
  - 연결 리스트에 노드가 존재
    - current 노드를 current.next 값이 head가 될때까지 wh ie문을 수행 → `current.next == this.head`면 원형 연결리스트이 마지막 노드라는 의미
    - while문 수행 후, 마지막 노드인 current.next 값으로 새로 생성한 노드를 연결합니다
  - 새로 생성한 노드가 마지막 노드로 변경되었기 때문에, node.next 값을 원형 연결 리스트의 head로 연결합니다

### insert()

```js
...
// insert(): position 위치에 노드 추가
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) return false;

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    node.next = current;

    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }
    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }

  this.length++;

  return true;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.printNode(); // head → 100 → 10 → 1 → null

cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null
```

- `insert()`
  - 원하는 위치에 노드를 추가할 수 있습니다.
  - `position` 값이 0이면 → 0번 위치에 노드를 추가합니다.
    - 연결 리스트에 노드가 존재하는지 확인
      - 노드가 존재 x → 연결 리스트의 `head` 값으로 `node` 연결
      - 노드가 존재 O → 연결 리스트의 `head` 노드부터 마지막 노드까지 `current`에 저장, 연결 리스트의 head 값을 `node`와 연결, 마지막 노드와 `head` 노드를 연결해 원형 구조 완성
  - `position` 값이 0 이외의 수 → index를 증가하며 position의 크기와 비교 후 while 문을 수행
    - while문을 수행하며 `prev` 노드와 `current` 노드를 설정
    - `node`의 next 값으로 `current` 노드와 연결
      - 만약 `node.next`의 값이 null이면 → `node.next = this.haed` 원형 구조로 연결 리스트 구조 설계
    - `prev` 노드의 next 값으로 `node`와 연결함으로 연결 리스트에 추가

### remove()

```js
...

CircularLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;
  let data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;
  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null

console.log(cll.remove(1000)); // null
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null
console.log(cll.remove(1)); // 1
cll.printNode(); // head → 100 → 2 → 10 → 3 → null
console.log(cll.remove(2)); // 2
cll.printNode(); // head → 100 → 10 → 3 → null
console.log(cll.remove(100)); // 100
cll.printNode(); // head → 10 → 3 → null
console.log(cll.size()); // 2
```

- `remove()`
  - `current` 노드의 `data` 값과 `next` 노드의 값을 비교하며 while문을 수행하며 `prev` 노드와 `current` 노드 설정
  - value와 일치하는 `current.data`를 가진 노드가 없다면 → null 반환
  - `current` 노드가 연결 리스트의 `head` 노드인 경우
    - while문을 수행하며 마지막 노드까지 접근
    - 연결 리스트의 `head` 노드 값을 연결 리스트 `head` 노드의 `next` 노드로 업데이트
    - `current` (마지막 노드)의 `next` 노드의 값을 연결 리스트의 `head` 노드로 업데이트 해줌으로 기존 `head` 노드를 연결 리스트에서 삭제
  - `current` 노드가 `head` 노드가 아닌 경우
    - 기존 `prev.next = current` 관계인 구조를 `prev.next = current.next`로 설정해 `current` 노드와의 관계를 끊어줌으로서 `current` 노드를 연결 리스트에서 제외

### removeAt()

```js
...
// removeAt(): position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;
  let data;

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    data = current.data;
    prev.next = current.next;
  }
  this.length--;

  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null

console.log(cll.removeAt(1000)); // null
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null
console.log(cll.removeAt(4)); // 1
cll.printNode(); // head → 100 → 2 → 10 → 3 → null
console.log(cll.removeAt()); // 100
cll.printNode(); // head → 2 → 10 → 3 → null
console.log(cll.removeAt(1)); // 10
cll.printNode(); // head → 2 → 3 → null
console.log(cll.size()); // 2
```

### indexOf(), remove2()

```js
...
// indexOf(): value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  // 어떤 조건을 보지 않고 일단 한번 수행
  do {
    if (current.data === value) {
      return index;
    }
    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};

// remove2(): indexOf + removeAt =remove2
CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null

console.log(cll.indexOf(1000)); // -1
console.log(cll.indexOf(1)); // 4
console.log(cll.indexOf(100)); // 0
console.log(cll.indexOf(10)); // 2

console.log(cll.remove2(1000)); // null
cll.printNode(); // head → 100 → 2 → 10 → 3 → 1 → null
console.log(cll.remove2(1)); // 1
cll.printNode(); // head → 100 → 2 → 10 → 3 → null
console.log(cll.remove2(2)); // 2
cll.printNode(); // head → 100 → 10 → 3 → null
console.log(cll.remove2(100)); // 100
cll.printNode(); // head → 10 → 3 → null
console.log(cll.size()); // 2
```
