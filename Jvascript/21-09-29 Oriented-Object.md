# Number

- JS에서 일반적인 숫자는 64비트 형식의 IEEE-754 표준 기반 형태로 저장되는 자료형입니다.
- 10진수 외에도 16진수, 2진수, 8진수의 다양한 지순 표기법이 사용 가능합니다.
  - 16진수(Hexademical) 표기: 0xFF
  - 8진수(Octal) 표기: 0o71
  - 2진수(Binary) 표기: 0b1101
- 대표 상수 값
  `[MAX | MIN]_VALUE`, `[MAX | MIN]_SAFE_INTEGER`,`[POSITIVE | NEGATIVE]_INFINITY`, `NaN`
- 대표 메서드
  - 문자열로 변환: `Number.toString()`
  - 특정 자리수까지 제한하여 숫자 표현: `Number.toFixed()` `Number.toPrecision()`
  - 타입 확인: `Number.isNaN()` `Number.isFinite()`

## 지수와 진법

### 지수 표기법

- 아주 큰 숫자나 아주 작은 숫자를 표기하기 위해 지수 표기법(e)으로 0의 개수를 대체해서 표현이 가능합니다.
  - e뒤의 숫자값이 0의 개수

```js
// 지수 표기법 (Exponential notation)
let billion_1 = 1000000000; // 10억
let billion_2 = 1e9; // 1 + 0 9개
let us = 1e-6; // micro sec 왼쪽으로 소수점 6번 이동

console.log(billion_1); // 1000000000
console.log(billion_2); // 1000000000
console.log(us); // 0.000001
```

### 진법 표기법

- 진법 표기를 지원하기 위해 ox(16진수), 0o(8진수), 0b(2진수)로 N 진수 표기 가능

```js
// N 진법 (Base N)
console.log(0x0f); // 15
console.log(0o17); // 15
console.log(0b1111); // 15
```

## Number 상수값

- 지수로 표기되는 양수 최대/최소 값: `Number.MAX_VALUE`, `Number.MIN_VALUE`
- 지수로 표기되는 양수 최대/최소 값:`Number.MAX_VALUE`, `Number.MIN_VALUE`
- 무한대 양수/음수 값: `Number.POSITIVE_INFINITY`, `Number.NEGATIVE_INFINITY`
- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형: `Number.NaN`

```js
// 형 변환(Type casting)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_SFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(Number.NaN); //NaN
console.log(NaN); // NaN
```

## 대표 메서드

### 형 변환

- Number => String: `Number.toString()` `String(Number)` `Number + ""`

```js
// 형 변환(Type casting)
let us = 1e-6;
console.log(us.toString()); // 0.000001
console.log(typeof us.toString()); // string
console.log(typeof String(us)); // string
console.log(typeof (Number + '')); // string
```

### 자리수 표현

- 소수의 자리 수 길이 제한: `Number.toFixed(pos)`
- 정수와 소수의 자리 수를 합한 길이로 제한: `Number.toPrecision(pos)`

```js
let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2); // 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // 1.544
console.log((num_1 - num_2).toPrecision(3)); // 1.54
```

### Number 자료형 확인

- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인: `Number.isNaN()`
- 정상적인 유한수인지 확인: `Number.isFinite()`

```js
console.log(!Number.isNaN(0.123)); // true
console.log(!Number.isNaN(123 / 'hello')); // false
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('hello')); // false
```

### 정수와 실수 형 변환

- 정수로 변환하는 방법(N진수로 명시적 변환 가능): `Number.parseInt()`
  실수로 변환하는 방법: `Number.parseFloat()`

```js
console.log(Number.parseInt('125px')); // 125
console.log(Number.parseFloat('1.25em')); // 1.25
console.log(Number.parseInt('1.25em')); // 1
console.log(Number.parseInt('t123')); // NaN
console.log(Number.parseInt('0f', 16)); // 15
```

# String

