# 딕셔너리
- key와 value 형태로 다양한 자료형 개체(Entity)를 저장하는 자료 구조입니다.
  - Map

## 딕셔너리 구현하기
### getBuffer(), clear(), size()

```js
function Dictionary(items = {}) {
  this.items = items;
}

// getBuffer(): 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// clear(): 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};

// size()
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

let dic = new Dictionary({ age: 19, name: 'alice' });
console.log(dic); // Dictionary { items: { age: 19, name: 'alice' } }

console.log(dic.getBuffer()); // { age: 19, name: 'alice' }
console.log(dic.size()); // 2
dic.clear();
console.log(dic); // Dictionary { items: {} }
```

### set(), remove(), get(), has()

```js
function Dictionary(items = {}) {
  this.items = items;
}

// getBuffer(): 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// clear(): 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};

// size(): 딕셔너리 크기
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// has(): 개체 존재 여부 확인(key 정보를 배열로 반환)
Dictionary.prototype.has = function (key) {
  // return value in this.items;
  return this.items.hasOwnProperty(key);
};

// set(): 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// get(): 개체(Entity)의 value 반환
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// remove(): 개체(Entity) 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

let dic = new Dictionary();
dic.set('age', 19);
dic.set('name', 'alice');
dic.set('height', 172);
console.log(dic); // // Dictionary { items: { age: 19, name: 'alice', height: 172 } }

dic.remove('age');
console.log(dic); // Dictionary { items: { name: 'alice', height: 172 } }

console.log(dic.has('age')); // false
console.log(dic.has('name')); // true
console.log(dic.get('age')); // undefined
console.log(dic.get('name')); // alice
```

### keys(), values(), each()

```js
function Dictionary(items = {}) {
  this.items = items;
}

// getBuffer(): 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// clear(): 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};

// size(): 딕셔너리 크기
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// has(): 개체 존재 여부 확인(key 정보를 배열로 반환)
Dictionary.prototype.has = function (key) {
  // return value in this.items;
  return this.items.hasOwnProperty(key);
};

// set(): 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// get(): 개체(Entity)의 value 반환
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// remove(): 개체(Entity) 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// keys(): 모든 key 값을 배열 형태로 반환
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// values(): 모든 value 값을 배열 형태로 반환
Dictionary.prototype.values = function () {
  let val = [];
  for (let key in this.items) {
    val.push(this.items[key]);
  }
  return val;
  // return Object.values(this.items);
};

// each(): 모든 개체 요소에 대해 callback 함수 수행(:= forEach)
Dictionary.prototype.each = function (callback) {
  for (let key in this.items) {
    callback(key, this.items[key]);
  }
};

// printDictionary(): 개체 출력 callback
function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dic = new Dictionary();
dic.set('age', 19);
dic.set('name', 'alice');
dic.set('height', 172);
console.log(dic); // Dictionary { items: { age: 19, name: 'alice', height: 172 } }

dic.remove('age');
console.log(dic); // Dictionary { items: { name: 'alice', height: 172 } }

console.log(dic.has('age')); // false
console.log(dic.has('name')); // true
console.log(dic.get('age')); // undefined
console.log(dic.get('name')); // alice

console.log(dic.keys()); // [ 'name', 'height' ]
console.log(dic.values()); // [ 'alice', 172 ]
dic.each(printDictionary);
/*
key: name
value: alice
key: height
value: 172
*/
```