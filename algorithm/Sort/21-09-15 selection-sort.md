# 선택 정렬

선택 정렬은 선형 탐색이라는 탐색 알고리즘을 응용해 배열의 요소를 정렬 시키는 알고리즘을 말한다

## 동작 원리

다음 배열이 주어졌을 때, 선택 정렬 알고리즘의 동작 방식을 살펴보자

`[10, 15, 23, 2, 9, 28, 1, 36]`

1️⃣ 10과 15 중 어느 값이 최소값인지 비교

2️⃣ 10과 23 중 어느 값이 최소값인지 비교

3️⃣ 10과 2 중 어느 값이 최소값인지 비교 👉 최소값 2로 변경

4️⃣ 2와 9 중 어느 값이 최소값인지 비교

5️⃣ 2와 28 중 어느 값이 최소값인지 비교

6️⃣ 2와 1 중 어느 값이 최소값인지 비교 👉 최소값 1로 변경

7️⃣ 1과 36 중 어느 값이 최소값인지 비교 

8️⃣ 더 이상 최소값을 비교할 대상이 없으므로 최소값 1과 첫 요소 10의 자리를 바꾼다

9️⃣ 정렬된 1을 제외한 나머지 요소에 같은 작업을 반복한다

## 시간복잡도

선택정렬 역시 선형 탐색을 위해서 사용되는 반복문과 정렬을 위한 반복문, 이중으로 반복문이 사용되므로 시간복잡도는 O(n<sup>2</sup>)이 된다

요소의 개수가 작은 배열에서는 좋은 효율을 발휘하지만, 요소의 개수가 증가하면 버블 정렬보다 조금 나아진 성능을 제공할 뿐이다

## 구현
```js
function selectionSort(input) {
  for(var wall = 0; wall < input.length - 1; wall++) {

    var indexOfSmallest = wall;

    for(var j = wall + 1; j < input.length; j++) {

      if(input[indexOfSmallest] > input[j]){
        indexOfSmallest = j;
      }
    }

    var temp = input[wall];
    input[wall] = input[indexOfSmallest];
    input[indexOfSmallest] = temp;
  }
}

var arr = [10, 15, 23, 2, 9, 28, 1, 36];
console.log(arr);
selectionSort(arr);
console.log(arr); 
```