- 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형입니다.
- JS에서는 글자 하나만 저장할 수 있는 char 자료형이 없습니다.
- JS에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따릅니다.
- 대표 속성과 메서드
  - 문자열 길이: `String.length`
  - 문자열 접근: `String.charAt(index)`, `String.charCodeAt(index)`
  - 문자열 검색: `String.indexOf()`, `String.lastindexOf()`, `String.includes()`, `String.startsWith()`
  - 문자열 변환: `String.toUpperCase()`, `String.toLowerCase()`
  - 문자열 치환: `String.replace()`
  - 문자열 추출: `String.slice()`, `String.substring()`, `String.substr()`
  - 문자열 분할: `String.split()`

## 문자열 기본

### 문자 정의와 표기

- 정의
  - string 정의 방법: `"hello"`(큰따옴표) `'hello'`(작은따옴표) `String()`
  - 문자열과 변수 혼합 표현 방법: `Hello ${변수}`(백틱)

```js
let str_1 = 'hello_1',
  str_2 = String('Hello_2');
let num = 3,
  str_3 = `hello_${num}`;

console.log(str_1); // hello_1
console.log(str_2); // hello_2
console.log(str_3); // hello_3
console.log(`hello_${2 * 2}`); // hello_4
```

- 표기
  - 다양한 문자 표기 방법: Line feed(\n), Carriage return(\r), Backslash(\\), Tab(\t), Unicode(\u{})

```js
console.log('line\nfeed');
/*
line
feed
*/
console.log('carriage\rreturn');
/*
carriage
return
*/
console.log('backslash \\'); // backslash \
console.log('tab\ttab'); // tab	tab
console.log('smile: \u{1F60D}'); // smile: 😍
```

### 문자열의 길이와 접근

- 문자열 길이
  - 문자열 길이 확인 방법: String.length

```js
let str = `hello
world
!!!`;
let newline_string = 'hello\nworld\n!!!';

console.log(str.length); // 15
console.log(newline_string.length); // 15
```

- 문자 접근
  - 문자열 내 개별 문자 접근 방법: `String.charAt(index)`, `String.charCodeAt(index)`, `String[index]`

```js
let str = 'hello, world!!!';

console.log(str.charAt(1)); // e
console.log(str.charCodeAt(1)); // 101 e의 ASCII 코드 값
console.log(str[0]); // h
```

### 문자열의 검색과 변환

- 문자열의 검색
  - 문자열 검색(index): `String.indexOf(substr, pos)`, `String.lastIndexOf(substr, pos)`
  - 문자열 검색(bool): `String.includes(substr, pos)`, `String.startsWith(substr, pos)`, `String.endsWith(substr, pos)`

```js
let text = 'hello, world!!!';

console.log(text.indexOf('1')); // 2
console.log(text.indexOf('1', 3)); // 3
console.log(text.lastIndexOf('1')); // 10

console.log(text.includes('HeLlo')); // false
console.log(text.startsWith('ello', 1)); // true
console.log(text.endsWith('world')); // false
```

- 문자열 대소문자 변환
  - 대소문자 변환: `String.toUppserCase()` `String.toLowerCase()`

```js
let str = 'HeLlO!!!';
console.log(str.toUpperCase()); // HELLO!!!
console.log(str.toLowerCase()); // hello!!!
```

### 문자열 치환

- 처음 만나는 요소 문자열 치환(치환된 문자열 반환): `String.replace(origin_str, change_str)`
- 정규 표현식 활용 문자열 치환: 치환 문자열에 정규 표현식을 기입

```js
let text = 'helLo, world!!!';
let changed_text = '';

changed_text = text.replace('world', 'earth');

console.log(changed_text); // hello, earth!!!
console.log(text); // hello, world!!!

console.log(text.replace('!', '?')); // hello, world?!!
console.log(text.replace('l', 'i')); // heilo, world!!!

console.log(text.replace(/l/g, 'i')); // heiLo, worid!!!
console.log(text.replace(/l/gi, 'i')); // heiio, worid!!!
console.log(text.replace(/!/g, '?')); // hello, world???
```

### 문자열 추출

- 위치 기반 문자열 추출: `String.slice(start, end)` `String.substring(start, end)
- 길이 기반 문자열 추출: `String.substr(start, length)`

```js
let text = 'hello, world!!!';

