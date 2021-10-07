# 연결리스트 문제 풀이
## 열차 연결
```js
/**
 * 새로운 지하철 노선이 신설되어, 이를 위한 열차가 새로 반입되었다.
 * 하지만 이 열차들은 서로 연결되어 있지 않아 현재 운행이 어려운 상태이다.
 * 열차 운행을 위해 열차 찻간을 이어주는 프로그램을 작성하시오.
 * 열차 별로 고유의 식별번호가 있어, 이를 기준으로 반입된 순서대로 열차 찻간을 이어주도록 한다.
 * 입력은 배열 형태로 열차 식별번호가 주어지며, 열차 찻간을 이어주는 Linked List 형태로 반환한다.
 * 열차 연결 및 반환을 위해 사용해야 할 Train  객체와 Linked List 객체는 템플릿 코드를 참고한다.
 *
 * 입력값
 * [4, 7, 1, 10, 6]
 * [3, 10, 6, 9, 11, 3, 4]
 * [5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
 *
 * 출력값
 * 4 -> 7 -> 1 -> 10 -> 6 -> null
 * 3 -> 10 -> 6 -> 9 -> 11 -> 3 -> 4 ->null
 * 5 -> 8 -> 7 -> 3 -> 4 -> 1 -> 2 -> 7 -> 10 -> 7 -> null
 */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  // train 객체를 nums 배열의 수만큼 생성, next 속성을 이용해 열차 간 연결
  // 최초의 Train 객체 this.head 연결
  let current, prev;
  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);

    if (i === 0) {
      ll.head = current;
    } else {
      // 이전 객체 → 현재 객체
      prev.next = current;
    }
    prev = current;
  }

  return ll;
}

let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} → `);
  }
  console.log(null);
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}: `);
  answer(input[i]).printNode();
}
```
- 목적: Linked List에 Node를 추가할 수 있는가

> 
> - 찻간 → 노드
>   - data → 열차 식별번호
>   - next → 다음 찻간
> - 연결된 지히철 → Linked List
>   - head → 첫번째 찻간

- 1. 찻간들을 연결할 Linked List의 인스턴스 객체를 생성합니다.
  - `let ll = new LinkedList()`
- 2. 현재 node와 이전 node를 구분할 임시 저장 공간을 생성합니다.
  - `let current, prev`
- 3. 입력 받은 배열의 길이만큼 반복합니다. 
  - `for(let i = 0; i < nums.length; i++){ ... }`
- 4. 각각의 식별번호를 가진 노드를 생성합니다.
  - `current = new Train(nums[i])`
- 5. i의 조건을 확인합니다.
  - i 가 0이라면 → `ll.head = current` 현재 노드를 연결 리스트의 `head` 노드로 연결합니다.
  - i 가 0이 아니라면 → `prev.next = current` 현재 노드를 이전 노드의 `next` 노드로 연결합니다.
  - `prev = current` 현재 노드를 `prev`에 저장함으로써 다음 생성되는 `node`와 연결하는 역할을 합니다.

## 서류 정리
```js
/**
 * 동생에게 전달해준 서류를 순서대로 서랍에 정리해달라고 부탁했더니, 서류를 반대 순서로 넣어 두었다.
 * 다시 제대로 정렬하기 위해, 이미 정리된 순서의 반대로 서류를 역 정렬시키는 프로그램을 제작하시오.
 * 만약 서류가 1 → 2 → 3 순으로 들어가 있다면 3 → 2 → 1로 역 정렬 시켜야 한다.
 * 입력은 동생의 가공을 통해 역 정렬된 서류가 저장되어 있는 Linked LIst 객체가 주어지며, 포인트 조작을 통해 파일 순서만 변경하여 Linked List 객체를 반환한다.
 *
 * 입력값
 * 1 → 3 → 7 → null
 * 3 → 1 → 9 → 6 → 4 → null
 * 6 → 9 → 7 → 2 → 1 → 4 → 3 → null
 *
 * 출력값
 * 7 → 3 → 1 → null
 * 4 → 6 → 9 → 1 → 3 → null
 * 3 → 4 → 1 → 2 → 7 → 9 → 6 → null
 */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  console.log(ll);
  let current = ll.head;
  let prev = null;
  let next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  ll.head = prev;

  return ll;
}

let input = [
  [7, 3, 1],
  [4, 6, 9, 1, 3],
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} → `);
  }
  console.log('null');
};

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}: `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}
```

- 목적: 연결리스트의 노드 순서를 변경할 수 있는가

- 1. 연결 리스트의 각 노드를 저장할 수 있는 공간을 생성합니다.
  - `let current = ll.head` 현재 노드를 연결리스트의 `head`노드로 설정
  - `let prev, next = null` 이전 노드와 다음 노드를 임시로 저장 할 수 있는 변수
