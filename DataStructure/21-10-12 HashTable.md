# 해시테이블
- Hash 함수를 사용하여 평균 O(1)의 시간 복잡도로 특정 값을 신속하게 찾는 자료 구조입니다.
  - Bob과 Alice가 같은 hash 값을 가지게 되어 저장 공간에 대한 충돌이 발생
  - 충돌 해결 방법
    - 해시 함수 변경 → 더 큰 숫자의 공간(테이블 크기 확장)과 Modular 산술 값을 이용해 충돌 최소화
    - 자료 구조 확장 → Open Addressing Method(선형 조사법, 이중 해시), Close Addressing Method(체이닝)
## 해시 함수
- 임의의 길이의 데이터를 <span style="color:red; font-weight: 700; ">고정된 길이의 데이터로 매핑</span>하는 함수
  - 압축성 → 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
  - 효율성 → 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
  - 저항성 → 결과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질
    - md5, SHA-2, SHA3 알고리즘
## 해시 테이블 구현하기
### 생성자 함수와 Hash 함수
```js
const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable(): 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE); // → 37개의 공간을 가진 인스턴스 array 생성
  this.length = 0;
}

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // String.prototype.charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();
console.log(ht); // HashTable { table: [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,  ] }

console.log(ht.hashCode('Ana')); // 13
console.log(ht.hashCode('Sue')); // 5
console.log(ht.hashCode('Paul')); // 32
console.log(ht.hashCode('Sonny')); // 17
```

### put(), get(), remove()
```js
const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable(): 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE); // → 37개의 공간을 가진 인스턴스 array 생성
  this.length = 0;
}

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // String.prototype.charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.
  }
  return hash % HASH_SIZE;
};

// put(): 데이터 추가
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} → index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

// get(): 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

// remove(): 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

let ht = new HashTable();

ht.put('Ana', 172);
ht.put('Sue', 163);
ht.put('Paul', 187);
ht.put('Sonny', 170);

console.log(ht.get('Sonny')); // Element { key: 'Sonny', value: 170 }
console.log(ht.remove('Paul')); // Element { key: 'Paul', value: 187 }

console.log(ht); 
/*
HashTable { table: 
   [ ,
     ,
     ,
     ,
     ,
     Element { key: 'Sue', value: 163 },
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     Element { key: 'Ana', value: 172 },
     ,
     ,
     ,
     Element { key: 'Sonny', value: 170 },
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
     ,
      ],
  length: 3 }
*/
```

### clear(), size(), getBuffer(), print()
```js
const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable(): 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE); // → 37개의 공간을 가진 인스턴스 array 생성
  this.length = 0;
}

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // String.prototype.charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.
  }
  return hash % HASH_SIZE;
};

// put(): 데이터 추가
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} → index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

// get(): 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

// remove(): 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

// clear(): 초기화
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
HashTable.prototype.size = function () {
  return this.table.length;
};

// getBuffer(): 데이터 셋 반환
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print(): 데이터 셋 출력
HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' → ' + this.table[i].key + ': ' + this.table[i].value);
    }
  }
};

let ht = new HashTable();

ht.put('Ana', 172); // key: Ana → index: 13
ht.put('Sue', 163); // key: Sue → index: 5
ht.put('Paul', 190); // key: Paul → index: 32

console.log('');
ht.print();
/*
5 → Sue: 163
13 → Ana: 172
32 → Paul: 190
*/
console.log(ht.getBuffer()); 
/*
[
  Element { key: 'Sue', value: 163 },
  Element { key: 'Ana', value: 172 },
  Element { key: 'Paul', value: 190 }
]
*/

console.log(ht.size()); // 37
ht.clear();
console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }
```

### 해시테이블 충동 해결(djb2)

```js
// djb2 hash size
const HASH_SIZE = 1013;
// const HASH_SIZE = 37;

// Element(): key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable(): 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE); // → 37개의 공간을 가진 인스턴스 array 생성
  this.length;
}

// hashCode(): 해시 함수
/* 
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // String.prototype.charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.
  }
  return hash % HASH_SIZE;
};
*/
HashTable.prototype.hashCode = function (key) {
  // djb2 hash function
  let hash = 5381; // seed
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// put(): 데이터 추가
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} → index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

// get(): 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

// remove(): 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

// clear(): 초기화
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
HashTable.prototype.size = function () {
  return this.table.length;
};

// getBuffer(): 데이터 셋 반환
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print(): 데이터 셋 출력
HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' → ' + this.table[i].key + ': ' + this.table[i].value);
    }
  }
};

let ht = new HashTable();

// ht.put('Ana', 172);
console.log(
  "ht.put('Ana', 172)",
  ht.put('Ana', 172)
); 
/*
key: Ana → index: 925
ht.put('Ana', 172) true
*/

// ht.put('Donnie', 183);
console.log(
  "ht.put('Donnie', 183)",
  ht.put('Donnie', 183)
);
/*
key: Donnie → index: 278
ht.put('Donnie', 183) true
*/

// ht.put('Sue', 163);
console.log(
  "ht.put('Sue', 163)",
  ht.put('Sue', 163)
);
/*
key: Sue → index: 502
ht.put('Sue', 163) true
*/

// ht.put('Jamie', 176);
console.log(
  "ht.put('Jamie', 176)",
  ht.put('Jamie', 176)
);
/*
key: Jamie → index: 962
ht.put('Jamie', 176) true
*/

// ht.put('Paul', 190);
console.log(
  "ht.put('Paul', 190)",
  ht.put('Paul', 190)
);
/*
key: Paul → index: 54
ht.put('Paul', 190) true
*/

console.log('');
console.log(ht.size()); // 1013
ht.print();
/*
54 → Paul: 190
278 → Donnie: 183
502 → Sue: 163
925 → Ana: 172
962 → Jamie: 176
*/
```