# 웹 접근성

## 웹 접근성이란

- 웹페이지의 사용자에게 누구나 동등한 서비스 제공을 보장하는 것

### 웹 접근성의 좋은 사례

- 애플
- 구글

[스크린 리더의 사용을 고려한 테이블 설계](https://www.youtube.com/watch?v=npto50RJpDc)

## 웹 접근성성의 실태

[한국지능정보사회진흥원](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99873&bcIdx=23191&parentSeq=23191)

## 웹 접근성 오류 12

### 1. 적절한 대체 텍스트 제공

- 텍스트가 아닌 콘텐츠의 목적성을 명시해 사용자에게 제공
  - ex) 이미지의 alt 속성
- 문맥을 통해 설명이된 내용에 대해서 대체 텍스트 사용 지양
  - 중복된 내용으로 스크린리더 사용자의 편의성 ↓

### 2. 반복 영역 건너뛰기

- 반복되는 콘텐츠를 우회할 수 있는 경로 제공

### 3. 표의 구성

- 화면에 전달하는 정보, 구조 관계는 텍스트로 변환하거나 기계가 인식할 수 있어야 함
- 표는 이해하기 쉡기 구성

```html
<table>
  <caption>
    표의 제목을 설명
  </caption>
  <thead>
    <tr>
      <th scope="col">셀 제목</th>
      <th scope="col">셀 제목</th>
      <th scope="col">셀 제목</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">셀 제목</th>
      <td>내용</td>
      <td>내용</td>
    </tr>
    <tr>
      <th scope="row">셀 제목</th>
      <td>내용</td>
      <td>내용</td>
    </tr>
  </tbody>
</table>
```

- 스크린 리더는 `caption`을 해석해 사용자에게 테이블이 무엇을 설명하는 테이블인지 전달
- 스크린 리더는 `th`를 해석해 각 셀이 무엇을 설명하는 셀인지 사용자에게 전달
- 스크린 리더는 `scope` 속성을 통해서 사용자에게 테이블 셀의 관계를 전달
  - `col` → 행
  - `row` → 열

### 4. 레이블 제공

- 콘텐츠가 사용자 입력을 요구할 때 레이블 또는 설명을 제공
  - ex) `input` 요소의 `placeholder` 속성 대신 `label` 요소 사용

```html
<input value="아이디" /> ❌ <input placeholder="아이디" /> ❌

<input id="user_id" />
<label for="user_id">아이디</label> 👏

<input aria-label="아이디" /> ⭕️
<!-- 권장되지 않는 방법 -->
```

### 5. 자막 제공

- 녹음된 음성 콘텐츠(멂티미디어 콘텐츠)에 동기화된 자막, 대본 또는 수화를 제공
  - ex) 유튜브 자막
- 대본과 수화는 국내에서 통용

### 6. 제목 제공

- 웹 페에지는 주제나 목적을 설명하는 제목(title)이 있어야 함
- 제목(heading)과 레이블은 주제 또는 목적을 설명
- 제목(title)은 검색엔진과 스크린리더에게 주요한 영향을 미침
- 제목(heading)은 각 페이지의 제목을 설명할 때 사용
  - 스크린리더 사용자에게 페이지의 목차 제공
- iframe의 제목

```html
<ifram src="*.html"></ifram> ❌

<iframe src="*.html" aria-label="설명"></iframe> 👏
<iframe src="*.html" aria-label="빈 프레임"></iframe> 👏
```

### 7. 정지 기능 제공

- 콘텐츠에 시간 제한이 설정되어 있다면 다음 요소중 하나를 만족
  - 끄기, 조절, 연장
  - ex) 이미지 캐러셀
- 스크린 리더의 사용자는 자동으로 넘어가는 콘텐츠 내용에 취약

### 8. 키보드 사용 보장

- 콘텐츠의 모든 기능은 개인적인 타이핑 속도에 구애 받지 않고 키보드 인터페이스를 이용하여 조작이 가능해야 함
  - ex) 서브 메뉴, 툴팁
- 마우스에 대한 기본 동작들이 키보드로 접근했을 때 사용 가능하도록
- 장치 독립적 이벤트 핸들러 → 키보드와 마우스의 동등한 사용 보장
  - onblur
  - onchange
  - onclick
  - onfocus
  - oninput
  - onselect

### 9. 초점 이동

