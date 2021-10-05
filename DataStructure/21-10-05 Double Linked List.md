# 이중 연결 리스트

- 각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조입니다.

## 이중 연결 리스트 구현

### size(), isEmpty()

```js
// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// DoubleLinkedList(): head,tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// size():  연결리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;
console.log(dll); // DoubleLinkedList { head: null, tail: null, length: 0 }

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node { data: 123, next: null, prev: null },
  tail: Node { data: 123, next: null, prev: null },
  length: 1
}
*/

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length;
console.log(dll);
/*
DoubleLinkedList {
  head: <ref *1> Node {
    data: 123,
    next: Node { data: 456, next: null, prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 456,
    next: null,
    prev: <ref *1> Node { data: 123, next: [Circular *2], prev: null }
  },
  length: 1
}
*/
```

- `size`와 `isEmpty`는 `length` 속성에 영향을 받기 때문에 단일 연결리스트와 같습니다.
- 주목할점은 단일 연결리스트와 이중 연결리스트의 구조가 다르다는 것입니다.
- 이중 연결리스트에서는 `Circular`라는 형태의 구조를 확인할 수 있습니다.

### printNode(), printNodeInverse(), append()

```js
...
// printNode(): 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write('head -> ');
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};

// printNodeInverse(): 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write('null <- ');
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }
  console.log('tail');
};

// append(): 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode(); // head -> 1 -> 10 -> 100 -> null
dll.printnodeInverse(); // null <- 1 <- 10 <- 100 <- tail
```

- `printNode()`
  - DoubleLinkedList인 dll의 head부터 순차적으로 노드를 순회하며 각 노드의 값을 출력하고 tail 노드 이후에는 노드가 존재하지 않기 때문에 마지막은 null을 출력합니다.
- `printNodeInverse()`
  - DoubleLinkedList인 dll의 tail 부터 순차적으로 노드를 순회하며 노드 값을 출력하고 head 노드 이전에는 노드가 존재하지 않기 때문에 마지막은 null을 출력합니다.
  - 임시 배열에 정방향으로 순회한 노드 값을 저장하고, 임시 배열의 끝에서부터 순차적으로 순회할 수 있도록 합니다.
- `append()`
  - 새로운 노드를 생성하는 함수입니다.
  - DoubleLinkedList인 dll의 head 값이 null이면 새로 생성한 node가 dll의 head와 tail의 값이 됩니다.
    - `this.head = node` → dll에 노드 추가(head)
    - `this.tail = node` → dll에 노드 추가(tail)
  - dll의 값이 null이 아닌 노드가 존재한다면 새로 생성한 노드를 기존 tail 노드의 next 값으로 연결하고, 새로 생성한 노드의 이전 노드(prev)를 기존 노드로 설정한 후에, tail 노드를 새로 생성한 노드르 업데이트 합니다.
    - `this.tail.next = node` → 새로운 노드를 연결리스트의 tail과 연결
    - `node.prev = this.tail` → 새로운 노드를 연결리스트의 tail과 연결
    - `this.tail = node` → 이중 연결리스트의 tail 노드 변경

### insert()

```js
...
// insert(): position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }

  this.length++;
  return true;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode(); // head -> 100 -> 10 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 10 <- 1 <- tail

dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
```

