# 자료형

자바스크립트의 자료형에 대해서 알아봅니다.

## 자료형의 종류

자바스크립트의 자료형은 크게 원시타입과 객체(레퍼런스)타입으로 구분됩니다.

### 원시타입

- 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값을 보관합니다.
- 원시타입 변수의 메모리 영역에 직접 접근합니다.
- boolean, null, undefined, number, string, symbol

#### boolean

- 논리 값을 표현하는 자료형입니다.
- 참은 `true` 거짓은 `false`로 표현합니다.
- 주로 조건문과 같은 동작을 판단하는 기준으로 사용됩니다.

```js
let name_check = true;
let age_check = false;

let value_check = 10 > 3;
console.log(value_check); // true
```

#### null

- 값이 비어 있다는 의미로 사용되는 자료형입니다.
  - 변수에 값이 없다는 것을 의도적으로 명시할 경우에 사용합니다.
- 존재하지 않는, 비어있는, 알수없는 값을 표현하는데 사용합니다.
- 자바스크립트 하위 버전과 호환성 문제로 타입이 object로 설정되어 있습니다.

```js
let name = 'SON';

name = null; // SON이라는 값을 의도적으로 제거
```

#### undefined

- 값이 할당되어 있지 않은 상태를 표현하는 자료형입니다.
- 변수 선언 후 값을 초기화(최초 할당) 하지 않는다면, `undefined`가 자동으로 할당됩니다.

```js
let name; // 값을 초기화하지 않았으므로 undefined가 할당

name = 'SON';
```

#### number

- 정수, 부동소수점 숫자를 표현하는 자료형입니다.
  - 사칙연산이 가능합니다.
  - 소숫점의 연산은 변수의 메모리 공간의 한계로 최적화 연산을 하기 때문에 결과에 오차가 발생할 수 있습니다.
- Infinity, NaN과 같은 특수 숫자 값이 존재합니다.
  - Infinity: 양의 무한대
  - -Infinity: 음의 무한대
  - NaN: 산술 연산 불가 상태 => 숫자형이 아닌 상태(Not a Number)
- 2<sup>53</sup>-1 보다 큰 값을 사용할 수 없으며, 더 큰 숫자를 다루는 경우 bigint라는 자료형을 사용합니다.

```js
let num_1 = 123.9;
let num_2 = 123.4556;
let num_3 = 1 / 0;
let num_4 = 123456n;
console.log(num_1 - num_2); // 0.4444000000000017;
console.log((num_1 - num_2).toFixed(3)); // 0.444
console.log(num_3); // Infinity
console.log(num_1 * 'hello'); // NaN
console.log(typeof num_4); // bigint
```

#### string

- 문자와 문자열을 표현하는 자료형입니다.
- 자바스크립트에서 문자열은 3가지로 문자열을 표현합니다.
  - 큰따옴표: `""`
  - 작은따옴표: `''`
  - 백틱: ``
  - 큰따옴표와 작은따옴표는 개행 처리를 할 경우 이스케이프 처리를 해야합니다.
  - 백틱은 개행 처리가 가능합니다.

```js
let str_1 = 'hello';
let str_2 = 'hello';

let num = 3;

// 문자열과 변수의 병합
let str_3 = 'hello ' + num;
let str_4 = `hello ${num}`;
console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
```

#### symbol

- 다른 값과 중복되지 않는 고유한 값을 나타냅니다.
- 객체의 유일한 프로퍼티 키를 만들기 위해 사용합니다.

```js
let alias = Symbol('alias');
console.log(typeof alias); // symbol

let obj = {};

obj[alias] = 'Sonny';
console.log(obj[alias]); // Sonny
```

> typeof
>
> - 인수의 자료형을 반환하는 연산자 함수입니다.
> - `typeof x`와 `typeof(x)`로 문법이 지원됩니다.

```js
let str = 'hello, world!';
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(true);
console.log(typeof 'helo');
console.log(typeof Symbol('uid'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);
```

### 객체(레퍼런스)타입

- 메모리의 주소값만 변수에 저장하므로 크기가 정해져 있지 않습니다.
- 변수에 저장된 메모리의 주소를 통해서 값에 접근합니다.
- object, array, function

#### object

- 다수의 원시 자료형을 포함하거나 복잡한 개체를 표현할 수 있는 자료형입니다.
  - 프로퍼티로 원시타입 자료형과 레퍼런스타입 자료형을 사용할 수 있습니다.
  - 프로퍼티: 객체의 상태를 나타내는 값
  - 메서드: 프로퍼티를 참조하고 조작할 수 있는 객체의 동작을 나타내는 함수