- 2. while문을 돌면서 연결 리스트의 노드 순서를 역순으로 변경합니다.
  - 현재 노드가 존재한다면 
    - `next = current.next` → `current`의 `next`값을 `next` 변수에 저장합니다. (임시 저장)
    - `current.next = prev` → `prev` 변수에 저장된 값으로 `current.next`를 대체합니다.
    - `prev = current` → `current` 변수에 저장된 값으로 `prev` 값을 대체합니다.
    - `current = next` → `next` 변수에 저장된 값으로 `current` 값을 대체합니다.
- 3. while문 종료 후에 연결리스트의 `head` 노드를 `prev` 값으로 변경합니다.

## 대표 선출
```js
/**
 * 네카라쿠배 마을에 대표를 선출해야 한다. 모두 자신이 대표가 되고 싶어하여, 아래 규칙을 통해 대표를 선출하기로 하였다.
 * 규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다.
 * 그리고 주사위를 굴려 나온 숫자 m의 사람을 제외하고, 그 다음으로 나온 주사위 숫자 k만큼 이동해 가며 대표 후보에서 제외시킨다.
 * 이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다.
 * n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하시오.
 * 입력은 n, m, k의 자연수가 주어지며, 대표 후보에서 제외되는 번호를 순차적으로 배열로 반환한다.
 *
 * 입력값
 * 8 2 3
 * 10 2 3
 * 20 5 7
 *
 * 출력값
 * [2, 5, 8, 4, 1, 7, 3, 6]
 * [2, 5, 8, 1, 6, 10, 7, 4, 9, 3]
 * [5, 12, 19, 7, 15, 3, 13, 2, 14, 6, 18, 11, 9, 8, 10, 17, 4, 16, 20, 1]
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];
  let ll = new LinkedList();
  let current, prev;

  /**
   * n: 후보들의 번호, 수
   * m: 시작할 번호
   * k: 이동 숫자
   */
  // 원탁에 후보들을 배열
  for (let i = 1; i <= n; i++) {
    current = new Node(i);
    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  current.next = ll.head;

  // 시작 위치 설정
  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  // k만큼 움직이며 제외
  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }
  // 마지막 하나의 노드를 result 추가
  result.push(current.data);

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
```

- 목적: 원형 연결리스트를 다룰 수 있는가

> n: 후보 번호
>
> m: 가장 먼저 제외될 번호
>
> k: 기준

- 1. 연결리스트의 인스턴트 객체를 생성하고, 노드를 임시로 저장할 공간을 생성합니다. 
  - `let ll = new LinkedList()` → 연결리스트 인스턴트 객체 생성
  - `let current, prev = null` → 노드를 임시로 저장할 공간
-  2. 반복문을 수행하며 원형 연결리스트에 각 노드를 배치합니다.
  - i 값이 1이라면  
    - 원형 연결리스트의 첫번째 노드이므로 연결리스트의 `head` 값으로 연결합니다.
    - `current` 노드를 `prev` 변수에 저장합니다.
  - 그 외 
    - `current` 노드를 `prev.next`에 저장합니다.
    - `current` 노드를 `prev` 변수에 저장합니다.
  - 반복문 종료 후, `current.next` 노드를 원형 연결리스트의 `head` 노드와 연결합니다 
- 3. `current` 노드를 연결리스트의 `head`로 설정하고 while문을 수행하면서 시작 위치를 탐색합니다.
  - m의 값을 선 감소후 while문 내부를 수행 → m의 값이 0이 되면 `false`이기 때문에 종료
  - `prev = current` → `current`를 `prev` 변수에 저장합니다. 
  - `current = current.next` → `current`의 다음 노드를 `current` 변수에 저장합니다.
- 4. 시작 지점에서 k 번째 위치에 있는 후보들을 제외합니다.
  - `let count` → while의 조건이 될 변수
  - 원형 연결리스트의 마지막 노드까지 while문을 수행합니다.
    - `result.push(current.data)` → `current`에 저장된 노드의 값은 제외되는 번호이기 때문에 `result` 배열에 추가합니다.
    - `prev.next = current.next` → `current`의 `next` 노드를 `prev`의 `next` 노드로 연결합니다.
    - `k`를 `count` 변수에 저장합니다. → 내부 while문 수행 종료 후에 다시 초기화됩니다.
      - `count`를 감소시키며 while 문을 반복 수행합니다. 
      - `prev = current` → 이전 노드를 현재 노드로 변경합니다.
      - `current = current.next` → 현재 노드를 현재 노드의 다음 노드로 변경합니다.
- 5. 마지막 남은 노드의 값을 `result` 배열 추가합니다.