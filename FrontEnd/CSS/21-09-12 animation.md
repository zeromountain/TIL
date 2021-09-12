# animation

- 다수의 스타일 전환을 가능하게 함
- transition과 비슷한 개념을 가지고 있지만, transition은 user의 액션이 있어야 하지만 animation은 자생한다

## @keyframes

- 함수처럼 animation 세트를 만들고 anmaition의 name으로 사용

**SYNTAX**

```css
@keyframes <name> {
  from { A 속성 }
  to {B 속성} 
}
```

```css
@keyframes <name> {
  0% {A 속성} /* 시작 */
  30% {B 속성} /* 30% 시간 */
  68%, 72% {C 속성} /* 68%, 72%의 시간 */
  100% {D 속성} /* 100%의 시간 */
}
```

## animation-name

- keyframes로 설정한 애니메이션을 실행

**SYNTAX**

```css
/* Single animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Global values */
animation-name: initial;
animation-name: inherit;
animation-name: revert;
animation-name: unset;
```

- global value 외에는 keyframes를 통해서 animation 세트를 생성해서 value 값을 설정 해야함
- global value의 사용은 지양하는 것이 좋다

**예제**

```css
.box {
  width: 100px;
  height: 100px;
  border: 10px solid seagreen;
  background-color: rgb(204, 253, 200);
  border-radius: 30px;

  animation: my-first-animation 2s infinite;
}

.box:hover {
  animation: my-first-animation 2s infinite;
}
@keyframes my-first-animation {
  0% {
    font-size: 20px;
  }
  50% {
    width: 300px;
    font-size: 80px;
  }
  100% {
    font-size: 20px;
  }
}
```

![animation3](https://user-images.githubusercontent.com/54147313/132978839-c40e24fb-2631-4221-884d-13ace4aafa09.gif)

## animation-duration

- 애니메이션의 한 사이클이 완료되는데 걸리는 시간을 설정

**SYNTAX**

```css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;
```

## animation-delay

- 애니메이션 시작을 지연시키는 시간 설정

**SYNTAX**
```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;
```

## animation-timing-function

- 애니메이션 효과의 시간을 제어하는 함수

**SYNTAX**
```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
```

**예제**
```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid rgb(206, 206, 206);
  background-color: rgb(204, 253, 224);
  border-radius: 30px;
}

.box1 {
  background-color: rgb(204, 253, 225);
  animation: my-first-animation 2s infinite;
  animation-delay: 0.2s;
}
.box2 {
  background-color: rgb(255, 221, 198);
  animation: my-first-animation 2s infinite;
  animation-delay: 0.5s;
}
.box3 {
  background-color: rgb(186, 239, 255);
  animation: my-first-animation 2s infinite;
  animation-delay: 0.7s;
}

@keyframes my-first-animation {
  0% {
    font-size: 20px;
  }
  50% {
    width: 300px;
    font-size: 80px;
  }
  100% {
    font-size: 20px;
  }
}
```

![animation1](https://user-images.githubusercontent.com/54147313/132978947-0dc89559-5cfd-480e-af45-f13ea196871b.gif)

- animation-delay를 사용해 시간 차로 요소들을 실행해 동적인 느낌을 살릴 수 있다

## animation-iteration-count

- 애니메이션 효과의 재생 회수를 조절

**SYNTAX**

```css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;

/* Global values */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: unset;
```

## animation-direction

- 애니메이션 효과가 재생되는 방향을 설정

**SYNTAX**

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

**예제**
```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid silver;
  border-radius: 50%;
  background-color: rgb(245, 255, 199);
}

.box {
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

![animation2](https://user-images.githubusercontent.com/54147313/132979171-e1dbbe45-4aa2-4004-8192-40ecd4a7a845.gif)


## animation-fill-mode

- 애니메이션의 실행 전과 후의 스타일 설정
- none, forwards, backwards, both

**SYNTAX**
```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

**예제**
```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid green;

}

.box {
  background-color: rgb(245, 255, 229);
  animation: fill-mode 3s linear 1s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
}

@keyframes fill-mode {
  0% {
    background-color: red;
  }
  50% {
    width: 200px;
    border: 1px solid white;
    border-radius: 50%;
  }
  100% {
    background-color: black;
  }
}
```

![animation4](https://user-images.githubusercontent.com/54147313/132979108-347a8a19-895f-4900-8a17-b2847bc5b7a7.gif)

1️⃣ 기존 스타일
2️⃣ keyframes의 첫번째 스타일(0%)
3️⃣ keyframes 진행중 스타일(50%)
4️⃣ keyframse 마지막 스타일(100%)
5️⃣ 기존 스타일
- forwards 👉 1-2-3-4
- backward 👉 2-3-4-5

## 짧은 회고

- transform, transition, animation을 학습하면서 개념적으로 아는 것과 실제로 코드로서 작성해서 확인해보면 알고 있던 개념과 다르게 동작하는 부분들이 많았다
- 개념들 위주로 학습하는 것보다 코드를 짜서 확인해보는 것이 더 효율적이라고 생각이 들었고 학습했던 내용들을 지속적으로 실습하면서 손에 익혀야겠다
