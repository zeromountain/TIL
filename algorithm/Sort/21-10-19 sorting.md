# 정렬
- 배열 내 원소들을 번호 순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘
  - Bubble Sort → O(n<sup>2</sup>)
  - Selection Sort → O(n<sup>2</sup>)
  - Insertion Sort → O(n<sup>2</sup>)
  - Merge Sort → O(nlogn)
  - Quick Sort → O(nlogn)

## Bubble Sort
- 서로 인접한 두 원소를 비교하면서 정렬하는 알고리즘

### Bubble Sort의 동작 과정
- `[2, 1, 3, 5]`의 배열이 있다고 가정 → 배열 내 연속된 요소 비교 (오름차순정렬)
  - 0번 인덱스 요소(2)와 1번 인덱스 요소(1)을 비교 → 2와 1의 위치를 swap
  - 포인터를 오른쪽으로 한칸씩 이동하여 1번 인덱스 요소(2)와 2번 인덱스 요소(3)을 비교 → 순서가 올바르므로 유지
  - 앞의 동작을 오름차순 정렬이 올바를때까지 반복

### Bubble Sort 구현하기
```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};
```

## Selection Sort
- 최소값을 찾아 데이터 영역의 가장 앞으로 이동하는 방식을 반복하여 전체 데이터 영역을 정렬하는 알고리즘
 
 ### Selection Sort 동작 과정
 - `[2, 6, 1, 3]` 배열이 있다고 가정 → 첫번째 인덱스부터 시작해 최소값을 조회 
  - 최소값: 2 → 1번 인덱스 요소와 비교
  - 최소값: 2 → 2번 인덱스 요소와 비교
  - 최소값: 1 → 3번 인덱스 요소와 비교
  - 모든 배열 순회 / 최소값: 1 → 0번 인덱스 요소와 swap
  - swap된 요소 제외하고 최소값 조회하며 앞선 동작을 반복

### Selection Sort 구현하기
```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};
```

## Insertion Sort
- 이미 정렬된 데이터 영역과 비교하면서 자신의 위치를 찾아 요소를 삽입하며 정렬하는 알고리즘

### Insertion Sort 동작 과정
- `[8, 4, 2, 3]`의 배열이 있다고 가정 
  - 1번 인덱스 요소의 값을 삭제하고 임시 변수에 저장 → 공백 발생 ✍️
  - 공백 왼쪽 요소와 임시 변수의 값을 비교 → 순서에 맞게 정렬(공백 채움) 
  - 배열이 정렬될 때까지 반복 수행

### Insertion Sort 구현하기
```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};
let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];

      if (compare(tmp, arr[j])) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};
```

## Merge Sort 
- 하나의 배열을 두 개의 균등한 크기로 분할하고, 부분 정렬하며, 이를 다시 합하면서 전체를 정렬해가는 알고리즘

### Merge Sort 동작 과정
- `[0, 5, 2, 1, 6, 3]`의 배열이 있다고 가정
  - 중간지점으로 설정할 요소 → 1 (`Math.ceil(array.length/2)`)
  - 1을 기준으로 왼쪽 요소(0, 5, 2)를 left 변수에, 오른쪽 요소를 right(1, 6, 3) 변수로 분리
  - left와 right에서도 위와 같이 피봇을 통해 left와 right로 분리(각각의 요소가 남을때 까지)
  - left와 right 요소를 순차적으로 정렬하면서 병합

### Merget Sort 구현하기

```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let m = (arr.length / 2).toFixed(0);
  // → Number.prototype.toFixed(): toFixed() 메서드는 숫자를 고정 소수점 표기법으로 표기해 반환합니다.
  // → 나뉘는 지점
  let left = mergeSort(arr.slice(0, m), compare); // → m을 기점으로 0부터 m 바로 전까지 복사
  let right = mergeSort(arr.slice(m), compare); // → m 이후의 모든 요소 복사

  let i = 0; // → left의 인덱스
  let j = 0; // → right의 인덱스
  let k = 0; // → 정렬된 인덱스

  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++]; // → 모든 요소 divide 후, 왼쪽 요소와 오른쪽 요소를 비교하고 정렬하며 병합
  }
  while (i < left.length) arr[k++] = left[i++]; // → left의 잔여 array 처리
  while (j < right.length) arr[k++] = right[j++]; // → right의 잔여 array 처리

  return arr;
};
```

## Quick Sort
- 특정한 값(pivot)을 깆눈으로 큰 숫자와 작은 숫자를 분할하여 정렬하는 알고리즘
  - pivot: 기준점
  - start: 최초로 비교할 위치
  - target: 비교 대상

### Quick Sort 동작 과정
- `[0, 5, 2, 1, 6, 3]`의 배열이 있다고 가정
  - pivot → 배열의 끝 요소(3)
  - pivot과 start 인덱스부터 순차적으로 비교하면서 pivot보다 작은 요소들을 start 인덱스 요소와 swap → start 1증가
  - 반복문 수행 후 조건문을 만족하면 재귀함수를 실행해 나머지 요소들을 정렬

```js
let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  // → s: start, e: end
  let start = s;
  let pivot = arr[e]; // → input으로 받은 e값이 없다면 배열의 가장 끝 값을 pivot으로 설정

  for (let i = s; i <= e; i++) {
    // → 시작 위치부터 끝 위치까지 비교
    if (compare(pivot, arr[i])) {
      // → 현재의 값이 pivot 보다 작은경우 swap을 실행하고 start를 증가
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e); // → 최종적으로 start와 e의 위치를 변경

  if (start - 1 > s) quickSort(arr, compare, s, start - 1); // → 종료 조건 대신 재귀 실행 조건으로 처리
  if (start + 1 < e) quickSort(arr, compare, start + 1, e); // → 종료 조건 대신 재귀 실행 조건으로 처리
};
```
