# Spread Operator

`Spread Operator`란 데이터의 요소를 펼쳐주는 기능을 한다. 

- 대괄호 제거해주세요.

## How To
```js
var str = 'hello';
console.log(...str); // h e l l o
console.log(str); // hello
```
- 문자를 spread 연산자를 사용하면 문자를 하나씩 해체할 수 있다.

```js
var arr = ['hello', 'world'];
console.log(...arr); // hello world
```

```js
var a = [1, 2, 3];
var b = [4, 5];
var c = [...a, ...b];
```

```js
var a = [1, 2, 3];
var b = a; // 같은 메모리를 참조해 값을 공유함
console.log(a === b) // true
b = [...a] // a 메모리의 내용을 복사해 새로운 b의 메모리 생성해 독립적인 값을 가짐
console.log(a === b) // false : a와 b는 서로 다른 메모리를 참조함
```
- 배열에 spread 연산자를 사용하면, 각 요소 별로 해체할 수 있다. 
- spread 연산자를 사용해 배열의 요소를 합치거나 복사할 수 있다.
  - spread 연산자를 사용해 복사하면 불변성을 지킬 수 있다. 
  - 불변성이란? 값이 변하지 않는 속성을 말한다. ~~즉, a라는 변수의 값이 변해도 b라는 변수의 값이 변하지 않는 상태를 말함.~~


```js
var obj1 = {a: 1, b: '1'};
var obj2 = {c:2, d: '2'};
var obj3 = {...obj1, ...obj2};
var obj4 = {...obj1, e: 3, f: '3'}
var obj5 = {a: 5, ...obj1}
console.log(obj3); // {a:1, b:'1', c:2, d:'2'}
console.log(obj4); // {a:1, b:'1', e: 3, f: '3'}
console.log(obj5); // {a:1, b:'1'}
```

- spread 연산자를 사용해 서로 다른 객체를 합칠 수 있다.
- 서로 다른 객체에서 같은 key를 가지고 있다면, 뒤에 오는 값으로 덮어 씌운다.
- 배열과 객체의 요소에 spread 연산자를 사용할 때, `[]`, `{}` 안에서 사용해야 오류가 발생하지 않는다.
  - `[]`, `{}` 이외에 사용하면, `VM6044:1 Uncaught TypeError: Found non-callable @@iterator at <anonymous>:1:9`이라는 오류가 발생한다.
  - 이는 배열과 객체가 연속적인 데이터의 속성을 가지고 있기 때문이다.
