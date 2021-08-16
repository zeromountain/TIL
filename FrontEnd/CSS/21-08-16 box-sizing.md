# box-sizing

`box-sizing`은 `border`와 `padding`과 같이 요소의 크기를 변화시키는 경우, 요소의 크기가 커지지 않도록 제한하는 속성이다.
- `content-box`: 요소의 내용 부분만 box-sizing 적용, default
- `border-box`: 요소의 내용 + padding + border로 크기 계산해 box-sizing 적용

```html
<div class="item'>hello</div>
<div class="item'>hello</div>
```

```css
.item {
  width: 100px;
  heigth: 100px;
  background-color: orange;
}

.item:first-child {
  border: 4px solid red;
  padding: 20px;
  box-sizing: border-box;
}
```

- box-sizing 적용하지 않은 경우
<img width="1679" alt="스크린샷 2021-08-16 오후 4 04 11" src="https://user-images.githubusercontent.com/54147313/129524277-63ee29b2-18b8-41ad-a569-2376f2010cc1.png">

- box-sizing 적용한 경우
<img width="1680" alt="스크린샷 2021-08-16 오후 4 04 24" src="https://user-images.githubusercontent.com/54147313/129524282-991ac81a-6d9e-43ab-a4bf-8569e08e9e30.png">


위의 이미지와 같이, box-sizing을 적용하지 않는 경우에는, border와 padding 속성에 의해서 사이즈가 커지게 된다. 

사이즈가 커지는 것을 방지하기 위해서 box-sizing 속성을 `border-box`로 설정해 주면 item 클래스에 설정된 가로 길이와 세로 길이 안에서 컨텐츠에 여백을 가져가게 된다. 