- key와 value의 쌍으로 표현합니다.
  - `dot-notation`과 `square-notation` 방법을 통해서 객체의 값에 접근할 수 있습니다.
- 객체의 실제 데이터 접근은 레퍼런스 값인 메모리 주소를 참조합니다.
- 개체의 추가는 `obj.key = value` 개체의 삭제는 `delete obj.key`를 통해서 가능합니다.

```js
let user = {
  name: 'SON',
  age: 31,
};

console.log(user.name);
console.log(user.age);
console.log(user['name']);
console.log(user['age']);
console.log(typeof user); // object
console.log(typeof user.name); // string
console.log(typeof user.age); // number

user.height = 170;
delete user.age;

console.log(user.height);
console.log(user.age);
```

#### 객체 복사의 문제점

- 객체의 값을 복사할 때는 대상 전체가 아닌 객체 내 주소 값만 복사되는 문제가 발생합니다.
- 이와 같은 문제를 해결하는 방법으로는 얕은 복사와, 깊은 복사가 있습니다.

```js
let user = {
  name: 'SON',
  age: 31,
};

let admin = user;
console.log(admin);

admin.name = 'park';
console.log(admin.name);
console.log(user.name);
```

#### 얕은 복사

1. `for...in...`

```js
let user = {
  name: 'SON',
  age: 31,
};

let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

admin.name = 'KDB';

console.log(admin.name); // KDB
consoel.log(user.name); // SON
```

2. `Object.assign()`

```js
let user = {
  name: 'SON',
  age: 31,
};

let admin = Object.assign({}, user);

admin.name = 'KDB';
user.age = 30;

console.log(admin.name); // KDB
console.log(user.name); // SON
console.log(admin.age); // 31
console.log(user.age); // 30
```

3. `spread operator`

```js
let user = {
  name: 'SON',
  age: 31,
};

let admin = { ...user };

admin.name = 'KDB';
user.age = 30;

console.log(admin.name); // KDB
console.log(user.name); // SON
console.log(admin.age); // 31
console.log(user.age); // 30
```

- 객체 내에 또 다른 객체가 있는 경우에 안쪽의 객체가 복사가 되지 않는 문제가 있습니다.

#### 깊은 복사

1. 재귀함수

```js
let user = {
  name: 'SON',
  age: 31,
  sizes: { height: 170, weight: 68 },
};

function copyObj(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') result[key] = copyObj(obj[key]);
    else result[key] = obj[key];
  }
  return result;
}
let admin = copyObj(user);

admin.sizes.weight++;

console.log(admin.sizes.weight); // 69
console.log(user.sizes.weight); // 68
```

2. JSON

```js
let user = {
  name: 'SON',
  age: 31,
  sizes: {
    height: 170,
    weight: 68,
  },
};

let admin = JSON.parse(JSON.stringify(user));

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.weight); // 69
console.log(admin.sizes.height); // 169
console.log(user.sizes.weight); // 68
console.log(user.sizes.height); // 170
```

## 형 변환

- 자바스크립트는 동적 타입 언어로 변수의 자료형을 명시적으로 선언할 필요가 없습니다.
- 연산자로 인한 계산이나 변수에 전달되는 값은 런타임 때, 자동으로 암묵적 형 변환을 수행합니다.
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 명시적 형 변환을 수행합니다.

### String 형 변환 예제

```js
console.log(typeof String(123)); // 123
console.log(typeof String(1 / 0)); // Infinity
console.log(typeof String(-1 / 0)); // -Infinity
console.log(typeof String(NaN)); // NaN
console.log(typeof String(true)); // true
console.log(typeof String(false)); // false
console.log(typeof String(undefined)); // undefined
console.log(typeof String(null)); // null
console.log(typeof String('haha')); // haha
```

### Number 형 변환 예제

```js
// 모두 자료형은 number =>  강제적 형변환
console.log(typeof Number('')); // 0
console.log(typeof Number('123')); // 123
console.log(typeof Number('hello')); // NaN
console.log(typeof Number('123hello')); // NaN
console.log(typeof Number(true)); // 1
console.log(typeof Number(false)); // 0
console.log(typeof Number(null)); // 0
console.log(typeof Number(undefined)); // NaN

console.log(parseInt('123.123')); // 123
console.log(parseFloat('123.123')); // 123.123
```

### Boolean 형 변환 예제

```js
console.log(Boolean('')); // false
console.log(Boolean('123')); // true
console.log(Boolean('hello')); // true
console.log(Boolean('0')); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```
