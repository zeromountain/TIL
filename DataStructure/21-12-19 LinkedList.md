### 요소 추가와 삭제가 반복되는 로직이라면 어떻게 해야할까?

- 배열 자료 구조 사용이 권장되지 않는다

# 연결리스트

- 연결리스트는 각 요소를 포인터로 연결하여 관리하는 선형 자료 구조
- 각 요소는 노드라고 부르며, 데이터 영역(value)과 포인터 영역(prev, next)으로 구성

## 연결리스트의 특징

- 메모리가 허용하는 한 요소를 제한없이 추가
- 탐색은 O(n)의 시간 복잡도가 소요
- 요소를 추가하거나 제거할때 O(1)의 시간 복잡도 소요
- Singly Linked List, Doubly Linked List, Circular Linked List

## 배열과 연결리스트의 차이점

- 메모리 차이
  - 배열은 순차적, 연결리스트는 비순차적
- 배열 요소의 추가와 삭제 → O(n)의 시간 복잡도 / 연결리스트의 추가와 삭제 → O(1)의 시간복잡도

## Singly Linked List

- head에서 tail까지 단방향으로 이어지는 연결 리스트
- 가장 단순한 형태의 연결 리스트

![Singly Linked List](https://miro.medium.com/max/953/1*elJncKhH_P9oQglfI1aVQA.png)

### 요소 찾기

- 데이터 8를 찾는다면 ?
  - head 포인터를 참조해 데이터(4)를 확인하고 찾는 값과 다르다면 next 포인터를 참조한다
  - 6과 8을 비교하고 값이 다르므로 next 포인터 참조
  - 8과 8을 비교하고 값이 같으므로 완료

### 요소 추가

- 3을 6과 8 사이에 넣는다면?
  - 3 데이터를 가지고 있는 요소의 포인터 영역(next)를 8 데이터를 가지고 있는 요소를 가르키도록 설정
  - 6 데이터를 가지고 있는 요소의 포인터 영역(next)를 3 데어터를 가지고 있는 요소를 가르키도록 설정
- 추가를 위한 탐색을 하지 않도록 주의

### 요소 삭제

- 6 데이터를 삭제한다면?
  - 4 데이터를 가지고 있는 요소의 포인터 영역(next)를 8 데이터를 가지고 있는 요소를 가르키도록 설정
  - 6데이터를 가지고 있는 요소를 메모리에서 삭제

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.enxt = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';
    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    displayString = displayStirng.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}
```

## Doubly Linked List

- 양방향으로 이어지는 연결리스트
- Singly Linked List보다 자료구조의 크기가 크다

![Doubly.png](https://macinjune.com/wp-content/uploads/2018/03/doubly_linked_list_1.png)

### 요소추가

- B와 C 사이에 1이라는 값을 갖는 요소 추가
  - B 요소의 포인터 영역(next)이 추가할 요소를 가르키도록 설정
  - 추가할 요소의 포인터 영역(next)이 C 요소를 가르키도록 설정
  - C 요소의 포인터 영역(prev)이 추가할 요소를 가르키도록 설정
  - 추가할 요소의 포인터 영역(prev)이 B 요소를 가르키도록 설정

### 요소 삭제

- B 요소를 삭제
  - A 요소의 포인터 영역(next)이 C 요소를 가르키도록 설정
  - C 요소의 포인터 영역(prev)이 A 요소를 가르키도록 설정
  - B 요소를 메모리에서 삭제

## Circular Linked List

- Singly 혹은 Doubly Linked List에서 tail이 head로 연결되는 연결 리스트
- 메모리 절약
- 원형 큐 등을 만들 때 사용

![Circula.png](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/09/Circular-linked-list-1.png?fit=768%2C400&ssl=1)
