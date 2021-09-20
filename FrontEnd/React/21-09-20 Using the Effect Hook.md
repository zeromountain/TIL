# Using the Effect Hook
## Hook Flow
### 자식 컴포넌트가 없는 경우
```jsx
const App = () => {
  // (1)
  console.log("App render start!");
  const [show, setShow] = useState(() => {
    // (2)
    console.log("App useState");
    return false;
  });

  useEffect(() => {
    // (3)
    console.log("App useEffect, empty deps");
  }, []);
  useEffect(() => {
    // (4)
    console.log("App useEffect, no deps");
  });
  useEffect(() => {
    // (5)
    console.log("App useEffect, [show]");
  }, [show]);

  const handleClick = () => {
    setShow((show) => !show);
  };
  // (6)
  console.log("App reder end");
  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? 
      <>
        <input onChange={handleChange} />
        <p>{text}</p>
      </> : null}
    </>
  );
}
```
다음과 같은 App 컴포넌트에 훅함수를 사용했을 때, 라이플 사이클을 알아보기 위해서 다음과 같이 여섯 곳에 콘솔을 입력했습니다.

App 컴포넌트가 처음 렌더링되면, `(1)-(2)-(6)-(3)-(4)-(5)`의 순서로 콘솔이 찍히는 것을 확인할 수 있습니다.

이를 통해서, 각각의 훅함수들이 언제 동작하는지 확인이 가능합니다.

`useState` 함수는 App 컴포넌트의 상태값을 포함하고 있기 때문에, App 컴포넌트가 렌더링을 끝내기 전에 실행이 됩니다.

반면 `useEffect` 함수는 `side effect` 함수로서 App 컴포넌트가 모두 렌더링된 이후에 호출되는 것을 알 수 있습니다.

#### `useEffect`

##### What does the useEffect function do?

`useEffect` 함수는 컴포넌트가 렌더링된 이후에 리액트가 어떤 일을 수행해야 하는지 지령을 내리는 역할을 합니다.

`useEffect` 함수를 다음과 같은 동작을 하는데 사용할 수 있습니다. 

- effect 함수를 기억하고 DOM 업데이트 이후에 호출
- 데이터 가져오기
- 명령형 API 호출

##### Why do you call useEffect within a component?

`useEffect` 함수가 App 컴포넌트 내부에 존재함으로써 effect를 통해 show 상태 값에 접근할 수 있습니다.

> effect: effect는 Class형 컴포넌트의 componentDidMount와 componentDidUpdate와 달리 브라우저가 화면을 업데이트하는 것을 차단하지 않습니다.

##### Is use Effect performed every time after rendering?

`useEffect` 함수는 기본적으로 첫 렌더링과 렌더링 이후의 모든 업데이트에서 수행됩니다.

### 자식 컴포넌트가 있는 경우
```jsx
const Child = () => {
  // C(1)
  console.log("       Child render start");
  const [text, setText] = useState(() => {
    // C(2)
    console.log("       Child useState");
    return "";
  });

  useEffect(() => {
    // C(3)
    console.log("       Child useEfeect, no deps");
  });
  useEffect(() => {
    // C(4)
    console.log("       Child useEffect, empty deps");
  }, []);
  useEffect(() => {
    // C(5)
    console.log("       Child useEffect, [text]");
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const element = (
    <>
      <input onChange={handleChange} />
      <p>{text}</p>
    </>
  );
  // C(6)
  console.log("       Child render end");
  return element;
};

export default function App() {
  // P(1)
  console.log("App render start!");
  const [show, setShow] = useState(() => {
    // P(2)
    console.log("App useState");
    return false;
  });

  useEffect(() => {
    // P(3)
    console.log("App useEffect, empty deps");
  }, []);

  useEffect(() => {
    // P(4)
    console.log("App useEffect, no deps");
  });

  useEffect(() => {
    // P(5)
    console.log("App useEffect, [show]");
  }, [show]);

  const handleClick = () => {
    setShow((show) => !show);
  };
  // P(6)
  console.log("App reder end");
  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? <Child /> : null}
    </>
  );
}
```

다음과 같이 App 컴포넌트에 Child 컴포넌트를 추가했습니다.

App 컴포넌트와 마찬가지로 Child 컴포넌트에도 여섯 곳에 콘솔을 입력했습니다.