- 키보드 인터페이스를 이용하여 페이지 구성 요소로 포커스 이동이 가능하다면 포커스는 키보드 인터페이스 만으로 구성 요소로부터 떠날 수 있어야 함
- 키보드 조작 가능한 모든 사용자 인터페이스는 키보드 포커스 표시가 보이는 방식으로 제공
  - ex) 텍스트에디터, 로그인화면
  - outline 제거 지양

### 10. 텍스트 콘텐츠의 명도 대비

- 문자와 문자 이미지의 시각적인 표현은 최소 4.5(전경색):1(배경색)의 명암 대비를 부여

### 11. 기본 언어 표시

- 모든 웹페이지의 기본 휴먼 랭귀지는 기계적으로 판단할 수 있어야 함
- 웹페이지에서 주로 사용하는 언어를 명시

### 12. 오류 정정

- 만약 입력 오류가 자동으로 감지되면 오류 항목을 식별하고 사용자에게 문자로 전달하고 의견을 제공
  - ex) 로그인 화면에서 이메일 형식과 맞지 않은 문자 입력 시 오류 제공

## 본인이 생각했을 때, 접근성이 좋지 않은 테이블이 있는 웹페이지를 선정

- 모두의 셔틀

![](https://i.ibb.co/LP3XPP0/2021-10-05-1-33-15.png)

## 웹표준 준수 및 웹접근성 관점에서 기존 서비스의 문제점 분석

- 테이블의 제목을 `div` 요소로 명시
- `thead` 하위 `tr` 요소의 항목이 비구조적
- `th`요소에 `scope` 속성 미사용
- 다른 이동 수단과의 비교를 디자인적 측면에서만 적용
- 배경색과 전경색의 컬러 일치

## 해당 이슈를 WCAG 가이드라인에 맞춰 수정 계획 선정

- 테이블의 제목을 `table` 요소의 첫번째 자식 요소로 `caption` 요소를 사용해 테이블의 제목을 명시적으로 표현
  - `summary` 속성은 HTML5 표준에 벗어난 속성이기 때문에 사용하지 않음
  - 또한, `summary` 속성과 `caption` 요소를 사용해 테이블을 성명하는 것은 스크린 리더의 사용자 입장에서 같은 내용을 두 번 반복해 전달할 것이라고 생각함
- `thead` 요소의 `tr`의 하위 요소를 `td` 요소를 `th` 요소로 각 행의 제목 셀을 설정
- `th` 요소에 `scope` 속성을 사용해 해당 셀들의 행과 열의 관계를 표현
- `colgroup` 요소를 사용해 열을 그룹화해 다른 이동 수단과 명시적으로 비교하도록 마크업
- 배경색과 전경색의 컬러 구분

## 웹접근성 관련 체크리스트

### 인식의 용이성

- 적절한 대체 텍스트
- 자막 제공
- 색에 무관한 콘텐츠 인식
- 명확한 지시사항 제공
- 텍스트 콘텐츠의 명도 대비
- 자동 재생 금지
- 콘텐츠 간의 구분

### 운용의 용이성

- 키보드 사용 보장
- 키보드 사용시 초점 이동
- 조작 가능
- 응답 시간 조절
- 정지 기능 제공
- 깜빡임과 번쩍임 사용 제한
- 반복 영역 건너뛰기
- 제목 제공
- 적절한 링크 텍스트

### 이해의 용이성

- 기본 언어 표시
- 사용자 요구에 따른 실행
- 콘텐츠의 선형 구조
- 표의 구성
- 레이블 제공
- 오류 정정

### 견고성

- 마크업 오류 방지
- 웹 애플리케이션의 접근성 준수

## HTML/CSS를 활용하여 구현

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="웹접근성을 고려한 모두의셔틀 테이블 설계"
    />
    <title>모두의 셔틀 테이블 설계</title>
    <link rel="stylesheet" href="index.css" />
  </head>

  <body>
    <div class="container">
      <div>야탑역 ▶︎ 여의도역 출근 비교</div>
      <table class="table">
        <caption>
          이동수단 비교 표
        </caption>
        <colgroup></colgroup>
        <colgroup style="width:25%"></colgroup>
        <colgroup span="2" style="background-color: #E9EBEE;">
          <col stlye="width:25%" />
          <col style="width:25%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th class="blue" scope="col">모두의셔틀</th>
            <th scope="col">대중교통</th>
            <th scope="col">택시,자가용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">환승여부</th>
            <td class="ms">없음</td>
            <td>1회</td>
            <td>0회</td>
          </tr>
          <tr>
            <th scope="row">집 앞 탑승</th>
            <td class="ms">◦</td>
            <td>✕</td>
            <td>◦</td>
          </tr>
          <tr>
            <th scope="row">회사 앞 하차</th>
            <td class="ms">◦</td>
            <td>✕</td>
            <td>▵</td>
          </tr>
          <tr>
            <th scope="row">자면서 출근</th>
            <td class="ms">◦</td>
            <td>✕</td>
            <td>▵</td>
          </tr>
          <tr>
            <th scope="row">아침 스트레스</th>
            <td class="ms">없음</td>
            <td>꽉찬 지하철</td>
            <td>꽉 막힌 도로</td>
          </tr>
        </tbody>
      </table>
      <div class="ref">※ 탑승시 집과 회사 근처에 정류장을 추가해 드립니다.</div>
    </div>
  </body>
</html>
```

### CSS

```css
body,
h1,
h2,
h3,
h4,
h5,
input,
select,
table,
textarea {
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.375;
  letter-spacing: -0.04em;
}

.container {
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
caption {
  display: none;
}

.table {
  border: 1px solid #e9ebee;
  border-collapse: collapse;
  border-spacing: 0px;
  text-align: center;
  margin-bottom: 8px;
}
.table thead th {
  color: #8c8c8c;
}

.table thead .blue {
  background-color: #4852e3;
  color: white;
}

.table tbody tr th,
td,
.table thead tr th {
  border: 1px solid #cbcbcb;
}

.table tbody th {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: #eafaff;
  color: #141960;
  height: 26.5px;
  vertical-align: middle;
}

.table tbody td {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #8c8c8c;
  height: 30px;
  vertical-align: middle;
}
.table tbody .ms {
  background-color: #ffffff;
  color: #1a202c;
}

.table tbody td:not(button, input) {
  line-height: 18px;
}
.ref {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: #8c8c8c;
  margin-left: -100px;
}
```

## 문법 검사 결과

![](https://i.ibb.co/yPLv25x/2021-10-05-4-53-29.png)

## 라이트 하우스에서 접근성 및 SEO 관련 분석 리포트 제출

![](https://i.ibb.co/4d154LD/2021-10-05-5-46-26.png)

- SEO는 `robots.txt`와 관련된 문제를 레퍼런스들을 참고해서 해결해보려 했으나 해결하지 못했지만 앞으로 개발자로서 해결해야할 문제이기 때문에 이후에도 지속적으로 문제를 해결할 예정

## 프로젝트 완료 후기

![](https://i.ibb.co/QdymtMQ/2021-10-05-5-54-55.png)

- 모두의 셔틀을 라이트 하우스로 검사했을 때, 다음과 같은 지표를 확인할 수 있었다
- 처음에는 상용화 중인 서비스의 최적화가 이 정도 수준인걸 보고서 모두의 셔틀 개발자들이 군기가 빠졌다라는 생각을 했고
- 전체 페이지에서 테이블만 가져와서 최적화를 하는데도 최적화가 완벽하게 안되는 경험을 하면서 내 자신의 섣부른 판단과 선입견에 반성하는 시간을 가지게 되었다.
- 이번 시간을 계기로 더 웹 개발의 기본에 대해서 느끼게 되었고, 기본에 충실한 개발자가 되기 위해서 노력하자! 👉👍👏

> 참조
>
> [웹접근성과 웹표준](https://seulbinim.github.io/WSA/)
>
> [웹접근성 실태조사 보고서](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99873&bcIdx=23191&parentSeq=23191)
>
> [웹접근성 가이드 및 체크리스트](https://eunyoe.tistory.com/75)
>
> [WCAG 2.1](https://a11y.gitbook.io/wcag/)
>
> [WCAG 가이드라인](https://www.w3.org/TR/WCAG21/)
>
> [Web.dev](https://web.dev/)
>
> [robots.txt](https://velog.io/@byeol4001/robot.txt%EC%99%80-meta%ED%83%9C%EA%B7%B8%EC%9D%98-robots%EC%9D%98-%EC%B0%A8%EC%9D%B4)
>
> [구글 developers](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag?hl=ko)
>
> [검색엔진 최적화 robots.txt](https://djluna.tistory.com/6)
