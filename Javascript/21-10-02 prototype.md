# 프로토타입

- 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형을 말합니다.
- JS는 일반적인 객체지향 언어들과 달리 프로토타입을 복사해 새로운 객체를 생성합니다.
  - 프로토타입 기반의 객체지향 언어
  - 자바스크립트의 거의 모든 것이 객체
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

## 객체지향 프로그래밍

- 속성: 객체의 특짇이나 성질 => **data**
  - 추상화: 프로그램에 필요한 속성만 간추려 표현한 것
- 메서드: 객체의 동작이나 속성을 조작

```js
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
  getPerimeter(){
    return 2 * Math.PI * this.radius
  }
  getArea() {
    return Math.PI * this.radius ** 2
  }
}

console.log(circle);
// {radius: 5, getDiameter: f, getPerimeter: f, getArea: f}
console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483
```

## 상속과 프로토타입

- 리터럴 방식으로 생성한 객체는 재사용하기가 어렵기 때문에, 재사용이 필요한 객체의 속성이나 메서드가 있을 경우에 생성자 함수로 객체를 생성하고 프로토타입을 통해서 메서드를 추가해 주는 것이 재사용의 효율성을 높일 수 있습니다.

```js
// 생성자 함수는 속성만 저장합니다.
function Circle(radius) {
  this.radius = radius;
}

// 메서드 생성
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const cirlce2 = new Circle(2);

//
console.log(Circle === Circle.prototype); // false
console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

- `Circle`과 `Circle.prototype`이 같지 않다는 점에 유의합니다.

# 프로토타입 내용 계속 추가 예정

> 참고
> 모던 자바스크립트 Deep Dive
