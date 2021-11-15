# 제어문

## 블록문

- 0개 이상의 `statement`를 중괄호로 묶은 코드 블록을 의미합니다.
  - 제어문(조건문, 반복문)이나 함수를 정의할 때 사용됩니다.

```js
// 블록문
{
  var num = 10;
}
// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

## 조건문

- 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정하는 제어문을 말합니다.

### `if ... else ...`

- 알고리즘에서 논리적 비교를 할 때 사용되는 조건식입니다.
- `if` `if else` `else` 키워드를 통해 구성되며 조건식에 맞을 경우 중괄호 `{}` 내에 있는 명령문을 수행합니다.
  - 단, 실행 문장이 단일 문장인 경우에는 중괄호 `{}`를 생략할 수 있습니다.

```js
if (조건식) {
  // 조건식이 참일 경우 실행할 코드
} else {
  // 조건식이 거짓일 경우 실행할 코드
}
```

```js
if(조건식1) {
  // 조건식1이 참일 경우 실행할 코드
} if else(조건식2) {
  // 조건식2가 참일 경우 실행할 코드
} else {
  // 조건식1과 조건식2가 모두 거짓이면 실행할 코드
}
```

```js
let apple_price = 9;

if (apple_price >= 10) {
  console.log('very expensive :(');
} else if (apple_price < 5) {
  console.log('very cheap :)');
} else {
  console.log('nice!');
}
let age = 10;
if (age < 10) console.log('young!');
else console.log('old!');
```

### 3항 연산자

- 3항 연산자를 통해서 `if...else...`를 대체해서 사용할 수 있습니다.
- 3항 연산자: `변수=(조건식) ? 참일 경우 : 거짓일 경우`

```js
let age = 20;
if (age < 19) {
  msg = 'The user is not an adult';
} else {
  msg = 'The user is an adult';
}
console.log(msg);

msg_another = age < 19 ? 'The user is not an adult.' : 'The user is an adult.';
console.log(msg_another);
```

### switch

- 표현식을 평가하여 그 값이 일치하는 case 문을 실행하는 조건문을 말합니다.
- `switch` `case` `break` `default` 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행합니다.
- 일반적으로 하나의 case만 수행되도록 case 구문의 끝에 break 키워드를 사용함으로써 해당 case가 종료됨을 명시합니다.
  - break 키워드를 작성하지 않으면, 다음 case의 코드가 실행됩니다.

```js
switch (표현식) {
  case 표현식1:
    // switch문의 표현식과 표현식 1이 일치하면 실행할 코드
    break;
  case 표현식2:
    // switch문의 표현식과 표현식 2가 일치하면 실행할 코드
    break;
  default:
  // switch 문의 표현식과 일치하는 case가 없는 경우 기본값으로 실행할 코드
}
```

```js
let day_number = 1;
let day = '';

switch (day_number) {
  case 0:
    day = 'Sunday';
    break; // break 코드를 입력하지 않을 경우 다음 코드가 실행되어 day 값이 덮어씌워짐
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wendesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'error';
}

console.log(day);
```

```js
// 폴스루를 사용한 switch 구문
let browser = 'Chrome';
let msg = '';
switch (browser) {
  case 'Explorer':
    msg = 'ActivX installation required.';
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    msg = 'Supported browsers!';
    break;
  default:
    msg = 'Unsupported browsers!';
}
console.log(msg);
```

## 반복문

- 조건식의 평가 결과가 참인 경우 코드 블록을 거짓일 때까지 반복해서 수행하는 제어문을 말합니다.

### for

- 선언문(Init Expression), 조건문(Test Expression), 증감문(Update Expression) 형태로 이루어진 반복문입니다.
- 조건문이 거짓이 되기 전까지 코드 블록을 반복 수행합니다.
- 선언문, 조건문, 증감문 자리에 공백으로 입력이 가능합니다.

```js
for (선언문; 조건문; 증감문) {
  // 조건이 참인 경우 반복 실행할 코드
}
```

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 10; i < 3; i++) {
  console.log(i);
}

let num = 0;
for (; num < 2; ) {
  console.log(num);
  num++;
}
```

```js
for (let i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}
```

#### `for...in...`

- 객체의 `key`와 `value` 형태를 반복하여 수행하는데 최적화된 for문의 유형입니다.
- 첫번째부터 마지막까지 객체의 키 개수만큼 반복합니다.

```js
for (key in object) {
  // 반복 실행할 코드 블록
}
```

```js
const person = { fname: 'John', lname: 'Bob', age: 25 };

let text = '';
for (let x in person) {
  text += person[x];
}
console.log(text);
```

#### `for...of...`

- Collection 객체 자체가 `Symbol.iterator` 속성을 가지고 있어야 동작 가능한 for문의 유형입니다.
  - `iterator`란 연속적으로 값이 나열된 성질을 말합니다.
  - 원시 타입의 변수 값은 `iterator` 성질을 갖지 않습니다.

```js
for (variable of iterable) {
  // code block to be excuted
}
```

```js
let language = 'Javascript';
let text = '';

for (let x of language) {
  text += x;
  console.log(x);
}
```

### while

- 조건문이 참일 때 코드 블록을 반복 수행하는 반복문입니다.
- for문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop 등을 수행할 때 사용됩니다.

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

#### `do...while`

- 조건문을 코드 블록보다 아래로 옮긴 while문의 형태입니다.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);
```

## 반복문 제어

### break

- 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자입니다.
- 다중 반복문일 경우, 가장 안쪽의 반복문을 종료합니다.
- label을 통하여 다중 반복문을 한번에 종료할 수 있습니다.
  - label: 반복문 앞에 콜론`:`과 함께 쓰이는 식별자이나 잘 사용되지는 않습니다.

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
    break;
  }

  // label
  end: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(i + ' * ' + j + ' = ' + i * j);
      break end;
    }
  }
}
```

### continue

- 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 시킨 후 반복문 내 명시된 조건을 판단합니다.
  - 반복문의 증감식으로 실행 흐름을 이동

```js
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;
}

console.log(text); // 012

text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text = text + i;
}

console.log(text); // 012456789
```

> 참조
>
> 모던 자바스크립트 Deep Dive
