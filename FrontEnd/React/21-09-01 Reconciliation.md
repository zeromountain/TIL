# Reconciliation

Javascript로 DOM을 조작해 어떤 요소에 변화를 주도록 조작했을 때, 해당 요소의 부모 요소까지 리렌더링된다.

React에서는 이 부분을 해결하기 위해서 실제 DOM과 가상의 DOM을 비교하여 바뀐 부분만 리렌더링 되도록 하는데, 두 개의 돔 요소를 비교하는 모든 과정을 재조정이라고 한다.

( 물론 어떻게 사용하느냐에 따라 자바사크립트를 사용했을때와 다르지 않을 수 있다 😱 )

## 비교 알고리즘

- 실제 DOM과 가상 DOM의 트리를 루트 엘리먼트부터 비교

━ 이 글에서 실제 DOM -> R, 가상 DOM -> V로 표기 ━

### DOM 엘리먼트의 타입이 다른 경우

- R과 V의 루트 엘리먼트의 타입이 다르면, React는 이전 트리 구조를 버리고 새로운 트리 구조를 구축
- 루트 엘리먼트의 자식 요소로 포함된 모든 컴포넌트가 언마운트
- 컴포넌트의 state도 사라짐

```jsx
// R
<div>
  </Counter>
</div>

// V
<span>
  </Counter>
</span>
```

위 코드와 깉이 R과 V를 비교했을 때, R은 루트 엘리먼트가 div이고, V는 span인 것을 확인 할 수 있다.

이럴 경우, 기존 루트 엘리먼트를 언마운트 하고 V를 참조하여 새로운 트리 구조를 그린다.

### DOM 엘리먼트의 타입이 같은 경우

- 엘리먼트의 속성을 확인해, 동일한 속성은 유지하고 변경된 속상들만 갱신
- DOM 노드의 처리가 끝나면 자식 요소를 재귀적으로 처리

#### 클래스명 변경
```jsx
<div className="real" title="stuff"></div> // R
<div className="virtual" title="stuff"></div> // V
```

- R과 V를 비교한 React는 R의 DOM 노드 상에서 className만 수정 ➡️ 불필요한 리렌더링이 발생하지 않음

#### 인라인 스타일 속성 변경
```jsx
<div style={{color: 'red', backgroundColor: 'black' }}></div> // R
<div style={{color: 'white' backgroundColor: 'black'}}></div> // V
```
- R과 V를 비교해 color 속성만 변경

### 같은 타입의 컴포넌트 엘리먼트
- 컴포넌트가 갱신되면 인스턴스는 동일하게 유지되어 state 역시 유지
- 새로운 엘리먼트의 내용을 반영하기 위해 컴포넌트 인스턴트의 props 갱신 ➡️ `componentDidUpdate` 호출

## 자식에 대한 재귀적 처리

- R과 V의 자식 요소의 리스트를 순회하고 차이점이 있으면 변경

### 성능에 문제가 발생하는 경우
```jsx
// R
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// V
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

- 마지막 요소가 추가되는 경우에는 성능상에 크게 문제가 발생하지 않지만
- 첫번째에 요소가 추가되는 경우에는 R의 첫번째 리스트 요소와 V의 첫번째 리스트 요소가 다르기 때문에
- 종속 트리를 그대로 유지하지 않고 모든 자식 요소를 변경한다 😱

### 해결방법

React는 이러한 성능 문제를 해결하기 위해서 `key`라는 속성을 제공한다.

#### key

- 각 리스트 요소를 식벼할 수 있는 값으로 지정
- 데이터 구조에 ID라는 속성을 사용하거나 해시를 적용해 key를 생성할 수 있음
- 배열의 인덱스를 key로 사용 🤔**권장되지않음**😱 ➡️ 재배열되는 경우 비효율적으로 동작

##### 식별자 사용
```jsx
// R
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

// V
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

##### id 사용

```jsx
<li key={item.id}>{item.name}</li>
```
