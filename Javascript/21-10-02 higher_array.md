# 고차원 배열

- 배열 안에 N개 만큼의 배열이 존재하는 객체를 말합니다.
  - 값을 참조하기 위해서 N번 주소를 참조
- 활용: 2/3차원 지도 정보, RGB를 저장하는 2차원 사진 파일

## 2차원 배열 예제

- 2차원 배열은 `array[N][M]`으로 접근하며, 배열 전체를 `push()`, `pop()`에 대한 사용이 가능합니다.

```js
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array);
// [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
```

```js
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
/*
101
102
103
201
202
203
301
302
303
*/

let fruits = [
  ['strawberry', 50],
  ['banana', 100],
  ['ice', 150],
];

for (let i = 0; i < array.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
/*
fruit: strawberry, amount: 50
fruit: banana, amount: 100
fruit: ice, amount: 150
*/
```
