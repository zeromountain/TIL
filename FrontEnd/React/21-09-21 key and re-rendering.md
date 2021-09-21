# 키와 리렌더링

리액트를 사용하면서 주의해야할 점인 키와 리렌더링에 관련해서 알아보려고 합니다. 

## `Warning: Each child in a list should have a unique "key" prop.`

리액트에서 배열의 요소들을 JSX 형태로 반환할때, 가장 많이 발생하는 오류입니다.

이러한 경우 배열의 `map` 메서드를 사용하게 되는데, 배열의 각각의 요소들을 JSX 형태로 반환하게 되며 리액트는 이를 하나의 리스트로 이해하게 됩니다.

이 리스트의 자식 요소, 즉 배열의 각 요소들에는 리액트가 식별할 수 있도록 고유한 값을 명시해주어야 합니다.

이를 명시해주지 않는다면, 해당 요소들이 리렌더링될 때 형편없는 성능을 제공한다고 공식문서에서는 말하고 있습니다.

이를 해결하기 위해서 리액트에서는 `key` 속성을 제공해 고유한 값을 명시할 수 있도록 해줍니다.

```jsx
const todos = [
  [
    { id: 1, value: "Wash dishes" },
    { id: 2, value: "Clean the bed" },
    { id: 3, value: "Running" },
    { id: 4, value: "Learning" }
  ],
  [
    { id: 3, value: "Running" },
    { id: 1, value: "Wash dishes" },
    { id: 2, value: "Clean the bed" },
    { id: 4, value: "Learning" }
  ],
  [
    { id: 4, value: "Learning" },
    { id: 1, value: "Wash dishes" },
    { id: 2, value: "Clean the bed" },
    { id: 3, value: "Running" }
  ],
  [
    { id: 2, value: "Clean the bed" },
    { id: 1, value: "Wash dishes" },
    { id: 3, value: "Running" },
    { id: 4, value: "Learning" }
  ]
];

export default function App() {
  const [items, setItems] = useState(todos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setItems(todos[random]);
    }, 1000);

    // clean up
    return () => {
      clearInterval(interval);
    };
  });

  const handleDoneClick = (todo) => {
    setItems((items) => items.filter((item) => item !== todo));
  };

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item))
    ]);
  };
  return (
    <>
      {items.map((todo, index) => {
        console.log("index", index, "id", todo.id);
        return (
          <div>
            <button onClick={() => handleDoneClick(todo)}>{todo.value}</button>
          </div>
        );
      })}
      <br />
      <br />
      <button onClick={handleRestoreClick}>restore</button>
    </>
  );
}
```

다음과 같이 `todos` 라는 배열에는 요소들의 형태는 같지만 순서만 조금 다른 형태의 배열이 이중 배열의 형태로 존재합니다.

키와 리렌더링의 관계를 확인하기 위해서 `todos`의 요소를 `setInterval` 함수를 사용해서 1초마다 요소가 바뀌도록 했습니다.

- `key` 값이 없는 경우
  - 오류 발생 ⭕️
  - 두번째 버튼에 커서를 잡아둔다면, 리렌더링될 때 커서는 그대로 두번째 버튼에 있고 버튼 안의 글자들만 변경되는 것을 확인할 수 있습니다.
- `key={todo.id}` 고유한 값으로 설정한 경우
  - 마찬가지로 두번째 버튼에 커서를 잡아둔다면, 리렌더링될 때 커서가 해당 요소를 따라가는 것을 확인할 수 있습니다.
- `key={index}` 배열의 인덱스로 설정한 경우
  - 오류 발생 ❌
  = 동작은 `key` 값이 없는 경우와 같습니다.

이처럼 고유한 값을 키값으로 사용할 경우, 컴포넌트의 재사용성을 높임으로써 성능을 조금이라도 높일 수 있습니다.