console.log(text.slice(0, 5)); // hello
console.log(text.slice(4, 5)); // o
console.log(text.slice(4)); // o, world!!!
console.log(text.slice(-4)); // d!!!

console.log(text.slice(2, 6)); // llo,
console.log(text.slice(6, 2)); //
console.log(text.substring(2, 6)); // llo,
console.log(text.substring(6, 2)); // llo,

console.log(text.substr(2, 6)); // llo, w
console.log(text.substr(-5, 3)); // ld!
```

### 문자열 분할

- 배열로 문자열 분할: `String.split(Separator, limit)`

```js
let fruits = 'apple banana melon';

result = fruits.split(' ');
console.log(result); // [ 'apple', 'banana', 'melon' ]

console.log(result[0]); // apple
console.log(result[1]); // banana
console.log(result[2]); // melon

let text = 'hello';

result = text.split('');
console.log(result); //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(result.length); // 5
console.log(result[0]); // h

result = text.split('', 3);
console.log(result); // [ 'h', 'e', 'l' ]
console.log(result.length); // 3
```

# Array

- 여러 개체(Entity) 값을 **순차적으로** 나열한 자료 구조를 말합니다.
- 배열 내 값을 요소(elements)라고 하며, 배열 요소는 index로 접근이 가능합니다.
- 대표 속성과 메서드
  - 배열 크기 및 배열 여부 확인
    - 길이: `Array.length`
    - 배열 여부: `Array.isArray()`
  - 배열 추가 및 삭제
    - `Array.push()`
    - `Array.pop()`
    - `Array.shift()`
    - `Array.unshift()`
    - `Array.splice()`
    - `Array.slice()`
  - 배열 탐색
    - `Array.indexOf()`
    - `Array.lsatIndexOf()`
    - `Array.includes()`
  - 배열 변형(callback 미사용)
    - `Array.sort()`
    - `Array.reverse()`
    - `Array.join()`

## 배열 선언/접근/속성

- 선언: `new Array()` 혹은 `[]`를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화가 가능합니다.
- 접근 방법: `Array[index]`를 통해 index 통하여 O(1)의 시간복잡도로 접근할 수 있습니다.
- 배열 속성: `Array.length`를 통해 배열 요소의 개수 확인이 가능합니다.

```js
// 값 없이 초기화
let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); // [ <10 empty items> ]
console.log(arr_2); // []

// 값을 가진 초기화
let fruits = ['apple', 'orange', 'melon'];
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // melon

// 배열 내 요소 변경
fruits[1] = 'kiwi';
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ]
```

## 배열의 실체

- JS에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체입니다.
- 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)을 말합니다.

```js
let nums = [];

nums.push('one');
nums.push('two');
console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two' ]

nums['once'] = 'once';
nums['twice'] = 'twice';
console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]

console.log(Object.getOwnPropertyDescriptors(nums));
/*
{
  '0': {
    value: 'one',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: 'two',
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  once: {
    value: 'once',
    writable: true,
    enumerable: true,
    configurable: true
  },
  twice: {
    value: 'twice',
    writable: true,
    enumerable: true,
    configurable: true
  }
} 
*/
```

## 배열 타입 확인 및 요소 삭제

### 배열 타입 확인

- 배열 타입 확인 방법: `Array.isArray(value)`

```js
let num = 123.456;
let str = 'Here I am!';
let fruits = ['apple', 'orange', 'melon'];

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true
```

### 배열 요소 삭제

- 배열 일부 요소 삭제: `delete array[index]`
  - 요소를 삭제해도 요소의 공간을 그대로 남아 배열의 크기는 삭제 전,후가 같습니다.

```js
let fruits = ['apple', 'orange', 'melon'];

console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3

delete fruits[1];
console.log(fruits); //[ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); // 3
```

## 배열의 조작

### 배열의 추가와 삭제(LIFO - Back)

- 배열 추가: `Array.push(element)`, 배열 삭제: `Array.pop()`

```js
let fruits = ['apple', 'orange', 'melon'];

