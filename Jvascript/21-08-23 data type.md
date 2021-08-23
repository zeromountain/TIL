# Data Type

## Primitive Data Type

**primitive data type**은 변수라는 데이터 공간에 값을 저장할 수 있는 타입을 말한다. 

> reference data type이 아닌 모든 데이터 타입

```js
var name1 = 'Son';
var name2 = name1;
console.log(name1 === name2); // true
name1 = 'Sonny';
console.log(name1 === name2); // false
```
- `name2`에 `name1`을 할당해주어 두 변수는 같은 값을 가지게 된다. 
- `name1`을 `Sonny`라는 값으로 재할당 해주면, `name1`은 `Sonny`라는 값을, `name2`는 `Son`이라는 값을 가지게 된다.

## Reference Data Type

**reference data type**은 메모리 공간에 저장된 값을 변수가 참조하는 데이터 타입을 말한다. 

> 배열
> 
> 객체

```js
var name1 = {name: 'Son'};
var name2 = {name: 'Son'};
console.log(name1 === name2); // false
```

- 같은 객체의 형태이지만, 저장되는 메모리 공간이 다르기 때문에 `name1`과 `name2`의 값이 같지 않은 것을 확인할 수 있다.  

```js
var name1 = {name: 'Son'}
var name2 = name1;
console.log(name1.name === name2.name} // true
name1.name = 'Sonny';
console.log(name1.name === name2.name} // true
```

- 배열과 객체는 값을 참조하는 데이터 타입이다.
- `{name: 'Son'}`이라는 값이 메모리에 저장되어 있고, `name1`과 `name2`가 같은 메모리를 참조하기 때문에 같은 값을 가지게 된다.
- `name1.name`을 통해 메모리에 저장된 `{name: 'Son'}`의 값을 `{name: 'Sonny'}`로 변경했기 때문에, 같은 메모리를 참조하고 있는 `name2.name`도 `Sonny`라는 값을 가지게 된다. 

```js
var kim = {name: 'kim'};

function change(obj) {
  obj = {name: 'park'};
  return obj;
}

var park = {name: 'park'};

console.log(kim); // {name: 'kim'}
console.log(park); // {name: 'park'}
```

- `change`라는 함수를 통해서 `kim`이라는 객체가 변경될거 같지만, `{name: 'park'}`이라는 값은 `{name: 'kim'}`이라는 값과 다른 메모리에 저장되어 있기 때문에 둘은 완전히 다른 데이터이다.
- 위의 코드에서 확인할 수 있듯이, `chage` 함수를 통해서 반환된 값과 기존 `kim` 변수가 참조하는 값이 서로 다른 것을 확인할 수 있다.
