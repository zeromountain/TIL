# 선형 조사법 해시테이블
- Hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어 있다면 그 자리에 대신 저장하는 해시 테이블 기반 자료 구조입니다.
  - 4개의 저장 공간을 가진 테이블에
  - 0번과 2번 인덱스에 이미 데이터가 존재한한다고 가정
  - 2개의 데이터를 새로 추가하는데 저장 공간에 있는 데이터들과 같은 해시값을 갖는다면, 두 데이터가 해시값으로 0번과 2번 인덱스를 가르키게 된다면
  - 테이블에서 비어있는 공간을 찾아서 빈 공간에 추가할 데이터를 저장
## 구현하기
```js
const HASH_SIZE = 37; // 충돌 빈도 증가

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable(): 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE); // → 37개의 공간을 가진 인스턴스 array 생성
  this.length = 0;
}

// hashCode(): 해시 함수
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // String.prototype.charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.
  }
  return hash % HASH_SIZE;
};

// put(): 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} → index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;

      return true;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

// get(): 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return undefined;
};

// remove(): 데이터 삭제
LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

// clear(): 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
LinearHashTable.prototype.size = function () {
  return this.table.length;
};

// getBuffer(): 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print(): 데이터 셋 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' → ' + this.table[i].key + ': ' + this.table[i].value);
    }
  }
};

let lh = new LinearHashTable();
console.log(lh);

lh.put('Ana', 172);
lh.put('John', 179);
lh.put('Donnie', 183);
lh.put('Mindy', 190);
lh.put('Paul', 168);
// console.log(lh.put('Paul', 168));
// console.log(lh.put('Sue', 163));
// console.log(lh);
console.log('');

console.log(lh.remove('Ana'));
console.log(lh.get('Ana'));
console.log(lh.remove('Paul'));
console.log(lh.get('Paul'));
console.log(lh.remove('Paul'));
// console.log(lh.get('Kim'));
console.log(lh.size());
console.log('');

lh.print();
console.log(lh);
```