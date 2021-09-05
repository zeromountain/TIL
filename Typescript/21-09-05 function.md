# 함수
## 타입스크립트에서의 함수

타입스크립트에서 함수를 구현할 때, 다음 세 가지의 방법으로 타입을 설정해줘야 한다.

<dl>
  <dt>1️⃣ 함수의 파라미터 타입 👉</dt>
  <dd><pre>function (a: type, b:type ...){}</pre></dd>
</dl>

<dl>
  <dt>2️⃣ 함수의 반환 타입 👉</dt>
  <dd><pre>function(...):type {}</pre></dd>
</dl>

<dl>
  <dt>3️⃣ 함수의 구조 타입 👉</dt>
  <dd>함수의 전체적인 타입을 인터페이스와 같은 방법으로 구조적으로 한번에 타입을 정의하는 방법</dd>
</dl>

## 함수의 기본적인 타입 선언
### 자바스크립트의 함수 선언
```js
function addVariable(a, b){
  return a + b;
}
```

- 자바스크립트는 런타임 환경에서 타입을 결정한다.
- `addVariable`이라는 함수는 두개의 숫자를 더하기 위한 목적으로 구현한 함수라 할지라도 파라미터 a와 b에 어떤 타입의 인자를 넣어줘도 함수가 실행된다.
- 가령, `addVariable(3, 5)`를 실행했을때는 우리가 목적한 바대로 원하는 결과를 얻을 수 있다.
- 반면에, `addVariable('3', 5)`를 실행할 경우에는 문자열 35를 반환한다.

### 타입스크립트의 함수 선언
```ts
function addVariable(a: number, b: number):number {
  return a + b;
}
```

- 타입스크립트는 컴파일 환경에서 타입을 결정한다.
- `addVariable`이라는 함수의 파라미터의 타입을 `number`로 지정해주고 함수의 반환값의 타입도 `number`로 선언했주었기 때문에
- `addVariable` 함수에는 `number` 타입의 인자만을 입력했을 때 실행이 가능하고 함수의 반환값 역시 `number` 타입의 결과물을 반환한다.

## 함수의 인자
### Optional Parameter
``` ts
function printName(firstName: string, lastName?: string): void {
  console.log(firstName);
  console.log(lastName);
}

printName('Steve', 'Jobs');
printName('Yeongsan')
```

- `optional parameter`는 파라미터 뒤에 `?`를 붙여줌으로 해당 파리미터는 입력 받을 수도 있고 입력 받지 않을 수도 있음을 명시한다.
- 즉, `string` 타입의 `lastName`의 인자를 입력해주지 않아도 함수가 실행된다는 것을 의미한다.
- `printName('Yeongsan')`을 실행할 경우, `firstName`의 인자로 들어간 `'Yeongsan'`과 `undefined`가 차례로 출력됨을 확인할 수 있다.
- 이는 `optional parameter`를 사용한 `lastName`의 타입이 `string`이거나 `undefined` 임을 알 수 있다. <br/>(lastName에 마우스만 올려보아도 확인이 가능😅)

### Default Parameter
```ts
function printMessage(message: string = 'default message'): void {
  console.log(message);
}
printMessage();
printMessage('default parameter 대신 출력됩니다')
```

- 기본적으로 `default parameter`에 대한 사용법은 자바스크립트와 같다.
- `printMessage` 함수에 어떤 인자도 입력되지 않을 경우, `default parameter`로 설정한 `default message`라는 문자가 콘솔에 출력된다.

### Rest Parameter
```ts
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2,3));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5));
```

- `rest parameter`의 사용방법 또한 자바스크립트와 같다.
- 다만, `rest parameter`를 사용할 때, 타입 설정에 유의해야한다.
- `...number`라는 `rest parameter`는 number 타입의 배열의 형태이 때문에 `number[]`으로 타입을 명확하게 설정해준다.

