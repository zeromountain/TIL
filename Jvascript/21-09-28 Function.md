# 함수

- 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합을 말합니다.
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록 코드입니다.
  - 코드의 재사용성을 높일 수 있습니다.
  - 코드의 신뢰성을 높일 수 있습니다.
  - 코드의 가독성을 높일 수 있습니다.
- 정의부분과 호출 부분으로 구성됩니다.
- 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장합니다.
- `function 함수이름(args1, args2, ...) {statement}`

```js
function add(x, y) {
  return x + y;
}
add(10, 20);
```

## 함수의 정의

- 변수를 초기화하는 것처럼 함수를 초기화하는 과정을 말합니다.

```js
/* 1. 함수 선언식(function declarations)
function  func (arg1, arg2, ... argN) {
  expression
}
*/
function add(x, y) {
  return x + y;
}

/* 2. 함수 표현식(Function Expression)
const func = function (arg1, arg2, ...argN) {
  expression
}
*/
const add = function (x, y) {
  return x + y;
};

/* 3. 화살표 함수(Arrow Function)
const func = (arg1, arg2, ...argN) => expression
*/

const add = (x, y) => x + y;
```

## 함수의 호출

- JS에서 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않습니다.
- ES6에서 도입된 기본값을 통해 `undefined`가 인수로 들어올 경우 값을 초기화할 수 있습니다.

```js
// default value
function print_add(x, y = 10) {
  console.log(x + y);
}
print_add(10, 20, 30); // 30
print_add(10, 20); // 30
print_add(10); // 20
print_add(); // NaN

// dynamic parameters
function print_min() {
  console.log(arguments);
  console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // [Arguments] { '0': 10, '1': 20, '2': 30 } -10
print_min(10, 20); // [Arguments] { '0': 10, '1': 20 } -10
print_min(10); // [Arguments] { '0': 10 } NaN
print_min(); // [Arguments] {} NaN
```

## 함수의 반환

- `return` 후 코드는 수행되지 않으며, default return 값은 undefined 입니다.

```js
function add(x, y) {
  return x + y;
  console.log('return 이후 코드는 실행되지 않습니다.');
}

function dummy() {}

function checkAge(age) {
  return age >= 18 ? true : false;
}

console.log(add(10, 20)); // 30
console.log(dummy()); // undefined
console.log(checkAge(14)); // false
console.log(checkAge(20)); // true
```

## 함수의 형태

### 즉시 실행 함수

- 함수 정의와 동시에 즉시 호출되는 함수를 말합니다.

```js
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// 가명 즉시 실행 함수
(function add(x, y) {
  return x + y;
})(5, 3);
```

### 재귀함수

- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법을 말합니다.
- 재귀함수는 특정 조건이 됐을 때 함수 호출을 종료하도록하는 탈출 조건이 필요합니다.
  - 탈출 조건이 없으면 콜스택에 함수가 쌓여서 스택오버플로우가 발생

```js
function rescursion() {
  // function code
  recursion();
}

recursion();
```

```js
function recursive(num) {
  if (num === 0) return 0; // 탈출 조건
  return num + recursive(num - 1);
}
console.log(recursive(3));

// 2. factorial function
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);
```

### 콜백함수

- 콜백함수란 다른 함수의 매개변수로 전달되어 수행되어지는 함수를 말합니다.
  - 고차 함수는 매개변수를 통해 함수를 받아 호출하는 할수를 말합니다.

```js
function callback_func() {
  console.log('콜백함수입니다.');
}
function higher_order_func(callback) {
  console.log('고차함수입니다.');
  callback();
}
higher_order_func(callback_func);
```

```js
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 7, 3)); // 10
console.log(calculator(sub, 7, 3)); // 4
console.log(calculator(mul, 7, 3)); // 21
console.log(calculator(div, 7, 3)); // 2.3333333333333335
```

### call by \*

#### call by value

- 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향을 미치지 않습니다.
- 원시타입을 매개변수로 넘겼을 때 발생

```js
let a = 1;
let add = function (b) {
  b = b + 1;
}; // callee
add(a); // caller
console.log(a); // 1
```

#### call by reference

- 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받습니다.
- 객체 타입을 매개 변수로 넘겼을 때 발생합니다.

```js
var a = { v: 1 };
var add = function (b) {
  b.v = b.v + 1;
}; // callee
add(a); //caller
console.log(a.v); // 2
```

## 고차함수

- 하나 이상의 함수를 매개 변수로 취하거나 함수를 결과로 반환하는 함수를 말합니다.
- 대표적인 배열 조작 메서드
  - 임의 정렬: `Array.sort(callback function)`
  - 반복 작업: `Array.forEach()`
  - 콜백함수 결과 배열 반환: `Array.map()`
  - 조건을 만족한는 하나의 요소 반환: `Array.find()`
  - 조건을 만족하는 모든 요소를 배열로 반환:`Array.filter()`
  - 누적 결과 값 반환: `Array.reduce()`

### `sort()`

#### 문제와 한계

- 문제점: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬합니다.
- 원인: sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 정렬을 하기때문에 발생합니다.
- 한계점: 대소문자 구분없이 정렬하고 싶지만, 대소문자가 구분되어서 정렬됩니다.

```js
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];

console.log(nums.sort());
/* 
[
  -1,  0, 1, 10, 12,
   2, 20, 3,  4
]
*/
console.log(nums.reverse());
/* 
[
   4, 3, 20,  2, 12,
  10, 1,  0, -1
]
*/
```

