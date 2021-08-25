# Form 구현으로 리액트 타입스크립트 이해하기

```tsx
// App.tsx
import React from "react";
import MyForm from "./MyForm";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return <MyForm onSubmit={onSubmit} />;
}

export default App;
```

```tsx
// MyForm.tsx
import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```

> `App.tsx` 
> - `onSubmit` 함수의 파라미터 타입을 설정해준다.
>   - name과 description 모두 string 타입으로 설정한다.
>     - string 이외의 타입을 코드에 작성한다면 오류가 발생한다. 
>   - But 인풋값에 숫자를 입력해도 오류는 발생하지 않는다. => 인풋창에 입력된 숫자 값은 문자열로 처리된다.
> - `onSubmit` 함수를 `MyForm` 컴포넌트에 `props`로 전달한다. 

> `MyForm.tsx`
> - `App.tsx`에서 `props`로 받은 `onSubmit` 함수의 타입을 설정한다.
>   - `onSubmit` 함수의 `form` 타입 설정은 상위 컴포넌트와 같다. 
>   - `onSubmit` 함수의 리턴값이 없으므로 void 타입으로 설정
> - `onChange` 함수와 `handleSubmit`함수의 파라미터 event 객체의 정확한 타입이 애매할 경우, any로 지정해주고
> - JSX에서 onSubmit과 onChange에 마우스를 hover하면 event 객체의 타입을 알 수 있다. 

