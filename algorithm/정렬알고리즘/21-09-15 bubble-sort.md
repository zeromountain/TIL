# 버블 정렬

버블 정렬은 배열의 처음 요소부터 끝 요소까지 반복적으로 비교해가면서 배열의 요소들을 정렬하는 알고리즘을 말한다

## 동작 원리

다음과 같은 배열이 주어졌을 때, 버블 정렬 알고리즘의 동작 방식을 살펴보자

`[100, 10, 15, 23, 2, 9, 28, 1, 36]`

1️⃣ 100과 10을 비교한다 👉 10이 100보다 작기 때문에 100과 10의 위치를 바꾼다

2️⃣ 100과 15를 비교한다 👉 15가 100보다 작기 때문에 100과 15의 위치를 바꾼다

3️⃣ 100과 23을 비교한다 👉 23이 100보다 작기 때문에 100과 23의 위치를 바꾼다

...

8️⃣ 100과 36을 비교한다 👉 36이 100보다 작기 때문에 100과 36의 위치를 바꾼다

9️⃣ 더 이상 100과 비교할 요소가 없기 때문에, 다시 첫 요소부터 반복해서 비교하며 순차적으로 정렬한다

## 시간복잡도

앞서 살펴본 바와 같이, 9개의 요소를 가진 배열에서 버블 정렬을 적용했을 때, 첫 요소를 정렬하는데만 8번의 실행이 필요하다 

나머지 요소들을 같은 방식으로 정렬한다면, 정말 많은 실행이 필요하리라 짐작할 수 있다 

버블 정렬은 최악의 경우의 시간복잡도가 O(n<sup>2</sup>)으로 비효율적인 알고리즘으로 간단하지만 프로그램에 적용시키기 어려울 정도의 시간복잡도를 가지고 있다

## 구현
```js
function bubbleSort(input) {
  for(var i = 0; i < input.length - 1; i++){
    for(var j = 0; j < input.length - i - 1; j++) {
      if(input[j] > input[j + 1]) {
        var temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
}

function bubbleSortOptimize(input) {
  for(var i = 0; i < input.length - 1; i++){
    var swapHappened = false;
    for(var j = 0; j < input.length - i - 1; j++) {

      if(input[j] > input[j + 1]) {
        swapHappened = true;
        var temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
    if(!swapHappened) {
      return;
    }
  }
}

var arr = [100, 10, 15,23, 2, 9, 28, 1, 36];
console.log(arr);
bubbleSort(arr);
console.log(arr);
bubbleSortOptimize(arr);
console.log(arr);
```
- `bubbleSort` 함수와 `bublleSortOptimize` 함수의 차이는
  -  `swapHappened`라는 변수에 있다
- `swapHappened`는 요소가 다른 요소의 위치와 변경이 일어났는지 확인한다
  - `swapHappened` 값이 false이면 이미 정렬된 요소라는 의미