- `insert()`
  - 원하는 위치에 노드를 추가할 수 있는 함수입니다.
  - `position` 값이 유효한 범위인지 확인합니다.
    - 유효하면 이후 코드를 진행합니다.
    - 유효하지 않으면 `false`를 반환합니다.
  - 크게 `position`이 0인 경우와 0이 아닌 경우로 조건을 나눕니다.
  - `position`이 0인 경우(head 노드 추가)
    - dll에 head 노드가 없는 경우
      - `this.head = node` → dll에 노드 추가(head)
      - `this.head = node` → dll에 노드 추가(tail)
    - dll에 head 노드가 존재하는 경우 새로 추가할 노드를 head로 변경
      - `node.next = current` → 새 노드의 next 노드로 dll의 head 노드를 연결
      - `current.prev = node` → dll의 head 노드의 prev 노드를 새 노드로 연결
      - `this.head = node` → dll의 head 노드를 새 노드로 변경
  - `position`이 dll의 `length`와 같은 경우(tail 노드 추가)
    - `current = this.tail` → current 노드를 ddl의 tail 노드로 변경
    - `current.next = node` → dll의 tail 노드의 next 노드로 새로 생성한 노드 연결
    - `node.prev = current` → 새로 생성한 노드의 prev 노드로 dll의 tail 노드 연결
    - `this.tail = node` → 새로 생성한 노드를 dll의 tail 노드로 업데이트
  - `position`이 0과 `length`값 사이인 경우(중간 추가)
    - 새로운 노드를 추가할 `index`위치까지 `index`를 1씩 증가시키며 `prev`노드와 `current`노드를 변경합니다.(while)
      - `prev = current` → 이전 노드를 현재 노드로 설정
      - `current = current.next` → 현재 노드를 다음 노드로 설정
    - `node.next = current` → 새 노드의 next 노드를 dll의 현재 노드와 연결
    - `prev.next = node` → dll의 이전 노드의 next 노드로 새 노드와 연결
    - `current.prev = node` → dll의 현재 노드의 prev 노드로 새 노드와 연결
    - `node.prev = prev` → 새 노드의 prev 노드로 dll의 prev 노드와 연결

### remove()

```js
...
// remove(): value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
console.log(dll.remove(1)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail
console.log(dll.remove(2)); // 2
dll.printNode(); // head -> 100 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 10 <- 3 <- tail
console.log(dll.remove(100)); // 100
dll.printNode(); // head -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 10 <- 3 <- tail
```

- `remove()`
  - dll에 1, 2, 3의 값을 가진 노드가 존재한다고 가정
  - current → dll의 head인 값이 1인 노드
  - prev → 값이 1인 노드
  - 값이 2인 노드를 지운다고 가정했을 때, while 조건을 만족하기 때문에 while문 실행
    - prev → 현재 노드
    - current → 현재 노드의 다음 노드인 값이 2인 노드
  - 이후 조건을 만족하지 못하기 때문에 while문을 빠져 나옵니다.
  - 데이터 값이 같으므로 다음 조건문으로 넘어감
  - 값이 2인 노드와 head 노드의 값이 같지 않기 때문에 다음 조건문 실행
  - 값이 2인 노드가 tail의 노드의 값과 같지 않기 때문에 다음 조건문 실행
  - 마지막 조건문
    - `prev.next = current.next` → 값이 1인 노드의 next 노드를 값이 2인 노드에서 값이 3인 노드로 업데이트
    - `current.next.prev = prev` → 값이 3인 노드의 prev 노드를 값이 2인 노드에서 값이 1인 노드로 업데이트

### removeAt()

```js
...
// removeAt(): position 위치 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
	// position 범위 체크
  if (position < 0 || position >= this.length) {
    return null;
  }
  let current = this.head;
  let index = 0;
  let prev;

	// 첫번째 노드 포지션일 경우
  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;

	// 마지막 노드의 포지션인 경우
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;

	// 첫번째도 마지막도 아닌 경우
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;

  return current.data;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.removeAt(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
console.log(dll.removeAt(4)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail
console.log(dll.removeAt()); // 100
dll.printNode(); // head -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 2 <- 10 <- 3 <- tail
console.log(dll.removeAt(1)); // 10
dll.printNode(); // head -> 2 -> 3 -> null
dll.printNodeInverse(); // null <- 2 <- 3 <- tail
```

### indexOf(), remove2()

```js
...
// indexOf(): value 값을 갖는 노드 위치 반환
DoubleLinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
};
// remove2(): indexOf + removeAt = remove
DoubleLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.indexOf(1000)); // -1
console.log(dll.indexOf(1)); // 4
console.log(dll.indexOf(100)); //0
console.log(dll.indexOf(10)); // 2

console.log(dll.remove2(1000)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
console.log(dll.remove2(4)); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
console.log(dll.remove2()); // null
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
console.log(dll.remove2(1)); // 1
dll.printNode(); // head -> 100 -> 2 -> 10 -> 3 -> null
dll.printNodeInverse(); // null <- 100 <- 2 <- 10 <- 3 <- tail
console.log(dll.size()); // 4
```
