# 되추적
- 경우의 수로 값을 찾는 도중 값이 나올 수 없는 조건일 때 이를 중단하고 다른 경우의 수로 값을 찾는 알고리즘 기법 → 노드의 유망성 체크
  - 값이 될 가능성이 있으면 지속적 탐색, 가능성이 없다면 가지치기(pruning)하여 빠르게 전체 값을 탐색
    - 가지치기한 노드의 하위 노드를 더 이상 탐색하지 않음
  - 값이 되지 않는 경우의 수는 배재하며 값을 찾는 시간 복잡도를 단축
- DFS 완전 탐색 vs DFS 완적탐색 + 백트래킹

## 되추적을 적용하기 위해 알아야할 개념
- 트리 → 트리별 노드 배치의 특성 파악
  - 백트래킹은 가지치기를 해서 더 이상 탐색하지 않아도 될 노드 줄기를 빠르게 파악해야 하므로 좌,우의 노드의 정렬이 올바라야한다.
- 그래프
- BFS → 너비 우선 탐색
  - 시작 노드를 큐에 삽입하고 방문 처리
  - 큐에서 노드를 꺼내 해당 노드의 인접 노드 중 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리
- DFS → 깊이 우선 탐색
  - 탐색 시작 노드를 스택에 삽입하고 방문 처리
  - 스택의 최상단 노드에 방문하지 않은 인전 노드가 있다면 인접 노드를 스택에 넣고 방문 처리
  - 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 추출

## 타겟넘버
```js
/* 
[문제 설명]
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

[입출력 예]
numbers	          target	return
[1, 1, 1, 1, 1]	  3	      5

[입출력 예 설명]
문제에 나온 예와 같습니다.
*/

function dfs(numbers, target, sums, index, total) {
  if (index === numbers.length) {
    return target === total ? 1 : 0;
  }

  if (
    (target > total && target > total + sums[index]) ||
    (target < total && target < total - sums[index])
  )
    return 0;

  let count = 0;
  count += dfs(numbers, target, sums, index + 1, total + numbers[index]);
  count += dfs(numbers, target, sums, index + 1, total - numbers[index]);

  return count;
}

function solution(numbers, target) {
  let sums = new Array(numbers.length);
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i];
    sums[i] = sum;
  }

  return dfs(numbers, target, sums, 0, 0);
}
```
- 

## 단어 변환
```js
/**
 * [문제설명]
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다.
 * 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 과정을 찾으려고 합니다.
 *
 * → 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * → words에 있는 단어로만 변환할 수 있습니다.
 *
 * 예를 들어, begin이 "hit", target이 "cog", words가 ['hot', 'dot', 'dog', 'lot', 'log', 'cog']라면 "hit" → "hot" → "dot" → "dog" → "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 * 두 개의 단어 begin, taget과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 *
 * [제한사항]
 * 각 단어는 알파벳 소문자로만 이루어져 있습니다
 * 각 단어의 길이는 3이상 10이하이며 모든 단어의 길이는 같습니다
 * words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다
 * begin과 target은 같지 않습니다
 * 변활할 수 없는 경우에는 0을 return 합니다
 *
 * [입출력 예]
 * begin: "hit" / target: "cog" / words: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] / return: 4
 * begin: "hit" / target: "cog" / words: ['hot', 'dot', 'dog', 'lot', 'log'] / return: 0
 *
 * [입출력 예 설명]
 * 예제 #1
 * 문제에 나온 예와 같습니다
 *
 * 예제 #2
 * target인 "cog"는 words 안에 없기 때문에 변환할 수 없습니다
 */

const dfs = (begin, words, visited) => {
  for (let i = 0; i < words.length; i++) {
    if (
      visited[i] === false &&
      [...words[i]].filter((el, idx) => el !== begin[idx]).length === 1
    ) {
      if (
        [...words[i]].filter((el, idx) => el !== target[idx]).length === 1 ||
        words[i] === target
      ) {
        visited[i] = true;
        visited[words.indexOf(target)] = true;
        return visited.filter((el) => el === true).length;
      }

      visited[i] = true;
      return dfs(words[i], words, visited, target);
    }
  }
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let visited = new Array(words.length).fill(false);

  return dfs(begin, words, visited, target);
}
```

## N-Queens
```js
/*
[문제 설명]
가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.

예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

| |Q| | |         | | |Q| |
| | | |Q|         |Q| | | |
|Q| | | |         | | | |Q|
| | |Q| |         | |Q| | | 

체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, 
n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

[제한사항]

- 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
- n은 12이하의 자연수 입니다.

[입출력 예]
n	result
4	2

입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.
*/

function isPossible(arr, row, col) {
  for (let c = 0; c < col; c++) {
    if (arr[c] === row) return false;
    if (Math.abs(c - col) === Math.abs(arr[c] - row)) return false;
  }
  return true;
}

function dfs(n, arr, col) {
  // col: y에 대한 위치(?)
  if (col === n) return 1;

  let ret = 0;
  for (let row = 0; row < n; row++) {
    if (isPossible(arr, row, col)) {
      arr[col] = row;
      ret += dfs(n, arr, col + 1);
    }
  }

  return ret;
}

function solution(n) {
  return dfs(n, [], 0);
}
```

- 퀸을 체스판에 놓을 경우, 체스판 위에 있는 퀸의 위치를 기준으로 놓을 수 없는 체스판 위치를 소거하면서 다른 퀸을 놓을 수 있는 위치를 파악