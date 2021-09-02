# 변수

변수는 숫자나 문자와 같은 데이터를 보관하는 저장 공간을 말한다.

## 변수 선언하기

자바스크립트에는 변수를 선언할 수 있도록 도와주는 키워드는 세 가지가 있다.

- `var 변수명`
- `let 변수명`
- `const 변수명`

하지만 최신 자바스크립트 문법에서는 var 키워드의 사용을 지양할 것을 권고한다.

> # var의 문제
> 1️⃣ 호이스팅: 변수의 선언부가 최상단으로 끌어 올려지는 현상
> ```js
> myName = 'Chris';
>
> function logName() {
>  console.log(myName);
> }
>
> logName();
>
> var myName;
> ```
> 2️⃣ function scope: 변수의 유효 범위가 함수 단위의 유효범위를 갖기 때문에, 함수형 프로그래밍 시 에상과 다른 결과가 발생하는 문제
> 
> [function scope trouble shooting](https://mygumi.tistory.com/130)

## 변수 값 초기화하기

- 변수를 선언만 하고 사용하려고 한다면, 변수를 선언한 의미가 없다.

- 변수를 선언만 하면, 변수는 그저 비어 있는 박스 상태이다.

- 이 박스에 포장할 물건을 채워 넣어야한다. ➡️ 이를 값을 할당한다고 표현한다.

- 택배를 포장하듯이 `value`라는 물건을 `variable`이라는 박스에 담고 포장하는 과정이 변수 값을 초기화하는 과정이다.

```js
let name = 'Sonny';
```

➡️ `name`이라는 박스에 `Sonny`라는 물건을 포장

## 변수 키워드의 차이점

||**var**|**let**|**const**|
|:-:|:-:|:-:|:-:|
재선언|⭕️|❌|❌|
재할당|⭕️|⭕️|❌|

### 재선언
```js
var name = 'Sonny'
var name = 'Heungmin'
var name
```

```js
let name = 'Sonny'
let name = 'Yeongsan'
let name
```

- `var` 키워드는 같은 변수에 같은 키워드를 다시 사용할 수 있지만
- `let`이나 `const` 키워드는 같은 변수에 같은 키워드를 다시 사용할 수 없다.

### 재할당
```js
var name = 'Sonny'
name = 'Heungmin' // 😄
```

```js
let name = 'Sonny'
name = 'Yeongsan' // 😄
```

```js
const name = 'Sonny'
name = 'zeromountain' // 😱
```
- `var`와 `let` 키워드는 value 값을 재할당이 가능하나
- `const` 키워드는 value 값을 재할당이 불가능하다
- `const`를 주로 사용하되, 값이 변경될 필요가 있는 변수에는 `let` 키워드를 사용


> # 변수 네이밍
> - 변수명만 봐도 어떤 값을 가지고 있는지 예측할 수 있는 이름으로 작성
> - 변수 시작 부분에 `_`, `-`와 같은 밑줄 사용하는 것 지양
> - 변수 시작 부분에 숫자를 입력하는 것은 오류를 발생시킬 수 있음
> - 변수명은 대소문자를 구분함
> - 카멜 케이스 사용 권장 ➡️ `myAge`와 같이 단어가 변경되는 첫글자를 대문자로 작성
> - 예약어를 변수명으로 사용 금지
> 
> 좋은 네이밍
> ```
> age
> myAge
> init
> initialColor
> finalOutputValue
> audio1
> audio2
> ```
> 잘못된 네이밍
> ```
> 1
> a
> _12
> myage
> var
> Document
> skskskafajfklad
> thisisreallylongstupidvariablename

## 변수 타입
### Number

value가 숫자인 변수 타입을 말한다

```js
let myAge = 31
```

- 정수 외에도 부동 소숫점 숫자도 포함

### String

value가 문자열인 변수 타입을 말한다.

```js
let myName = 'Yeongsan'
```

- 문자열을 변수에 할당할 때에는, `''`나 `""`를 사용해 문자열임을 명시해주어야함
  - `''`나 `""`를 사용하지 않으면 문자를 다른 변수로 입력해 코드 내에서 참조할 변수를 찾게 됨 ➡️ 참조할 변수가 없으면 레퍼런스 오류 발생

### Boolean

value과 참, 거짓인 변수 타입을 말한다.

```js
let male = true
```

```js
let bool = 6 < 3
```

- true, false 뿐만 아니라 진위 여부를 통해서도 `boolean` 타입으로 변수에 값을 할당할 수 있다.

### Array

`[]` 안에 여러 값을 포함하고 있는 형태인 변수 타입을 말한다.

```js
const arr = [1, 2, 3, 4, 5, 6, 7]
const arr1 = ['Son', 'Harry', 'Dele']
```

- 배열 안의 값들이 서로 유사한 요소들로 묶어주는게 좋다

### Object

`{}` 안에 개체의 성질이나 특성을 표현한 형태인 변수 타입을 말한다.

```js
const player = {
  name: 'Son'
  number: 7,
  position: '윙포워드',
  feature: ['fast', 'ambidextrous', 'high scorer']
}
```

```js
player.name
```

- 객체 내부의 요소에 직접 접근 할 수 있어서
- 배열로 표현하기 어려운 변수 초기화에 적합
- 자바스크립트의 거의  모든 것이 객체이다.
