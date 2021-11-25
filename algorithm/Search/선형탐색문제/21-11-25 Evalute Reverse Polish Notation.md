# [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## 문제설명

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, \*, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

## 제한사항

- 1 <= tokens.length <= 104
- tokens[i] is either an operator: "+", "-", "\*", or "/", or an integer in the range [-200, 200].

## 입출력예제

### 1

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

### 2

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

### 3

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## 문제접근

- [역폴란드 표기법](https://ko.wikipedia.org/wiki/%EC%97%AD%ED%8F%B4%EB%9E%80%EB%93%9C_%ED%91%9C%EA%B8%B0%EB%B2%95)
- 입출력 예제를 살펴보면 숫자인 경우는 스택에 추가하고, 연산자인 경우에는 스택에서 요소를 두개를 추출해 연산한 결과를 다시 스택에 넣는 과정을 반복해야 함을 알 수 있다.

## 문제풀이

```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!Number.isNaN(+token)) stack.push(token);
    else {
      let second = parseInt(stack.pop());
      let first = parseInt(stack.pop());

      switch (token) {
        case '+':
          stack.push(first + second);
          break;
        case '-':
          stack.push(first - second);
          break;
        case '*':
          stack.push(first * second);
          break;
        case '/':
          stack.push(~~(first / second));
          break;
      }
    }
  }

  return stack.pop();
};
```
