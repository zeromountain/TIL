# validation

HTML5 유효성 검사를 위해서 [Nu HTML Checker](https://validator.w3.org/nu/)를 이용했다.

## `<sction><p>Hello World</p></section>`

<img width="1541" alt="스크린샷 2021-09-03 오전 10 12 13" src="https://user-images.githubusercontent.com/54147313/131935634-4ef11cf1-964e-436c-b874-a880fa3cf478.png">

- `<section>`은 일반 구획 요소
- `<section>`을 식별할 수단으로 주로 `<h1> ~ <h6>`를 자식 요소로 포함하지만 항상 그런 것은 아님
  - 단순히 요소의 콘텐츠를 외부와 구분해 단독으로 묶으려는 목적이라면 `<article>` 사용 권장
- `<section>` 요소를 일반 컨테이너로 사용하는 것을 지양
  - 스타일링이 목적이라면 👉 `<div>` 
  - 구획의 논리성적으로 나뉘어야 한다면 👉 `<section>`

## `<img src="naver.png">`

<img width="1552" alt="스크린샷 2021-09-03 오전 10 14 18" src="https://user-images.githubusercontent.com/54147313/131935713-d37028e8-fbbd-4524-bc7a-392afdf5c483.png">

- `src` 속성 `required` 👉 이미지의 경로
- `alt` 속성은 필수는 아니지만, 웹 접근성 측면에서 **매우 유용** 👉 이미지의 텍스트 설명
  - 이미지 엑박시에 `alt` 속성으로 입력한 텍스트로 대체
  - `alt` 속성의 값은 이미지를 명확히 표현할 수 있는 값으로 입력한다


## `<html>...</html>`

<img width="1545" alt="스크린샷 2021-09-03 오전 10 15 16" src="https://user-images.githubusercontent.com/54147313/131935771-5f26af1c-1034-4439-8171-f26d29bfa795.png">

- `<html>`은 HTML 문서의 루트 요소
  - HTML의 모든 다른 요소는 `<html>`의 자식 요소
- 웹 접근성 측면에 `lang` 속성을 지정해줘야 스크린 리더의 음성 표현에 사용할 언어 선택에 도움이 됨
  - `<head>`와 `<title>`과 같이 중요한 메타 데이터의 전달



## `<article><h3>Hell World</h3></article>`

<img width="1542" alt="스크린샷 2021-09-03 오전 10 16 38" src="https://user-images.githubusercontent.com/54147313/131935889-60a2fba0-5c0b-418e-addd-7fee23c3ebd7.png">

- `<article>` 요소는 페이지 내에서 독립적으로 구분해 재사용할 수 있는 구획
  - 게시판, 블로그, 매거진, 뉴스
- `<article>` 요소를 식별하는 수단으로, 제목(`<h1> ~ <h6>`) 요소를 자식 요소로 포함
  - `<article>`의 자식 요소로 `<article>` 사용 가능
    - 작성자 정보를 위한 `<address>` 사용이 가능하지만, 중첩된 `<article>`에는 적용되지 않음

## 회고

지금까지 HTML 문서를 작성할때, 웹표준과 웹접근성에 근거해 HTML 코드를 유효성 검사를 전혀 하지 않았는데 😱

이번 기회를 통해서 HTML 코드의 유효성 검사가 사용자의 웹 애플리케이션 사용에 큰 영향을 끼칠 수 있다는 것을 느끼게 되었다 😂
