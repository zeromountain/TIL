# JadenCase 문자열 만들기

## 문제설명

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

## 제한조건

- s는 길이 1이상인 문자열입니다.
- s는 알파벳과 공백문자("")로 이루어져 있습니다.
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다.(첫번째 입출력 예 참고)

---

## 입출력예

|            s            |         return          |
| :---------------------: | :---------------------: |
| "3people unFollowed me" | "3people Unfollowed Me" |
|   "for the last week"   |   "For The Last Week"   |

---

## 문제접근

- 공백으로 구분된 각 문자들의 첫번째 요소를 대문자로 바꾸어 반환한다.
  - 단, 첫번째 문자 이외의 다른 문자는 모두 소문자 처리한다.
  - 여기서 숫자인 문자가 있을 경우, 숫자를 어떻게 처리해야할지 생각해야 한다.
    - 자바스크립트의 특성을 생각하면, '1'이라는 숫자 형태의 문자열에 `toUpperCase` 메서드를 적용하여도 '1' 본래 형태를 그대로 갖기 때문에 숫자에 대한 부분은 크게 고려하지 않아도 괜찮아 보인다.
- 입력값으로 주어진 문자열에 대문자가 있을 수 있기 때문에, `toUpperCase` 메서드를 사용해 문자열을 대문자로 바꿔준다.
- 문자열을 바꿔준 후, 배열로 변환해 각 요소 문자들을 다시 하나씩 쪼개서 첫번째 요소를 대문자로 바꾼 뒤에 다시 문자열로 처리해준다.

## 문제풀이

### 배열로 풀이

```js
function solution(s) {
  const words = s.toLowerCase();
  return words
    .split(' ')
    .map((word) => {
      let unit = word.split('');
      if (unit[0] != null) unit[0] = unit[0].toUpperCase();
      return unit.join('');
    })
    .join(' ');
}
```

### String 메서드 활용

```js
function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}
```