App 컴포넌트를 실행하게 되면, `P(1)-P(2)-P(6)-P(3)-P(4)-P(5)`의 순서로 실행되는 것을 확인할 수 있습니다. 

Child 컴포넌트는 show의 상태 값에 따라서, 나타나기 때문에 버튼을 클릭해 show의 상태 값을 변경해주면 `P(1)-P(3)-C(1)-C(2)-C(6)-C(3)-C(4)-C(5)-P(4)-P(5)`의 순서로 콘솔이 찍히는 것을 확인할 수 있습니다.

이를 통해서 App 컴포넌트의 `useEffect` 함수가 Child 컴포넌트가 모두 렌더링되고, Child 컴포넌트의 `useEffect` 함수까지 모두 실행된 이후에 실행됨을 알 수 있습니다.

여기서 주의해야할 점은 Child 컴포넌트의 input에 텍스트를 입력하게될 경우, `C(1)-C(6)-C(3)-C(5)`의 순서로 콘솔이 찍힙니다.

이를 통해서 자식 컴포넌트에서의 effect가 부모 컴포넌트에 영향을 미치지 않는 것을 확인할 수 있습니다.

### Clean Up을 이용한 Effect

`clean up`은 `useEffect`함수가 다시 동작할 때, 이전 `useEffect` 값을 지우는 동작을 합니다.

```jsx
const Child = () => {
  // C(1)
  console.log("       Child render start");
  const [text, setText] = useState(() => {
    // C(2)
    console.log("       Child useState");
    return "";
  });

  useEffect(() => {
    // C(3)
    console.log("       Child useEfeect, no deps");

    return () => {
      // C(3-1)
      console.log("       Child useEffect [cleanup], no deps");
    };
  });
  useEffect(() => {
    // C(4)
    console.log("       Child useEffect, empty deps");
    return () => {
      // C(4-1)
      console.log("       Child useEffect [cleanup], empty deps");
    };
  }, []);
  useEffect(() => {
    // C(5)
    console.log("       Child useEffect, [text]");
    return () => {
      // C(5-1)
      console.log("       Child useEffect [cleanup], [text]");
    };
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const element = (
    <>
      <input onChange={handleChange} />
      <p>{text}</p>
    </>
  );
  // C(6)
  console.log("       Child render end");
  return element;
};

export default function App() {
  // P(1)
  console.log("App render start!");
  const [show, setShow] = useState(() => {
    // P(2)
    console.log("App useState");
    return false;
  });

  useEffect(() => {
    // P(3)
    console.log("App useEffect, empty deps");
    return () => {
      // P(3-1)
      console.log("App useEffect [cleanup], no deps");
    };
  }, []);

  useEffect(() => {
    // P(4)
    console.log("App useEffect, no deps");
    return () => {
      // P(4-1)
      console.log("App useEffect [cleanup], empty deps");
    };
  });

  // show 바뀔때 렌더
  useEffect(() => {
    // P(5)
    console.log("App useEffect, [show]");
    return () => {
      // P(5-1)
      console.log("App useEffect [cleanup], [show]");
    };
  }, [show]);

  const handleClick = () => {
    setShow((show) => !show);
  };
  // P(6)
  console.log("App reder end");
  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? <Child /> : null}
    </>
  );
}
```

다음과 같이 `useEffect` 함수에 리턴값으로 함수를 반환하면 clean up 효과를 사용할 수 있습니다.

- 처음 렌더링 시

`P(1)-P(2)-P(6)-P(3)-P(4)-P(5)`

- show 상태 값이 변경될 때 

`P(1)-P(6)-C(1)-C(2)-C(6)-P(4-1)-P(5-1)-C(3)-C(4)-C(5)-P(4)-P(5)`

- text 상태 값이 변경될 때

`C(1)-C(6)-C(3-1)-C(5-1)-C(3)-C(5)`

이를 통해서 클린업은 `useEffect`가 재실행되기 전에 실행되어 이전 `useEffect`의 값을 지운다는 것을 알 수 있었다.

#### When exactly does React clean up the effect?

리액트는 컴포넌트가 마운트 해제될 때에 클린업을 실행합니다.

effect는 렌더링이 실행될 때마다 실행되기 때문에, 이전에 렌더링에서 실행된 effect를 지우는 것을 통해서 메모리 누수나 충돌 등의 버그를 사전에 방지할 수 있습니다. 