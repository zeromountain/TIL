# transition

- transition 효과는 transform 효과와 달리 시간 개념을 포함하고 있다
- from A to B: 영어 문법처럼 A 상태에서 B 상태로 전환되는 모습을 시간 간격을 주어서 표현하는 방법
- 예를 들어, A가 배경색이 red인 상태이고 B가 배경색이 blue인 상태라면, red -> blue 로 바뀌는 변환 과정에 transition 효과를 넣어 생동감있게 표현할 수 있다

## transition-property

- 특정 프로퍼티에 transition 효과를 선택적으로 적용

**SYNTAX**
```css
transition-property: none;
transition-property: all;
transition-property: margin;
```

- 어떤 속성에도 transition 효과를 적용하지 않겠다
- 모든 속성에 transition 효과를 적용하겠다
- margin 속성에 transition 효과를 적용하겠다
  - 기본 프로퍼티 외에도 [커스텀](https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident) 프로퍼티도 사용 가능 

## transition-duration

- transition 효과의 동작 시간을 설정
  - transition 항목 작성 위치에 유의

**SYNTAX**
```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: unset;
```

- 1000ms = 1s(1초)
- time value는 transition 효과가 적용되는 속성들을 duration 적용한 시간 만큼 효과가 지속
  - 여러개의 값을 갖는 경우에는 transition-porperty에 입력한 속성에 1:1 대응
- global value => globalvalue에 대한 실습을 추가적으로 해봐야 🙀
  - inherit: duration 속성을 상속
  - initial: 0s
  - revert: 돌아가는 것(?)
  - unset: 설정 해제

## transition-delay

- transition 효과를 지연
  - delay가 먼저 발생하고 duration이 이후에 발생

**SYNTAX**
```css
/* <time> values */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Global values */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
```

- time value 👉 transition-duration과 같다
- global value 👉 
  - inherit: 상속
  - initial: 초기값 0s
  - unset: 설정 해제 

## transition-timing-function

- transition 효과의 영향을 받는 CSS 속성에 대해 중간 값이 계산되는 방식을 설정

**SYNTAX**
```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
```

- ease: 기본값으로 중간에서 빨라졌다가 끝에서 다시 느려짐
- ease-in: 천천히 시작해서 완료시까지 속도가 증가
- ease-out: 빠르게 시작해서 완료시까지 속도가 감소
- ease-in-out: 느리게,빠르게,느리게
- linear: 일정한 속도 

**예제**
```css
.box {
  width: 300px;
  height: 100px;
  background-color: dodgerblue;
  font-size: 50px;
  color: white;

  transition-property: background-color;
  transition-duration: 2s;
  transition-property: all;
  transition-duration: 3s;
  transition-timing-function: ease-out;
}

.box:hover {
  width: 340px;
  background: fuchsia;
  color: black;
  font-size: 60px;
}
```

![transition1](https://user-images.githubusercontent.com/54147313/132977506-f9ea1397-cc4c-4615-a83d-bd776e1e6aca.gif)

```css
.box {
  width: 100px;
  height: 100px;
  border: 10px solid skyblue;
  background-color: dodgerblue;
  border-radius: 30px;

  transition: all 1s ease-in-out;
  transform-origin: bottom right;
}

.box:hover {
  transform: rotate(360deg) translate(10px, 10px);
}
```

![transition2](https://user-images.githubusercontent.com/54147313/132977533-ef5e11cc-c2f0-4f62-abe4-f97bcf39c880.gif)
