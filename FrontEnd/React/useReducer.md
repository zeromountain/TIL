# useReducer 이해하기(React + Typescript)
## Counter
```tsx
// App.tsx
import React from "react";
import Counter from "./Counter";

function App() {
  return <Counter />;
}

export default App;
```

```tsx
// Counter.tsx
import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action type");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
```

> - Counter.tsx
>   - Action 객체의 타입을 type alias를 통해 설정
>     - action의 타입을 `INCREASE` 또는 `DECREASE`
>   - reducer 함수의 파라미터 타입과 함수의 리턴 값에 대한 타입을 설정
>     - state는 Counter 어플리케이션의 숫자를 표현할 것이므로, number 타입을 설정
>     - action은 type alias로 설정한 Action 사용
>     - reducer 함수의 리턴 값은 기본 숫자에 대한 증감이므로, number 타입을 설정
>   - useReducer
>     - useReducer 함수는 실행할 함수와 초기값을 함수의 인자로 갖는다.
>     - 이외의 부가적인 옵션 사항은 공식문서 [참조](https://reactjs.org/docs/hooks-reference.html#usereducer)
>   - onIncrease
>     - onIncrease 함수를 실행하면 dispatch 함수를 통해서 action.type이 `INCREASE`인 결과를 반환
>   - onDecrease
>     - onDecrease 함수를 실행하면 dispatch 함수를 통해서 action.type이 `DECREASE`인 결과를 반환
## 다수의 상태 관리
```tsx
// App.tsx
import React from "react";
import ReducerSample from "./ReducerSample";

function App() {
  return <ReducerSample />;
}

export default App;
```

```tsx
// ReducerSample.tsx

import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellowgrenn"; 

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action type");
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "yellowgrenn" });
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
```

> - ReducerSample.tsx
>   - Color
>     - type alias를 통해서 color의 타입을 설정
>   - State
>     - 기본 상태 값의 타입을 설정
>   - Action
>     - action의 타입과 payload의 타입 설정
>   - reducer
>     - state: State로 타입 설정
>     - action: Action으로 타입 설정
>     - function: 함수의 반환값이 State 타입 형태이므로 State로 타입 설정
>   - useReducer
>     - reducer함수와 기본 state 값을 함수의 인자로 설정
>   - setCount
>     - setCount 함수를 실행하면, dispatch 함수의 인자로 들어온 payload의 값, 즉 `5`를 reducer 함수에서 action 타입이 `SET_COUNT`의 반환값으로 반환한다.
>   - setText
>     - setText 함수를 실행하면, dispatch 함수의 인자로 들어온 payload의 값, 즉 `bye`를 reducer 함수에서 action 타입이 `SET_TEXT`의 반환값으로 반환한다.
>   - setColor
>     - setColor 함수를 실행하면, dispatch 함수의 인자로 들어온 payload의 값, 즉 `yellowgreen`을 reducer 함수에서 action 타입이 `SET_COLOR`의 반환값으로 반환한다.
>   - toggleGood
>     - toggleGood 함수를 실행하면, dispatch 함수를 통해 reducer 함수에서 해당되는 action 타입에 만족하는 조건문을 실행시키고, 현재 `isGood` 상태값의 반대로 반환한다.