```js
let fruits = ['apple', 'Orange', 'orange', 'melon'];

console.log(fruits.sort());
// [ 'Orange', 'apple', 'melon', 'orange' ]

console.log(fruits.reverse());
// [ 'Orange', 'apple', 'melon', 'orange' ]
```

#### 고차 함수를 활용한 정렬

```js
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort());
/*
[
  -1,  0, 1, 10, 12,
   2, 20, 3,  4
]
*/
console.log(nums.reverse());
/*
[
   4, 3, 20,  2, 12,
  10, 1,  0, -1
]
*/

// 오름차순 정렬
let ascending_order = function (x, y) {
  return x - y;
};

// 내림차순 정렬
let descending_order = function (x, y) {
  return y - x;
};

console.log(nums.sort(ascending_order));
/*
[
  -1,  0,  1,  2, 3,
   4, 10, 12, 20
]
*/
console.log(nums.sort(descending_order));
/*
[
  20, 12, 10,  4, 3,
   2,  1,  0, -1
]
*/
```

```js
let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

let descending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};

let fruits = ['apple', 'Orange', 'orange', 'melon'];
console.log(fruits.sort());
// [ 'Orange', 'apple', 'melon', 'orange' ]
console.log(fruits.reverse());
// [ 'orange', 'melon', 'apple', 'Orange' ]
console.log(fruits.sort(ascending_order));
// [ 'apple', 'melon', 'Orange', 'orange' ]
console.log(fruits.sort(descending_order));
// [ 'Orange', 'orange', 'melon', 'apple' ]
```

#### 콜백 함수 공유화

```js
let ascending_order = function (x, y) {
  if (typeof x === 'string') x = x.toUpperCase();
  if (typeof y === 'string') y = y.toUpperCase();

  return x > y ? 1 : -1;
};

let descending_order = function (x, y) {
  if (typeof x === 'string') x = x.toUpperCase();
  if (typeof y === 'string') y = y.toUpperCase();

  return x < y ? 1 : -1;
};

let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order));
/*
[
  -1,  0,  1, 4,
  10, 12, 20
]
*/
console.log(nums.sort(descending_order));
/*
[
  20, 12, 10, 4,
   1,  0, -1
]
*/

let fruits = ['apple', 'Orange', 'orange', 'melon'];
console.log(fruits.sort(ascending_order));
// [ 'apple', 'melon', 'orange', 'Orange' ]
console.log(fruits.sort(descending_order));
// [ 'Orange', 'orange', 'melon', 'apple' ]
```

### 그 외의 고차함수

#### `forEach()`

- 배열 요소 별 콜백 함수 각각에 실행: `Array.forEach(function(item, index, array) {})`
- item: 배열 요소, index: 배열 위치, array: 배열

```js
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
/*
1
2
3
*/

nums.forEach(function (i) {
  console.log(i);
});

/*
1
2
3
*/
```

#### `map()`

- 배열 요소 별 함수 호출 및 결과를 배열로 반환: `Array.map(function(item, index, array){})`
- item: 배열 요소, index: 배열 위치, array: 배열

```js
let nums = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop); // [ 2, 4, 6, 8, 10 ]

let use_map = nums.map(function (item) {
  return item * 2;
});
console.log(use_map); // [ 2, 4, 6, 8, 10 ]
```

#### `find()`

- 콜백 함수의 조건을 만족하는 단 하나의 값을 반환: `Array.find(function(item, index, array) {})`
- item: 배열 요소, index: 배열 위치, array: 배열

```js
let users = [
  { name: 'Soony', age: 31, job: true },
  { name: 'KDB', age: 31, job: true },
  { name: 'Chan', age: 25, job: true },
];

let find_job = users.find(function (user) {
  return user.job;
});
console.log(find_job);
// { name: 'Soony', age: 31, job: true }

let find_age = users.find(function (user) {
  return user.age < 26;
});
console.log(find_age);
// { name: 'Chan', age: 25, job: true }
```

#### `filter()`

- 콜백 함수의 조건을 만족하는 값을 배열로 반환: `Array.filter(function(item, index, array){}`)
- item: 배열 요소, index: 배열 위치, array: 배열

```js
let users = [
  { name: 'Soony', age: 31, job: true },
  { name: 'KDB', age: 31, job: true },
  { name: 'Chan', age: 25, job: true },
];
let filter_job = users.filter(function (user) {
  return user.job;
});
console.log(filter_job);
/*
[
  { name: 'Soony', age: 31, job: true },
  { name: 'KDB', age: 31, job: true },
  { name: 'Chan', age: 25, job: true }
]
*/
let filter_age = users.filter(function (user) {
  return user.age > 30;
});
console.log(filter_age);
/*
[
  { name: 'Soony', age: 31, job: true },
  { name: 'KDB', age: 31, job: true }
]
*/
```

#### `reduce()`

- 요소 별 함수 수행 누적 결과값 반환: `Array.reduce(function(acc, curr, index, array){})`
  - 마지막 curr 요소에 대해서 call_count가 적용되지 않습니다.
- acc: 이전 함수 결과값, curr: 배열 요소, index:배열 위치, array: 배열

```js
let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log('result\tvalue\tindex');
let sum = nums.reduce((acc, cur, i, arr) => {
  console.log(acc, '\t\t', cur, '\t\t', i);
  /*
result	value	index
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
*/
  call_count++;
  return acc + cur;
});

console.log(call_count); // 4
console.log(sum); // 15
```
