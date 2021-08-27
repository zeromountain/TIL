# Realationship btween HTML and CSS and Javascript


```html
<style>
.btn {
  background-color: black;
  color: white;
}
</style>
<body>
  <input type="text"/>
  <button class="btn">등록</button>
  <script>
    const btn = document.querySelector(".btn");
    btn.addEventListener('click', function () {
      console.log('버튼을 클릭하면 콘솔이 찍힙니다.')
    });
  </script>
</body>
```

> [구조] HTML: 웹 문서의 기본적인 구조
> - `<body>` 태그에서 `<script>`태그를 제외한 모든 요소
> 
> [표현] CSS: HTML 각 요소들의 레이아웃과 스타일링
> - `<style>` 태그와 같이 CSS 문법을 사용해서 HTML 요소의 디자인을 제작
> 
> [동작] Javascript: 웹 페이지 사용자와의 상호작응을 위한 동적인 요소(ex. 버튼 클릭, 마우스 움직임...) ➡ 주로 이벤트 
> - `<script>` 태그와 같이 JS 문법을 사용해 HTML 요소들의 동작과 이벤트 처리를 어떻게 할지 결정

- HTML과 CSS가 분리되지 않는다면??
  - HTML의 구조는 동일한데 CSS 스타일만 다를 경우, 두 개의 HTML 파일을 만들어야 함
- 반면, HTML과 CSS를 분리한다면
  - 같은 구조의 HTML 하나를 CSS 스타일만 다르게 적용
  - 다른 구조의 HTML 파일들에서 하나의 CSS 스타일 공유
