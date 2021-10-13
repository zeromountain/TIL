# 체이닝 해시 테이블
- 별도의 자료구조인 연결리스트를 병합 사용하여 Hash 충돌을 해결한 해시테이블 기반 자료 구조입니다.
  - 해시테이블의 충돌 지점 공간에 연결리스트로 데이터를 연결해 저장
## 구현하기
```js

import { LinkedList } from './LinkedList.mjs';

const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// ChainingHashTable(): 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode(): 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear(): 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while (current);
    }
  }
  return array;
};

// print(): 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do {
        process.stdout.write(` → ${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);
      console.log('');
    }
  }
};

// put(): 데이터 추가
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} → index: ${index}`);

  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }
  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
};

// get(): 데이터 조회
ChainingHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);

  if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
    let current = this.table[index].head;

    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }

  return undefined;
};

// remove(): 데이터 제거
ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;

  if (this.table[index] !== undefined) {
    let current = this.table[index].head;

    do {
      if (current.data.key === key) {
        element = current.data;

        this.table[index].remove(current.data); // → 링크드리스트의 remove

        if (this.table[index].isEmpty()) {
          // → 링크드리스트가 비었는지 확인
          delete this.table[index]; // → 테이블에서 링크드리스트 제거
        }
      }
      current = current.next;
    } while (current);
  }
  this.length--;
  return element;
};

let cht = new ChainingHashTable();
// console.log(cht);

// let ll = new LinkedList();
// ll.append(new Element('Ana', 170));
// console.log(ll);

cht.put('Ana', 172);
cht.put('Donnie', 183);
cht.put('Jamie', 176);
cht.put('Sue', 163);
cht.put('Paul', 190);
// console.log(cht);

// cht.print();
// console.log(cht.getBuffer());

// console.log(cht.get('Ana'));
// console.log(cht.get('Donnie'));
// console.log(cht.get('Kim'));

console.log('get Sue', cht.get('Sue'));
console.log('get Jamie', cht.get('Jamie'));

console.log('remove Sue', cht.remove('Sue'));
console.log('');
cht.print();

console.log('get Jamie', cht.get('Jamie'));
console.log('remove Jamie', cht.remove('Jamie'));
console.log('');
cht.print();

console.log(cht);
```
- [mjs 모듈](https://helloworldjavascript.net/pages/293-module.html)
- getBuffer
    - 테이블 전체를 순회하면서
    - 테이블의 해당 인덱스를 임의의 빈 배열에 추가해 반환
- print
    - 테이블 전체를 순회하면서
    - 해당 인덱스에 값이 있는지 확인하고
    - 값이 존재하는 인덱스의 링크드 리스트를 출력
- put
    - 배열 내 값 존재 여부를 확인하고
    - 존재하지 않으면 → 해당 인덱스에 링크드 리스트생성
    - 존재하면 → 해당 인덱스의 링크드 리스트에 요소 추가
- get
    - 주어진 key 값을 hash 함수를 통해 index를 추출
    - 테이블의 해당 index에 값이 존재한다면
    - 해당 index의 링크드리스트를 순차적으로 탐색하며
    - 링크드리스트의 요소의 key값과 주어진 key값이 같은 데이터를 반환
- remove
    - 주어진 key 값을 hash 함수를 통해 index를 추출
    - 테이블의 index에 데이터가 존재한다면
    - 해당 index의 링크드리스트를 순차적으로 탐색하며
    - 링크드리스트의 노드 요소의 key 값과 주어진 key 값이 같으면
    - 링크드리스트에서 해당 노드 요소 삭제
    - 노드 요소 삭제로 해당 링크드리스트가 빈 링크드리스트라면 링크드리스트도 삭제
    - 반환되는 element는 링크드리스트에 남게되는 요소