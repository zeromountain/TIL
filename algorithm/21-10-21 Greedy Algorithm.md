# 탐욕 알고리즘(Greedy Alogrithm)
- 매 순간 최적의 값을 선택하면서 최종적으로 최적의 값에 도달하는 알고리즘 설계 기법
  - 최적 부분 구조나 탐욕 선택 속성 문제를 해결하는데 적합
  - 매 순간 최적의 값을 찾으면서 구하는 방법이 항상 최적임을 보장하지 않아 유의 필요
- 동전의 종류 → 최소한의 동전의 개수로 잔돈을 거슬러 주는 방법
- 네이게이션 최적 경로
  - (마곡 → 강남) 최적 경로 탐색하면 가장 짧은 시간으로 도달하는 최적 경로 안내
  - 하지만, 네비게이션이 안내한 최적의 경로가 최저 시간을 보장하지는 않는다.
- 방문 판맨원 문제
  - 출발 도시에서 가장 가까운 도시 방문
  - 방문한 도시에서 가장 가까운 도시 방문
  - 이를 반복하면 모든 도시를 방문하는 최단 경로의 최적의 근사치를 구할 수 있다
- 다익스트라 알고리즘
- 크러스컬 알고리즘
- 허프만 코드
## 탐욕 알고리즘 문제
### 거스름돈
```js
/**
 * 타로는 자주 JOI 잡화점에서 물건을 산다. JOI 잡화점에는 잔돈으로 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고, 언제나 거스름돈 개수가 가장 적게 잔돈을 준다.
 * 타로가 JOI 잡화점에서 물건을 사고 카운터에서 1000엔 지폐를 한장 냈을 때, 받을 잔돈에 포함된 잔돈의 개수를 구하는 프로그램을 작성하시오.
 *
 * [입력]
 * 입력은 할줄로 이루어져있고, 타로가 지불할 돈 (1이상 1000미만의 정수) 1개가 쓰여져 있다
 *
 * [출력]
 * 제출할 출력 파일은 1행으로만 되어 있다. 잔돈에 포함된 매수를 출력하시오
 *
 * [예제 입력1]
 * 380
 *
 * [예제 출력1]
 * 4
 */

function solution(n) {
  let coin = [500, 100, 50, 10, 5, 1];
  let answer = 0;

  n = 1000 - n;

  for (let i = 0; i < coin.length; i++) {
    while (n >= coin[i]) {
      n -= coin[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution(380));
console.log(solution(1));
```
- 항상 최적임을 보장하지 않는 케이스 발생할 수 있다 ✔
- 함수의 인자로 들어가는 n은 실제 지불해야할 금액 ✔️
- 1000에서 실제 지불해야할 금액 n엔을 뺀 나머지 금액을 변수에 저장한다. 👌
- 포스기에 있는 동전의 배열에의 길이만큼 순회하며 잔돈으로 주어야 할 `n`이 해당 인덱스의 배열보다 적다면 해당 인덱스의 배열 요소만큼 `n`에서 차감하고 카운트 1씩 증가시킨다 👌



### 체육복
```js
/**
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
 * 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
 * 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 * 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
 * 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
 * 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
 * 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
 * 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
 *
 * [제한사항]
 * 전체 학생의 수는 2명 이상 30명 이하입니다.
 * 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 * 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 * 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
 * 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
 * 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 *
 * [입출력 예]
 * n: 5, lost: [2,4], reserve: [1,3,5], return: 5
 * n: 5, lost: [2,4], reserve: [4], return: 4
 * n: 3, lost: [3], reserve: [1], return: 2
 *
 * [입출력 예 설명]
 * 예제 #1
 * 1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.
 *
 * 예제 #2
 * 3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
 */

function solution(n, lost, reserve) {
  var losted = [...lost].filter((x) => !reserve.includes(x)); // → 잃어버린 사람 중 여벌이 있는 경우 필터링: 여벌의 체육복이 없고 체육복을 잃어버린 사람
  var reserved = [...reserve].filter((x) => !lost.includes(x)); // → 여벌이 있는 사람 중 잃어버린 경우 필터링: 여벌의 체육복이 있고 체육복을 잃어버리지 않은 사람
  var answer = n - losted.length; // → 체육 수업이 가능한 사람의 수

  var db = {};
  for (let i = 0; i < reserved.length; i++) {
    db[reserved[i]] = true; // → 빌려 줄 수 있는 학생의 정보
  }

  losted = losted.sort((x, y) => x - y); // → input 값의 오름차순으로 정렬
  for (let i = 0; i < losted.length; i++) {
    if (db[losted[i] - 1]) {
      answer++;
      db[losted[i] - 1] = false;
    } else if (db[losted[i] + 1]) {
      answer++;
      db[losted[i] + 1] = false;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [4]));
console.log(solution(3, [3], [1]));
```
- losted 배열에서 reserved 배열의 교집합을 뺀 나머지 `(losted 배열에 대한 reserved 배열의 차집합)` 학생들의 정보를 확인
- O(N)의 시간복잡도의 연산을 위해서 `db` 객체 생성
  - `db`: 빌려줄 수 있는 학생의 정보를 저장
