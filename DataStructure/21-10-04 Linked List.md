# 연결리스트

- 각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조입니다.
  - head: 시작 노드를 가르키는 포인터
  - data: 각 노드 요소의 실제 값
  - next: 다음 노드 요소를 가리키는 포인터

## 연결리스트 구현하기

### size(), isEmpty()

```js
// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
```

- LinkedList에 존재하는 객체의 수를 나타내는 length 속성을 통해서 개수와 노드의 존재 유무를 확인 할 수 있습니다.

### printNode(), append()

```js
...

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};

// append(): 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (this.head == null) {
    this.head = node; // 1
  } else {
    while (current.next != null) {
      current = current.next; // 2
    }
    current.next = node; // 3
  }
  this.length++; // 4
};

let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

ll.head.next.next = new Node(789);
ll.length;
console.log(ll);

ll.append(10);
ll.printNode();

ll.append(11);
ll.printNode();
```

- `printNode()`
  - 연결리스트를 순회하면서 연결리스트 내의 node 객체를 조회합니다
- `append()`
  - 연결리스트의 head의 값이 없는 경우 → 연결리스트의 head에 새로 생성한 node로 업데이트합니다.
  - 연결리스트의 head의 값이 존재하는 경우 → 현재 노드의 next 포인터가 null을 가르키는 노드의 뒤에 새로 생성한 node를 추가합니다.
  - 연결리스트에 노드가 추가되면 length를 증가 시킵니다.

### insert()

```js
...

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) { // 1
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) { // 2
      prev = current;
      current = current.next;
    }
		// 3
    node.next = current;
    prev.next = node;
  }
	// 4
  this.length++;

  return true;
};

let ll = new LinkedList();

ll.head = new Node(123);
ll.length++;

ll.head.next = new Node(456);
ll.length++;

ll.head.next.next = new Node(789);
ll.length;

ll.append(10);
ll.printNode(); // 123 -> 456 -> 789 -> 10 -> null

ll.append(11);
ll.printNode(); // 123 -> 456 -> 789 -> 10 -> 11 -> null

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); // 3 -> 2 -> 123 -> 456 -> 789 -> 10 -> 11 -> null
console.log(ll.size()); // 6
```

- `insert(value, position)`
  - 노드의 값과 위치 정보를 받습니다.
    - 위치 정보가 입력되지 않으면 기본값 0으로 처리됩니다.
  - position 값이 0보다 작지 않은지 연결리스트의 length 보다 큰지 확인합니다.
  - position이 0인 경우 → 새로운 노드를 연결리스트의 기존 head 노드와 바꿔주는 작업을 진행합니다.
    - `node.next` **새로운 노드의 다음 노드** → `current` **연결리스트의 head 노드**
    - `this.head` **연결리스트의 head 노드** → `node` **새로 생성한 노드**
  - position이 0이 아닌 경우 `index`가 `position` 값의 조건을 만족하지 않을때까지 `while`문을 수행합니다.
    - 연결리스트에 1과 3의 값을 갖는 node가 존재한다고 가정
    - 값이 2인 노드를 position 1에 추가한다면
    - while 문의 조건에서 `index++`은 1이고 position 값이 1이기 때문에 while문을 한번 거칩니다.
      - `prev` → `current` **1 노드**
      - `current` → `current.next` **3 노드**
    - `node.next` **값이 2인 노드의 다음 노드** → `current` **3 노드**
    - `prev.next` **1 노드의 다음 노드** → `node` **2 노드**

### remove()

```js
// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
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
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

let ll = new LinkedList();

ll.head = new Node(123);
ll.length++;

ll.head.next = new Node(456);
ll.length++;

ll.head.next.next = new Node(789);
ll.length;

ll.append(10);
ll.printNode(); // 123 -> 456 -> 789 -> 10 -> null

ll.append(11);
ll.printNode(); // 123 -> 456 -> 789 -> 10 -> 11 -> null

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); // 3 -> 2 -> 123 -> 456 -> 789 -> 10 -> 11 -> null

ll.remove(10);
ll.remove(11);
ll.printNode(); // 3 -> 2 -> 123 -> 456 -> 789 -> null
```

- `remove()`
  - 순차적으로 노드의 값을 탐색하면서 같은 값을 갖는 노드 요소를 탐색합니다.
  - 같은 `data` 값을 갖는 노드의 연결리스트에서의 연결 구조를 끊고 연결리스트 구조를 업데이트합니다.

### removeAt()

```js
...
// removeAt(): position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;
  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.removeAt(1000));
ll.printNode();
console.log(ll.removeAt(4));
ll.printNode();
console.log(ll.removeAt());
ll.printNode();
console.log(ll.removeAt(1));
ll.printNode();
console.log(ll.size());
```

- `removeAt`
  - `position` 위치에 `value`와 일치하는 data 값을 가진 노드를 연결리스트의 구조를 끊고 연결리스트의 구조를 업데이트합니다.

### indexOf(), remove2()

```js
...
// indexOf(): value 값을 갖는 노드의 위치 반환
LinkedList.prototype.indexOf = function (value) {
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
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); // 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.indexOf(1000)); // -1
console.log(ll.indexOf(1)); // 4
console.log(ll.indexOf(100)); // 0
console.log(ll.indexOf(10)); // 2

console.log(ll.remove2(100)); // 100
ll.printNode(); // 2 -> 10 -> 3 -> 1 -> null
console.log(ll.remove2(4)); // null
ll.printNode(); // 2 -> 10 -> 3 -> 1 -> null
console.log(ll.remove2(10)); // 10
ll.printNode(); // 2 -> 3 -> 1 -> null
console.log(ll.remove2(1)); // 1
ll.printNode(); // 2 -> 3 -> null
console.log(ll.size()); // 2
```

- `indexOf`
  - 연결리스트를 순회하면서 value와 일치하는 data 값을 가진 node의 인덱스를 반환합니다.
