# Counter 코드로 리액트 + 타입스크립트 이해하기

```tsx
// App.tsx
import React from 'react';
import Counter from './Counter';

function App() {
  return <Counter />
}
```

```tsx
// Counter.tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0); // Generic type 설정

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

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
- Counter 예제에서는 JS로 Counter를 작성하는 코드와 크게 다르지 않다. 
- useState 함수에 제네릭으로 타입을 지정해 주었다.
  - 함수의 파라미터를 number 타입으로 설정해 주었기 때문에, number 타입 이외의 데이터가 들어오면 오류가 발생한다.
