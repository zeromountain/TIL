# 원형 큐
- 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조입니다.

## 원형 큐 구현하기
### isEmpty(), isFull()
```js
// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// isFull(): 데이터가 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3 ],
  size: 5,
  length: 3,
  head: 0,
  tail: 3
}
*/

console.log(cq.isEmpty()); // false
console.log(cq.isFull()); // false
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
/*
{
  constructor: {
    value: [Function: CircularQueue],
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
  },
  isFull: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

### enqueue(), dequeue(), getBuffer()

```js
// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// isFull(): 데이터가 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

// enqueue(): 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  this.length++;

  return true;
};

// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head++;
  this.length--;

  return element;
};

let cq = new CircularQueue([1, 2, 3, 4]);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3, 4, 5 ],
  size: 5,
  length: 5,
  head: 0,
  tail: 5
}
*/

console.log(cq.dequeue()); // 1
console.log(cq.dequeue()); // 2
console.log(cq);
/*
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 5
}
*/

cq.enqueue(6);
console.log(cq);
/*
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 6
}
*/
```
### front(), size(), clear()
```js
const DEFAULT_SIZE = 5;

// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// isFull(): 데이터가 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

// enqueue(): 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  this.length++;

  return true;
};

// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size; // 👏
  this.head++;
  this.length--;

  return element;
};

// front(): 가장 첫 번재 데이터
CircularQueue.prototype.front = function () {
  return this.length === 0 ? undefined : this.array[this.head];
};

// dataSize(): 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
  return this.length;
};

// clear(): 큐 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3, 4]);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue()); // 1
console.log(cq.dequeue()); // 3
console.log(cq);
/*
CircularQueue { 
  array: [ , 2, , 4, 5 ], 
  size: 5, 
  length: 3, 
  head: 4, 
  tail: 5 }
*/

cq.enqueue(6);
console.log(cq);
/*
CircularQueue { 
  array: [ , 2, , 4, 5, 6 ], 
  size: 5, 
  length: 4, 
  head: 4, 
  tail: 6 
  }
*/
console.log(cq.front()); // 5
console.log(cq.dataSize()); // 4

cq.clear(10);
console.log(cq); 
/*
CircularQueue { 
  array: [], 
  size: 10, 
  length: 0, 
  head: 0, 
  tail: 0 
  }
*/
```

- `[1, 2, 3, 4]` 배열을 주입해 만들어진 원형 큐의 `head` 값은 0
- 5와 6을 원형큐에 추가
  - 원형 큐의 길이와 크기를 비교해 원형 큐의 정해진 크기(5)보다 커지면 요소가 추가되지 않음
- 첫번째 `dequeue` → `this.array[0]` 요소 삭제 
  - `head`의 값을 현재 `head` 값에 1 더한 것을 원형 큐의 사이즈로 나눈 나머지를 설정 → `1 % 5 = 1`
- 두번째 `dequeue` → `this.array[1]` 요소 삭제
  - `dequeue` 전 원형큐의 상태 → `[2, 3, 4, 5, 6]`
  - `this.array[1]`은 3이기 때문에 3이 삭제됨
- 콘솔을 찍어보니 무언가 잘못 접근한 느낌 😂 
- 원형큐에 대한 보충학습이 필요함