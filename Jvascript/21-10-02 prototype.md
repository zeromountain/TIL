# 프로토타입

- 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형을 말합니다.
- JS는 일반적인 객체지향 언어들과 달리 프로토타입을 복사해 새로운 객체를 생성합니다.
- 일반적인 객체 생성 방식: *속성*은 **생성자**에 의해서 *메서드*는 **프로토타입**에 의해서 정의합니다.

```js
// 생성자에서 속성 정의
function Test(a, b){
	// 속성 정의
}

// 첫 메소드 정의
Test.prototype.x = function () { // ... }

// 두번째 메소드 정의
Test.prototype.y = function() { // ... }

// 객체 생성
let test = new Test(1, 2);
```

```js
// 생성자 속성 정의
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype을 이용한 Person 메서드 정의
Person.prototype.isAdult = function () {
  return this.age > 20;
};

// 객체 생성
const p1 = new Person('Sonny', 31);
const p2 = new Person('Chan', 26);
const p3 = new Person('Sancho', 19);

// 객체 메서드 호출
console.log(p1.isAdult()); // true
console.log(p2.isAdult()); // true
console.log(p3.isAdult()); // false
```
