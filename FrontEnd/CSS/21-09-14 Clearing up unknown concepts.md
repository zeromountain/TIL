# 모르는 개념 정리


## accent-color 

- accent는 강조하다는 의미를 가지고 있다

- 마찬가지로, accent-color 속성 역시 HTML element의 color를 강조하는 속성을 말한다

- input 요소의 checkbox 타입과 radio 타입의 selector를 강조하기 위해서 많이 사용되며

- 다크모드를 구현하는 작업에서도 요소를 강조하기 위해서 유용하게 사용된다


**SYNTAX**
```css
/* Keyword values */
accent-color: auto;

/* <color> values */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);
```

**예제**

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

## var()

- `var()`는 CSS 함수로서 커스텀한 속성을 사용할 수 있도록 한다 🤩


**SYNTAX**
```css
var( <custom-property-name> , <declaration-value>? )
```

**예제**
```css
*{
  background: red;
  background: var(--accent-color, orange);
}
```

- 배경색을 커스텀한 `accent-color`인 oragne로 지정

## @supports

- 사용하는 브라우저가 조건의 기준을 만족하면 해당 스타일을 적용한다

**SYNTAX**
```css
@supports (propertyName: propertyValue) {
  ...
}
```

- propertyName에 propertyValue를 브라우저가 적용할 수 있는 환경이면 `@supports` 영역의 스타일을 적용한다

**예제**
```css
html { background: blue; }
@supports (--css: variables) {
  html { background: yello; }
} 
```

## prefers-color-shceme

-  사용자가 라이트 tehme이나 다크 theme 중 어느것을 선호하는지 탐지

**SYNTAX**
```css
@media (prefers-color-scheme: <theme>) {
  ...
}
```

- `no-preference`: 사용자가 선호하는 테마를 참조할 수 없음(알 수 없음) 🙄
- `light`: 사용자가 light 테마를 선호함
- `dark`: 사용자가 dark 테마를 선호함

**예제**
```css
@media (prefers-color-scheme: dark) {
  body { color: #ccc; background: #000; }
  a { color: #fff; }
}

@media (prefers-color-scheme: light) {
  body { color: #333; background: #fff; }
  a { color: #333; }
}
```

- 사용자가 다크모드를 선호할때 
  - body의 폰트 색상을 `#ccc`로 배경색을 `#000`로 설정
  - a의 폰트 색상을 `#fff`로 설정
- 사용자가 라이트모드를 선호할때
  - body의 폰트 색상을 `#333`으로 배경색을 `#fff`로 설정
  - a의 폰트 색상을 `#333`으로 설정

## 오답정리

```html
<div class="flex">
  <span><img src="./gomgom.jpeg" alt="곰곰이" /></span>
  <div><img src="./gomgom.jpeg" alt="곰곰이" /></div>
</div>
```
```css
.flex {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  background: skyblue;
}
img {
  width: 50px;
  height: 50px;
}
```
<img width="301" alt="스크린샷 2021-09-14 오후 1 12 26" src="https://user-images.githubusercontent.com/54147313/133193810-7a7809d0-2d7e-42af-8aa3-ae4de23793a0.png">

```css
.flex {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  background: skyblue;
}

img {
  width: 50px;
  height: 50px;
}

.flex div {
  align-self: flex-end;
}
```
<img width="299" alt="스크린샷 2021-09-14 오후 1 13 15" src="https://user-images.githubusercontent.com/54147313/133193899-e97fdd58-3f56-4130-8862-709076323727.png">

- 위 문제의 답으로 뭘 적었는지 기억이 나지 않지만...
- 문제를 다시 풀어보니 `align-self` 속성으로 개별 아이템에만 `flex-end` 값을 적용할 수 있었다

> 참조: mdn, [web.dev](https://web.dev/accent-color/)
