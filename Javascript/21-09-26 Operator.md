# 연산자

자바스크립트의 연산자에 대하여 알아봅니다.

- 연산자는 프로그램에서 데이터를 처리하여 결과를 산출할 목적으로 사용되는 문자를 말합니다.
- 연산의 대상 값을 피연산자라고 하며, 피연산자의 개수에 따라서 단항/이항/삼항 연산자의 종류로 나뉩니다.

> ### 단항 연산자
>
> - 부호 연산자: `+` `-`
> - 증감 연산자: `++` `--`
> - 논리 연산자: `!`
> - 비트 연산자: `~`

> ## 이항 연산자
>
> - 산술 연산자: `+` `-` `*` `/` `%`
> - 대입 연산자: `=` `+=` `-=`
> - 비교 연산자: `==` `!=`
> - 논리 연산자: `&&` `||`

> ## 삼항 연산자
>
> - (조건식) ? 참일 경우의 식 : 거짓일 경우의 식

> [연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%ED%91%9C)

## 산술 대입 연산자

### 산술 연산자

- 수학적 계산을 위해 사용됩니다.

```js
// 덧셈
console.log(31 + 10);
// 뺄셈
console.log(31 - 10);
// 곱셈
console.log(31 * 10);
// 나눗셈
console.log(31 / 10);
// 몫
console.log(parseInt(31 / 10));
// 나머지
console.log(31 % 10);
// 거듭제곱
console.log(2 ** 3);
```

### 대입 연산자

- 계산한 결과를 하나의 변수에 저장하기 위해서 사용됩니다.

```js
let num_1 = 123;
let num_2 = 456;
let str_1 = 'hello';
let str_2 = 'world';

let num_3, str_3;

num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);
```

### 복합 대입 연산자

- 산술 연산자로 피연산자를 계산해 결과값을 한번에 대입시켜주는 연산자입니다.

```js
let num = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

result_1 += num; // result_1 = result_1 + num
console.log(result_1); // 41

result_2 -= num;
console.log(result_2); // 21

result_3 *= num;
console.log(result_3); // 310

result_4 /= num;
console.log(result_4); // 3.1

result_5 %= num;
console.log(result_5); // 1
```

### 증가 / 감소 연산자

- 숫자 1만큼 증가 시키거나 감소시킬 때 사용됩니다.
  - 연산자의 위치에 따라 결과가 달라지기 때문에 주의해야합니다.
- 증가연산자: `++(피연산자)` `(피연산자)++`
- 감소연산자: `--(피연산자)` `(피연산자)--`

```js
let num, result;

num = 10;
result = num++;
console.log(result); // 10
console.log(num); // 11

num = 10;
result = ++num;
console.log(result); // 11
console.log(num); // 11

num = 10;
result = num--;
console.log(result); // 10
console.log(num); // 9

num = 10;
result = --num;
console.log(result); // 9
console.log(num); // 9
```

## 비교 논리 연산자

### 비교 연산자

- 좌항과 우항의 피연산자를 비교한 다음 결과 값을 논리적 자료형으로 변환합니다.
- `==`은 단순 값의 같음을 비교하는 동등 비교이고, `===`는 자료형까지 같음을 판단하는 일치 비교 연산자입니다.

![](https://www.notion.so/181f1c45ff0f421ebde4580352b7e689#714510a0f07949dc8256340df1f0b038)

```js
console.log('Z' > 'A'); // true

console.log('Hello' < 'Hi'); // true

console.log('Hello' >= 'Helloo'); // false

console.log('5' <= 10); // true

console.log(true == 1); // true

console.log(false == 0); // true

console.log(true === 1); // false

console.log(false === 0); // false
```

### 논리 연산자

- 좌황과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻습니다.
- 논리 연산자: `&&` `||` `!`

![](https://www.notion.so/181f1c45ff0f421ebde4580352b7e689#5d6d829d0f4f43b9a9c735ba8bf4e59e)

```js
console.log(true || false); // true

console.log(Boolean(0 || false)); // false

console.log(Boolean(123 || false)); // true

console.log(Boolean(123 && 0)); // false

console.log(Boolean(true && 3)); // true

console.log(Boolean(0 && false)); // false

console.log(!false); // true

console.log(!123); // false
```