ret = fruits.push('watermelon');
console.log(fruits); // [ 'apple', 'orange', 'melon', 'watermelon' ]
console.log(ret); // 4
ret = fruits.pop();
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(ret); // watermelon
```

### 배열 추가와 삭제(LIFO - Front)

- 배열 추가: Array.unshift(element), 배열 삭제: Array.shift()

```js
let fruits = ['apple', 'orange', 'melon'];

ret = fruits.shift();
console.log(fruits); //[ 'orange', 'melon' ]
console.log(ret); //apple
ret = fruits.unshift('watermelon');
console.log(fruits); // [ 'watermelon', 'orange', 'melon' ]
console.log(ret); // 3
```

### index를 이용한 배열 삭제 및 변경

- 배열 요소 삭제 및 변경: `Array.splice(index,[,deleteCount, el1, el2, ..., elN])`
- 배열 요소 삭제: `Array.slice([start], [end])`

```js
let fruits = ['apple', 'orange', 'melon'];

console.log(fruits.splice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple' ]

fruits = ['apple', 'orange', 'melon', 'strawberry'];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]

console.log(fruits.splice(1, 1, 'mangon', 'kiwi')); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mangon', 'kiwi', 'strawberry' ]
```

```js
let fruits = ['apple', 'orange', 'melon'];

console.log(fruits.slice(1)); //[ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]

console.log(fruits.slice(1, 2)); // [ 'orange' ]
console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]
```

### 배열의 병합

- 다중 배열 병합: `Array.concat(arg1, arg2, ...)`

```js
let fruits = ['apple', 'orange', 'melon'];

console.log(fruits.concat('strawberry'));
// [ 'apple', 'orange', 'melon', 'strawberry' ]

console.log(fruits.concat(['cherry', 'banana']));
// [ 'apple', 'orange', 'melon', 'cherry', 'banana' ]

console.log(fruits.concat(['cherry', 'banana'], 'mango'));
// [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]
```

### 배열의 반복문

- 다양한 반복문 문법을 통해 배열 요소에 접근이 가능합니다.
- 반복문 문법: `for...length`(index 접근), `for...of`(element 접근), `for...in`(key 접근)

```js
let fruits = ['apple', 'orange', 'melon'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  /*
	apple
	orange
	melon
	*/
}

for (let fruit of fruits) {
  console.log(fruit);
  /*
		apple
		orange
		melon
  */
}

for (let key in fruits) {
  console.log(fruits[key]);
  /*
		apple
		orange
		melon
	*/
}
```

## 배열의 탐색과 변형

### 배열의 탐색

- index 탐색(앞에서부터): `Array.indexOf(item, from)`
- index 탐색(뒤에서부터): `Array.lastIndexOf(item, from)`
- 값 포함 여부 확인: `Array.includes(item, from)`

```js
let fruits = ['apple', 'orange', 'banana', 'orange', 'melon'];

console.log(fruits.indexOf('orange')); // 1
console.log(fruits.indexOf('Orange')); // -1
console.log(fruits.indexOf('orange', 2)); // 3

console.log(fruits.lastIndexOf('orange')); // 3
console.log(fruits.lastIndexOf('orange', -3)); // 1
console.log(fruits.lastIndexOf('orange', 0)); // -1

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('Banana')); // false
console.log(fruits.includes(0)); // false
```

### 배열의 변형

- 배열 정렬
  - 내림차순 정렬: `Array.sort()`
  - 오름차순 정렬: `Array.reverse()`

```js
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // [ -1, 0, 1, 2, 4, 5 ]
console.log(nums.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

let fruits = ['apple', 'orange', 'banana', 'melon'];
console.log(fruits.sort()); // [ 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits.reverse()); // [ 'orange', 'melon', 'banana', 'apple' ]
```

- 배열 반환
  - 배열 값을 문자열로 변환: `Array.join(separator)`

```js
let fruits = ['apple', 'orange', 'banana', 'melon'];
let str = fruits.join();
console.log(str); // apple,orange,banana,melon

let str_separator = fruits.join(';');
console.log(str_separator); // apple;orange;banana;melon
let result = str.split(';');
console.log(result); // [ 'apple,orange,banana,melon' ]
```
