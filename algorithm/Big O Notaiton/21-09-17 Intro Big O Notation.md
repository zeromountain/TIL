# Big O Notation
## Intro to Big O

![](https://i.stack.imgur.com/WcBRI.png)
[스택오버플로우](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)

Big O Notation이란 `O(N)`과 같은 형태로 프로그램의 시간 복잡도나 공간 복잡도를 표현한 것을 말합니다.

## Timing Our Code

1부터 n까지의 합을 계산하는 함수를 구현해본다면 다음과 같습니다.

```js
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

이를, 수학 시간에 배웠던 합 공식으로 바꿔보면 다음과 같습니다.

```js
function sum(n) {
  return n * (n+1) / 2;
}
```

두 가지 코드 모두 같은 결과를 반환하지만, 둘 중 어떤 코드가 더 나은 코드일까요?

- 더 빠른가
- memory-intensive가 적은가
- 더 읽기 쉬운가

다음과 같이 더 좋은 코드를 정하는 기준은 여러 가지가 있겠지만, 알고리즘에서는 첫 번째를 조건을  기준으로 더 나은 코드를 판별합니다. 

위의 두 코드를 첫번째 조건을 기준으로 판별해보겠습니다.

```js
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
sum(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000} seconds.`)
```

다음과 같이 `performance` window 내장 객체를 사용해서 `sum(1000000000)`에 대한 시간을 계산해 봅니다.

결과는 `Time Elapsed: 1.0365 seconds.`로 실행 시마다 차이가 있지만 1초가 조금 넘는 시간이 출력됩니다.

```js
function sum(n) {
    return n*(n+1) / 2;
}

let t1 = performance.now();
sum(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000} seconds.`)
```

두번째 함수의 결과는 `Time Elapsed: 0.00009999999962747097 seconds.`로 실행 시마다 약간의 차이는 있지만 0초가 조금 넘는 시간이 출력됩니다.

이를 통해서, 첫번째의 함수보다 두번째 함수가 더 빠른 함수라는 것을 알 수 있습니다.

`Big O Notation`은 알고리즘의 시간복잡도를 표현하는 지표로 사용되며, `Big O Notation`을 통해서 해당 알고리즘이 좋은 알고리즘인지 나쁜 알고리즘인지 판별하는 기준이 됩니다.
