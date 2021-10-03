# 알고리즘 복잡도

## 알고리즘 평가 지표

- 정확성
- 작업량
- **메모리 사용량**
- 최적성
- 효율성
  - **시간 복잡도**
  - 공간 복잡도

## 시간 복잡도

- 입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행 시간을 평가하는 방법을 말합니다.
- 3가지 점근적 표현
  - O 빅오: **최악의 상황**을 고려하여 성능 측정 결과 표현
  - θ 세타: **평균적인 경우**에서의 성능 측정 결과 표현
  - Ω 오메가: **최선의 상황**일 때의 성능 측정 결과 표현

### Big-O Complexity Chart

![빅오 차트](https://miro.medium.com/max/1200/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

```js
// O(1)
function big_o(n) {
  let sum = 0; // 1회
  sum = n * 2; // 1회

  return sum; // 1회
}
```

```js
// O(n)
function big_o(arr, n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i++) {
    // n 회
    sum += arr[i]; // 1회
  }

  return sum; // 1회
}
```

```js
// O(n**2)
function big_o(arr, n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i++) {
    // n회
    for (let j = 0; j < n; j++) {
      // n회
      sum += arr[i][j]; // 1회
    }
  }
  return sum;
}
```

```js
// O(logN)
function big_o(n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i *= 2) {
    // n/2회
    sum += 2;
  }

  return sum; // 1회
}
```

### Data Structure Operations

![](https://i.pinimg.com/originals/db/f8/38/dbf838c7709ac10102ed31a3c5f219fd.jpg)

### Array Sorting Algorithms

![](https://static.packt-cdn.com/products/9781789805789/graphics/assets/e82896f2-626c-45f7-9ce7-54b0be484b54.png)
