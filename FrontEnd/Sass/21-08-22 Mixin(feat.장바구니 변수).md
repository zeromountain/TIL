# Mixin

`mixin`이란 여러 가지 속성을 한데 묶어서 변수로 사용할 수 있도록 도와주는 기능이다.

## How To
```scss
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include center;
    .item {
        @include center;
    }
}

.box {
    @include center;
}
```

- `@`와 `mixin`이라는 키워드를 통해서 center라는 장바구니 변수를 만든다. 
- 선택자 영역에서 해당 변수를 불러 올 때, `@include`라는 키워드를 사용한다. 

> CSS 컴파일

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

`@include center`라는 부분이 장바구니 변수의 속성들이 적용된 것을 확인할 수 있다. 

이와 같이, 여러 선택자 영역에서 중복되는 속성들이 있을 때, `@mixin`을 통해서 재사용 가능한 장바구니 변수로 만들어 사용하면 편리하다. 

### mixin 함수처럼 사용하기

```scss
@mixin box($size) {
    width: $size;
    height: $size;
    background-color: tomato;
}

.container {
    @include box(200px);
    .item {
        @include box(100px);
    }
}

.box {
    @include box(100px);
}
```

- `@mixin`을 함수처럼 `()` 인수를 받는 영역과 인수를 입력해주면 함수처럼 사용이 가능하다. 
- `box`라는 변수를 불러올 때, 함수를 실행하는 것처럼 `()`에 아규먼트를 입력해주면, 각각 입력된 아규먼트의 값대로 속성이 적용된다. 

> CSS 컴파일
```css
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: tomato;
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```

### 기본값 사용하기

```scss
@mixin box($size: 80px) {
    width: $size;
    height: $size;
    background-color: tomato;
}

.container {
    @include box(200px);
    .item {
        @include box;
    }
}

.box {
    @include box;
}

```

- 인수를 받는 부분에 기본값을 입력하면, 아규먼트를 입력해주지 않고 `box` 변수를 사용한 부분은 설정된 기본값이 적용된다.

> CSS 컴파일

```css
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 80px;
  height: 80px;
  background-color: tomato;
}

.box {
  width: 80px;
  height: 80px;
  background-color: tomato;
}
```

### 키워드 인수

```scss
@mixin box($size: 80px, $color: tomato) {
    width: $size;
    height: $size;
    background-color: $color;
}

.container {
    @include box(200px);
    .item {
        @include box($color: royalblue);
    }
}

.box {
    @include box;
}
```

- 두 개의 인수를 받는 변수를 불러 사용할 때, 두번째 인수만 입려하고 싶을 경우
- 위와 같이 키워드 인수를 활용해 호출한다. `@include box($color: royalblue)`

> CSS 컴파일

```css
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 80px;
  height: 80px;
  background-color: royalblue;
}

.box {
  width: 80px;
  height: 80px;
  background-color: tomato;
}
```
