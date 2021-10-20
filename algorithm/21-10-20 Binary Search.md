# 이진탐색
- 자료 구조 기반으로 정렬되어 있는 데이터 안에서 특정 값을 찾는 기법 → O(logn)
  - 반복문을 이용한 탐색
  - 재귀를 이용한 탐색
- 숫자 맞추기 게임(Up & Down)
  - 기준과 같은지 기준점보다 큰지 작은지를 판별해 값을 찾아내는 방식

## 이진탐색 구현하기
### 반복문 이용

- 결과값은 요소의 인덱스를 반환

```js
// binarySearch_loop(): 반복문 기반의 이진 탐색
function binarySearch_loop(arr, n) {
  // → n을 찾아서 n의 인덱스를 반환
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // → 첫인덱스부터 끝 인덱스까지 반복
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] > n) {
      // → 배열의 중간 인덱스의 요소가 n보다 크다면 highIndex의 값을 midIndex의 값보다 1 작게 설정
      highIndex = midIndex - 1;
    } else if (arr[midIndex] < n) {
      // 배열의 중간 인덱스의 요소가 n보다 작다면 highIndex의 값을 midIndex의 값보다 1 크게 설정
      lowIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_loop(array, 0));
console.log(binarySearch_loop(array, 3));
console.log(binarySearch_loop(array, 7));
console.log(binarySearch_loop(array, 10));
```

### 재귀 이용
- 기준점보다 작은 경우 → 감소된 기준점을 인수로 재귀 호출
- 기준점보다 큰 경우 → 증가된 기준점을 인수로 재귀 호출

```js
// binarySearch_recursive(): 재귀함수 기반의 이진 탐색
function binarySearch_recursive(
  arr,
  n,
  lowIndex = 0,
  highIndex = arr.length - 1
) {
  if (highIndex < lowIndex) return -1;

  let midIndex = Math.floor((lowIndex + highIndex) / 2);

  if (arr[midIndex] > n) {
    return binarySearch_recursive(arr, n, lowIndex, midIndex - 1);
  } else if (arr[midIndex] < n) {
    return binarySearch_recursive(arr, n, midIndex + 1, highIndex);
  } else {
    return midIndex;
  }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_recursive(array, 0));
console.log(binarySearch_recursive(array, 3));
console.log(binarySearch_recursive(array, 7));
console.log(binarySearch_recursive(array, 10));

```