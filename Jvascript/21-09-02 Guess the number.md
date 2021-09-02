# Guess the Number
## Pseudo Code
1️⃣ 1에서 100 사이의 난수 생성

2️⃣ 유저에게 번호를 추측할 수 있는 정보 제공

3️⃣ 유저가 추측한 번호를 기록 (10번의 턴)

4️⃣ 추측한 번호가 생성된 번호와 같은지 확인

5️⃣ 추측한 번호와 생성된 번호가 같은 경우
- 축하 메시지 표시
- 예측 번호를 제출할 수 없도록 비활성화
- 재시작 할 수 있는 버튼 생성

6️⃣ 예측이 틀리고 유저의 턴이 남은 경우
- 유저에게 예측한 숫자가 정답보다 높은 수인지 낮은 수인지 정보 제공
- 다른 에측 번호 입력 가능
- 턴 수 1 증가

7️⃣ 에측이 틀리고 유저의 턴이 남지 않은 경우
- 유저에게 게임이 종료되었음을 알림
- 예측 번호를 제출할 수 없도록 비활성화
- 재시작 할 수 있는 버튼 생성


## Code
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input type="text" id="guessField" class="guessField">
      <input type="submit" value="Submit guess" class="guessSubmit">
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>
  </body>
</html>
```

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

## analysis
### 데이터를 저장할 변수
```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
```

- `Math`: Math 객체로서 수학과 관련된 메서드를 활용할 수 있음
  - `floor`: 소수 자리 버림 메서드
  - `random`: 0부터 1미만의 부동소숫점 의사난수 반환하는 메서드
- `document`: HTML 문서의 노드 집합
  - `querySelector('<선택자>')`: 선택자와 일치하는 첫번째 요소 반환하는 메서드

### 조건부
```js
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
```
- `guesses.textContent`: `guesses` 변수가 가르키는 HTML 요소의 chidren 요소 추가하는 메서드
- `lastResult.style.backgroundColor`: `lastResult`변수가 가르키는 HTML 요소의 백그라운드 스타일 속성을 `green` 으로 설정하는 메서드

### 이벤트
```js
guessSubmit.addEventListener('click', checkGuess);
```
- `guessSubmit.addEventListener(<이벤트>, 실행할 함수)`: `guessSubmit` 변수가 가르키는 HTML 요소에 이벤트 등록하는 메서드
  - submit 버튼을 클릭하면 `cehckGuess` 함수가 실행된다

### 기능 종료
```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```
- `guessField.disabled`, `guessSubmit.disabled`: `guessField`와 `guessSubmit` HTML 요소 비활성화
- `document.createElement('<요소>')`: DOM 트리에 새로운 요소 노드 생성
- `document.body.append(resetButton)`: `resetButton`변수의 요소를 body 노드에 추가
- `document.querySelectorAll('.resultParas p')`: 클래스명이 `resultParas`인 요소의 자식요소인 모든 p 요소 반환
- `guessField.value = ''`: `guessField` 요소의 value 값 초기화 ➡️ 인풋창을 빈창으로
- `guessField.focus()`: `geussFiled` 요소의 포커싱 유지
