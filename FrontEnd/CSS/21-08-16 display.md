# display

element를 화면에 어떻게 출력할지 적용하는 속성

- blcok: 박스 (공간)
- inline: 글자 (대상)
- inline-block: 글자 + 박스
- flex: 플렉스 박스(1차원 레이아웃)
- grid: 그리드 ( 2차원 레이아웃 )
- none: 화면에서 사라짐
- tabel, table-row, table-cell ...

```html
<span>Hello World!</span>
```

```css
/* 브라우저 기본 css 리셋  */
body {
  margin: 20px
}

span {
  display: blcok;
  width: 120px;
  height: 30px;
  background-color: royalblue;
  color:white
}
```

- display 설정하지 않은 경우
<img width="167" alt="스크린샷 2021-08-16 오후 5 01 26" src="https://user-images.githubusercontent.com/54147313/129531286-91e05848-9398-40c2-894c-938eaa2e8a87.png">


- display 설정한 경우
<img width="196" alt="스크린샷 2021-08-16 오후 5 01 43" src="https://user-images.githubusercontent.com/54147313/129531295-6f95ceb7-464e-48fc-9387-41c092bcb096.png">