- `losted` 배열을 오름차순으로 정렬 
- `losted` 배열을 순회하며 체육복을 빌려줄 수 있는 학생 정보를 확인
  -  잃어버린 학생의 앞 번호 학생이 `db` 객체에 있다면 대여 가능 여부를 `false`로 업데이트하고 `answer` 의 카운트 1 증가
  - 잃어버린 학생의 뒷 번호 학생이 `db` 객체에 있다면 대여 가능 여부를 `false`로 업데이트하고 `answer`의 카운트 1 증가

## 다익스트라 알고리즘
- 단일 최단 경로 최소 비용 산출
- 그래프에서 출발점과 도착점 사이의 최단 거리를 구하는 알고리즘
- 보통 단일 정점 간 최단 경로 산출 시 사용, 도로 교통망이나 OSPF(Open Shortest Path First:최단 경로 우선 프로토콜) 등의 네트워크 라우팅 프로토콜에 널리 이용

### 의사 코드
```js
function Dijkstar(Grap source):
	create vertex set Q

	for each vertex v in Graph:  // 초기화
		dist[v] + INFINITY         // 소스에서 v까지의 아직 모르는 길이
		add v to Q                 // 모든 노드는 초기에 Q에 속해 있다 (미방문 집합)
	
		dist[source] ← 0           // 소스에서 소스까지의 길이

		while Q is not empty:      
			u ← vertex in Q with min dist[u] // 최소 거리를 갖는 정점을 가장 먼저 선택한다

			remove u from Q

			for each neighbor v of u:       // v는 여전히 Q에 있다
				alt ← dist[u] + length(u, v)  
				if alt < dist[v]:             // v까지의 더 짧은 경로를 찾았을 때
					dist[v] ← alt

	return dist[]
```

### 다익스트라 구현하기

```js
// ShortestPath(): edge object 객체 저장을 위한 생성자
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function ShortestPath() {
  this.edges = {};
}

// addVertex(): 정점 추가 (간선 비용 표시를 위해 key/value object 형태로 저장)
ShortestPath.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

// addEdge(): 간선 추가
ShortestPath.prototype.addEdge = function (srcVertex, dstVertex, weight) {
  this.edges[srcVertex][dstVertex] = weight;
};

// _extractMin(): 최단 거리 노드 검색
ShortestPath.prototype._extractMin = function (queue, dist) {
  let minDistance = Number.POSITIVE_INFINITY;
  let minVertex = null;

  for (let vertex in queue) {
    if (dist[vertex] <= minDistance) {
      minDistance = dist[vertex];
      minVertex = vertex;
    }
  }

  return minVertex;
};

// dijkstra(): 다익스트라 최단 경로 탐색
ShortestPath.prototype.dijkstra = function (start) {
  let queue = {};
  let dist = {};

  for (let vertex in this.edges) {
    dist[vertex] = Number.POSITIVE_INFINITY;
    queue[vertex] = this.edges[vertex];
  }

  dist[start] = 0;
  while (Object.keys(queue).length != 0) {
    let u = this._extractMin(queue, dist);

    delete queue[u];

    for (let neighbor in this.edges[u]) {
      let alt = dist[u] + this.edges[u][neighbor];
      if (alt < dist[neighbor]) dist[neighbor] = alt;
    }
  }

  for (let vertex in this.edges) {
    if (dist[vertex] === Number.POSITIVE_INFINITY) {
      delete dist[vertex];
    }
  }
  return dist;
};
```
- 출발점으로투버의 최단 거리를 저장할 객체 `dist[vertex]`를 만들고 출발 노드에 0을, 출발 노드를 제외한 다른 노드들에 Infinity를 채워 넣는다
- 최단 경로의 정점을 `queue[vertex]` 객체에 채워 넣는다.
- `queue` 객체가 빌 때까지 반복해서 최단 거리 노드를 탐색한다.
  - 탐색 후 해당 `queue` 객체의 정점 삭제
- 최적 경로 `u`의 이웃 노드를 확인하며 `dist` 객체 업데이트
- 최단 경로의 `edges`의 정점을 순회하며 `dist` 객체의 정점의 값이 무한대인 노드들을 삭제