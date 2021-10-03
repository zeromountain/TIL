# 순열과 조합

## 경우의 수

- 어떤 사건이나 일이 일어날 수 있는 경우의 가짓수를 수로 표현한 것을 말합니다.
- 일생 생활에서 경우의 수
  - 주사위: 던지는 결과 → 1~6 사이의 숫자이므로 경우의 수 👉 6
  - 윷: 던지는 결과 → 도개걸윷모이므로 경우의 수 👉 5
  - 가위바위보: 게임 결과 → 가위바위보 중에 하나를 내는 경우의 수 👉 3
  - 동전: 던지는 결과 → 앞면과 뒷면의 경우의 수 👉 2
- 완전 탐색으로 경우의 수를 푸는 알고리즘
  - 순열: 서로 다른 n개의 원소 중에서 r을 _중복 없이_ 골라 **순서에 상관 있게** 나열하는 경우의 수(<sub>n</sub>P<sub>r</sub>)
  - 조합: 서로 다른 n개의 원소 중에서 r을 _중복 없이_ 골라 **순서에 상관 없이** 나열하는 경우의 수(<sub>n</sub>C<sub>r</sub>)
  - 중복 순열: 서로 다른 n개의 원소 중에서 r개를 _중복 있게_ 골라 **순서에 상관 있게** 나열하는 경우의 수 (<sub>n</sub>H)

## 순열

- 서로 다른 n개의 원소 중에서 r을 _중복 없이_ 골라 **순서에 상관 있게** 나열하는 경우의 수(<sub>n</sub>P<sub>r</sub>)
- A,B,C 3개의 알파벳으로 단어를 만드는 경우의 수
  - A B C
  - A C B
  - B A C
  - B C A
  - C A B
  - C B A

```js
let input = ['a', 'b', 'c'];
let count = 0;

function permutation(arr) {
  // i => 첫번째 위치시킬 요소
  for (let i = 0; i < arr.length; i++) {
    // j => 두번째 위치시킬 요소
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      // k => 세번째 위치시킬 요소
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
/*
a b c
a c b
b a c
b c a
c a b
c b a
*/
console.log(count); // 6
```

```js
let input = ['a', 'b', 'c'];
let count = 0;

function permutation(arr, s, r) {
  if (s == r) {
    count++;
    console.log(arr.join(' '));
    return;
  }

  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 복귀
  }
}

permutation(input, 0, 2);
console.log(count);
```

## 조합

- 서로 다른 n개의 원소 중에서 r을 _중복 없이_ 골라 **순서에 상관 없이** 나열하는 경우의 수(<sub>n</sub>C<sub>r</sub>)
- 4개의 숫자 카드에서 2개를 뽑는 경우

```js
let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
/*
1 2
1 3
1 4
2 3
2 4
3 4
*/
console.log(count); // 6
```

```js
let input = [1, 2, 3, 4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(input, output, 0, 0, 2);
console.log(count);
```

## 점화식

- 점화식이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타내는 관계식을 말합니다.
- 대표적인 점화식
  - 등차수열: F(n) = F(n-1) + a
  - 등비수열: F(n) = F(n-1) \* a
  - 팩토리얼: F(n) = F(n-1) \* n
  - 피보나치 수열: F(n) = F(n-1) + F(n-2)

### 등차수열

```js
let result;
function forloop(s, t, number) {
  let acc = 0;
  for (let i = 0; i <= number; i++) {
    if (i == 1) acc += s;
    else acc += t;
    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
/*
1 3
2 5
3 7
4 9
5 11
11
*/
```

```js
let result;

function recursive(s, t, number) {
  if (number == 1) return s;

  return recursive(s, t, number - 1) + t;
}

/**
 * number: 5 => recursive(s, t, 4) + 2
 * number: 4 => recursive(s, t, 3) + 2
 * number: 3 => recursive(s, t, 2) + 2
 * number: 2 => recursive(s, t, 1) + 2
 * number: 1 => 3
 */

result = recursive(3, 2, 5);
console.log(result);
```

### 등비수열

```js
let result;

function forloop(s, t, number) {
  let acc = 1;

  for (let i = 1; i <= number; i++) {
    if (i == 1) acc *= s;
    else acc *= t;

    console.log(i, acc);
  }

  return acc;
}

result = forloop(3, 2, 5);
/*
1 3
2 6
3 12
4 24
5 48
48
*/
console.log(result);
```

```js
let result;
function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }

  return recursive(s, t, number - 1) * t;
}

result = recursive(3, 2, 5);
/*
 * number: 5 => recursive(s, t, 4) * 2
 * number: 4 => recursive(s, t, 3) * 2
 * number: 3 => recursive(s, t, 2) * 2
 * number: 2 => recursive(s, t, 1) * 2
 * number: 1 => 2
 */
console.log(result); // 48
```

### 팩토리얼

```js
let result;

function recursive(number) {
  if (number == 1) return 1;

  return recursive(number - 1) * number;
}

result = recursive(5);
console.log(result); // 120
```

### 피보나치

```js
let result;
function recursive(number) {
  if (number == 1 || number == 0) return number;

  return recursive(number - 1) + recursive(number - 2);
}

result = recursive(5);
console.log(result); // 5
```
