# 우선순위 큐
- 우선순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조입니다.
  - FIFO(선입선출) → 유통기한이 빠른 편의점의 도시락은 유통기한이 짧은 도시락이 먼저 팔려야하기 때문에 상품을 앞에 진열
- 우선순위 정렬 방식
  - 배열 기반
  - 연결리스트 기반
  - 힙 기반
## 우선순위 큐 구현하기
### getBuffer(), isEmpty()
```js
// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((el) => el.data);
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
/* 
{
  constructor: {
    value: [Function: Element],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
*/
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
/*
{
  constructor: {
    value: [Function: PriorityQueue],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

### enqueue(), dequeue()
```js
// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((el) => el.data);
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// enqueue(): 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }
  return this.array.length;
};

// dequeue(): 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

let pq = new PriorityQueue();

pq.enqueue('Alice', 1);
pq.enqueue('Bob', 2);
console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Bob', priority: 2 }
  ]
}
*/

pq.enqueue('Tom', 1);
pq.enqueue('John', 3);
console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Tom', priority: 1 },
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
*/
```

### front(), size(), clear()
```js
// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((el) => el.data);
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// enqueue(): 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }
  return this.array.length;
};

// dequeue(): 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

// front(): 가장 첫번째 데이터 반환
PriorityQueue.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0].data;
};

// size(): 큐내 데이터 개수 반환
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

// clear(): 큐 초기화
PriorityQueue.prototype.clear = function () {
  this.array = [];
};

let pq = new PriorityQueue();

pq.enqueue('Alice', 1);
pq.enqueue('Bob', 2);
pq.enqueue('Tom', 1);
pq.enqueue('Jhon', 3);

console.log(pq.getBuffer()); // [ 'Alice', 'Tom', 'Bob', 'Jhon' ]

console.log(pq.dequeue()); // Element { data: 'Alice', priority: 1 }

console.log(pq.dequeue()); // Element { data: 'Tom', priority: 1 }


console.log(pq.front()); // Bob
console.log(pq.size()); // 2
```