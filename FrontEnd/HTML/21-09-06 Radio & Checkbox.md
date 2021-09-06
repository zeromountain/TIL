# Radio Type input

radio 타입의 인풋은 원형 형태로 사용자에게 입력을 요청하는 input 필드를 말한다.

> ## 반드시 입력해야 하는 radio type 속성
> - **name**: name 속성의 value와 같은 값을 갖는 radio type input 필드를 하나의 그룹으로 묶어서 택 1 하도록 한다.
>   - 라디오 타입 인풋 필드의 다른 그룹이 있다면
>   
>   <img width="213" alt="스크린샷 2021-09-06 오후 12 54 01" src="https://user-images.githubusercontent.com/54147313/132158543-a721add1-b4a9-4e26-b2ee-bf4ec69a43a7.png">
>
>   - 위의 이미지처럼 서로 다른 그룹의 인풋 필드는 선택이 가능
> 
> - **value**: 폼 제출 시 name 속성의 값의 value로 서버에 어떤 input 필드의 데이터가 선택이 되었는지 구분해준다.

```html
<form action="" method="GET">
  <input
    type="radio"
    name="subscription"
    value="subscribed"
    id="subscribed"
  />
  <label for="subscribed">구독중</label>
  <input
    type="radio"
    name="subscription"
    value="unsubscribed"
    id="unsubscribed"
  />
  <label for="unsubscribed">미구독</label>
  <button type="submit">Submit</button>
</form>
```

<img width="437" alt="스크린샷 2021-09-06 오후 12 43 46" src="https://user-images.githubusercontent.com/54147313/132157998-db871bb3-a05e-4fa1-a3da-c4cacee78839.png">

- 미구독 필드를 선택하고 submit 버튼을 클릭하면 🤜
- URL 주소창에 `?subscription=unsubscribed`라고 쿼리 형태로 서버로 전달된 데이터를 확인할 수 있다 👀
  - URL에 노출되기 때문에 개인정보와 관련된 정보는 GET 요청으로 보내면 위험하다 😱

# CheckBox Type input

박스에 체크를 하는 방법으로 사용자에게 입력을 요청하는 input 필드를 말한다.

- checkbox 타입의 속성도 radio 타입의 속성과 같다.

```html
<h1>사용 가능 언어</h1>
<form action="">
  <input type="checkbox" name="skills" value="html" id="html" />
  <label for="html">HTML</label>
  <input type="checkbox" name="skills" value="css" id="css" />
  <label for="css">CSS</label>
  <input type="checkbox" name="skills" value="js" id="js" />
  <label for="js">Javascript</label>
  <button type="submit">submit</button>
</form>
```

<img width="451" alt="스크린샷 2021-09-06 오후 1 01 46" src="https://user-images.githubusercontent.com/54147313/132159231-53e2c382-3d17-43a0-b1b0-6824576aae8f.png">


- checkbox 타입은 radio 타입과는 달리 중복 선택이 가능하다 🤝
- 중복 선택된 데이터 처리를 `?skills=html&skills=css&skills=js`와 같이 쿼리 형식과 `&`연산자를 사용해 처리한다 🧹
