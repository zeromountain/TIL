# Compiler

타입스크립트 컴파일러는 다음 두 가지 역할을 수행합니다.

- 최신 문법을 브라우저에서 동작할 수 있도록 구버전 문법으로 변환
- 코드의 타입 체크

또한, 이 두가지는 독립적이며, 서로 영향을 미치지 않습니다.

## 타입 오류가 있는 코드의 컴파일

```ts
let t = 'typescript';
t = 123;
```

다음 코드는 문자열 타입을 할당한 변수에  넘버 타입을 재할당 했기 때문에, 타입 오류가 발생합니다.

하지만, `tsc` 를 통해서 컴파일 해보면, 해당 타입스크립트 파일이 자바스크립트 파일로 변환되는 것을 확인할 수 있습니다.

 만약 오류가 있는 코드의 컴파일을 원하지 않는다면, `tsconfig.json`에 `noEmitOnError` 설정을 해줍니다.

 ## 타입 체크

타입스크립트는 컴파일 시에 타입을 체크하므로, 런타임에는 타입을 체크할 수 없습니다.

```ts
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if(shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```
위 코드에서 `Square` `Rectangle` `Shape`는 타입스크립트 문법으로 작성된 타입입니다.

반면에, 조건문의 `instanceof`는 생성자의 프로토타입 속성이 객체의 프로토타입 체인에 존재하는지 여부를 확인한다. 이는 런타임에서 실행 가능한 코드이다.

하지만, `Rectangle`은 컴파일 시에 타입 체크가 가능한 타입스크립트의 문법으로서, 런타임에서의 타입 체크가 불가능합니다.

위의 코드를 런타임 환경에서도 타입을 명확하게 하려면 다음 두 가지 방법으로 타입 정보를 유지할 수 있습니다.

- `Rectangle`의 height 속성의 여부로 구분
```ts
if('height' in shap) {

  return shape.width * shape.height;
}
```
- 타입 정보를 명시적으로 저장하는 태그 기법
```ts
interface Square {
  kind: 'square';
  width: number;
}
interface Rectangle{
  kind: 'rectangle';
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if(shape.kind === 'rectangle') {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```
- interface 타입을 class 타입으로 변환
```ts
class Square {
  constructor(public width:number){}
}
class Rectanlge extends Square {
  constructor(public width: number, public height: number) {
    super(width)
    }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if(shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```

타입을 선언하는 부분에서 `Rectangle`은 타입으로서 참조되고, `instanceof`로 프로토타입을 체크하는 부분에서는 `Rectangle`이 값으로 참조됩니다.

## 타입 연산과 런타임

```ts
function asNumber(val: number | string): number {
  return val as number;
}
```

위 코드의 함수는 `number`와 `string` 타입을 받아서 `number` 타입을 반환하는 함수입니다. 

그래서, 리턴 부분에 `as number`를 사용해서 number 타입으로 정제하는 역할로서 사용했지만, 이는 잘못된 방법입니다.

해당 코드가 자바스크립트 코드로 변환되면 다음과 같습니다.

```js
function asNumber(val) {
  return val
}
```

코드에서도 확인할 수 있듯이, 어떤 타입의 인풋 값이 들어와도 인풋 값 그대로 반환해주는 함수로 변환된 것을 확인할 수 있습니다.

이는 타입스크립트로 작성한 코드와 목적이 분명히 다릅니다.

이러한 값을 정제하는 과정이 필요한 경우 다음과 같이 자바스크립트의 연산 기능을 활용해야 합니다.

```ts
function asNumber(val: number | string): number {
  return typeof(val) === 'string' ? Number(val) : val;
}
```

## 함수의 오버로딩

함수의 오버로딩이란 동일한 이름의 함수에에 매개변수만 다른 함수들을 말합니다.

타입스크립트는 타입과 런타임의 동작이 서로 영향을 받지 않기 때문에, 함수의 오버로딩이 불가능합니다. (타입 수준의 오버로딩만 지원)

```ts
function add(a:number, b:number){return a + b;}
function add(a: string, b:string) {return a + b;}
```
```js
function add (a, b) {
  return a  + b;
}

const three = add(1, 2);
const twelve = add('1', '2');
```