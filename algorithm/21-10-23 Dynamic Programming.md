# 동적계획법
- 메모이제이션 기법으로 중복 연산을 방지하며, 작은 부분 문제로 큰 문제를 해결하며 값을 도출하는 알고리즘 설계 기법
  - 부분 문제는 중복되며, 상위 문제 해결 시 재사용
  - 메모이제이션 기법을 사용 
    - 동일한 계산을 반복할 때, 이전에 계산한 값을 메모리에 저장하여 중복 연산을 방지
## 피보나치 접근
피보나치 수열의 N항의 값은 N-1항의 값과 N-2항의 값의 합이다.
즉, `f(N) = f(N-1) + f(N-2)` 이다.
- 동적 계획법을 적용하지 않은 경우
  - `n`항의 값을 구하기 위해서 `n-1`항과 `n-2`항의 값이 필요
    - `n-1`항의 값을 구하기 위해서 `n-2`항과 `n-3`항의 값이 필요
    - `n-2`항의 값을 구하기 위해서 `n-3`항과 `n-4`항의 값이 필요
    - ...
- 이처럼 동적계획법을 사용하지 않는 경우 중복 연산이 발생해 효율성이 떨어짐

```js
/* 동적계획법을 적용하지 않은 피보나치 */
function fibo (n) {
	if(n < 2) return n;
	return fibo(n-1) + fibo(n-2)
}
```

### 🤔 메모이제이션
```js
/* 메모이제이션을 적용한 피보나치*/
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};
```

### 🤔 Top-Down
- 재귀를 통해 큰 문제를 작은 문제로 나눠 해결하며 해를 찾는 방법
```js
/* 탑-다운 방식 */

function fibo_td(n, d = []) {
  if (n < 2) return n;
  if (d[n]) return d[n];

  d[n] = fibo_td(n - 1) + fibo_td(n - 2);

  return d[n];
}

console.log(fibo_td(5));
console.log(fibo_td(6));
console.log(fibo_td(7));
```

### 🤔 Bottom-Up
- 반복문을 통해 작은 문제부터 차례대로 해를 찾는 방법
```js
/* 바텀-업 방식 */
function fibo_bu(n, d = []) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}

console.log(fibo_bu(5));
console.log(fibo_bu(6));
console.log(fibo_bu(7));
```

### 🤔 benchmark
```js
function benchmark(n, callback) {
  let start = Date.now();

  callback(n);

  return Date.now() - start;
}

let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};

function fibo_td(n, d = []) {
  if (n < 2) return n;
  if (d[n]) return d[n];

  d[n] = fibo_td(n - 1) + fibo_td(n - 2);

  return d[n];
}

function fibo_bu(n, d = []) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}

console.log(`fibonacci ${benchmark(40, fibonacci)} ms`); // fibonacci 0 ms
console.log(fibonacci(40)); // 102334155 
console.log(`fibo_td ${benchmark(40, fibo_td)} ms`); // fibo_td 7317 ms
console.log(fibo_td(40)); // 102334155
console.log(`fibo_bu ${benchmark(40, fibo_bu)} ms`); // fibo_bu 1 ms
console.log(fibo_bu(40)); // 102334155
```

- 성능 측정을 해보니 메모이제이션 방법이 탑다운과 버텀업 방식보다 성능이 높게 측정됐다.

### 😉 거스름돈 문제
```js
/* 
[문제 설명]
Finn은 편의점에서 야간 아르바이트를 하고 있습니다. 
야간에 손님이 너무 없어 심심한 Finn은 손님들께 거스름돈을 n 원을 줄 때 방법의 경우의 수를 구하기로 하였습니다.
예를 들어서 손님께 5원을 거슬러 줘야 하고 1원, 2원, 5원이 있다면 다음과 같이 4가지 방법으로 5원을 거슬러 줄 수 있습니다.

1원을 5개 사용해서 거슬러 준다.
1원을 3개 사용하고, 2원을 1개 사용해서 거슬러 준다.
1원을 1개 사용하고, 2원을 2개 사용해서 거슬러 준다.
5원을 1개 사용해서 거슬러 준다.

거슬러 줘야 하는 금액 n과 Finn이 현재 보유하고 있는 돈의 종류 money가 매개변수로 주어질 때, Finn이 n 원을 거슬러 줄 방법의 수를 return 하도록 solution 함수를 완성해 주세요.

[제한 사항]
- n은 100,000 이하의 자연수입니다.
- 화폐 단위는 100종류 이하입니다.
- 모든 화폐는 무한하게 있다고 가정합니다.
- 정답이 커질 수 있으니, 1,000,000,007로 나눈 나머지를 return 해주세요.

[입출력 예]
n	    money	  result
5	   [1,2,5]	    4

[입출력 예 설명]
입출력 예 #1
문제의 예시와 같습니다.
*/

function solution(n, money) {
  let dp = new Array(n + 1).fill(0);
  let answer = 0;
  dp[0] = 1;

  for (let coin of money) {
    for (let price = coin; price <= n; price++) {
      dp[price] += dp[price - coin];
    }
  }

  return dp[n];
}
```

### 😉 정수삼각형 문제
```js
/*
[문제 설명]

            7
          3   8
        8   1   0
      2   7   4   4
    4   5   2   6   5
    
위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 
아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

[제한사항]
- 삼각형의 높이는 1 이상 500 이하입니다.
- 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.

[입출력 예]
triangle:[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	result: 30
*/

function solution(triangle) {
  let answer = 0;
  let height = triangle.length;
  let d = Array(501)
    .fill(0)
    .map(() => Array(501).fill(0));
  answer = d[0][0] = triangle[0][0];

  for (let i = 1; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0) d[i][j] = d[i - 1][j] + triangle[i][j];
      else if (j == i) d[i][j] = d[i - 1][j - 1] + triangle[i][j];
      else d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + triangle[i][j];

      answer = Math.max(answer, d[i][j]);
    }
  }

  return answer;
}

const tc = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(tc));
```