# Transform
<dl>
  <dt>transform</dt>
  <dd>rotate, scale, move, skew 등의 값을 통해서 원형의 요소를 변형시키는 방법</dd>
</dl>

```css
transform: translateX(10px) rotate(10deg) translateY(5px);
```
- 오른쪽에서부터 왼쪽으로 transform 값들을 순서대로 적용

## scale

> 요소의 크기를 조절하는 속성


**예제**

```css
#shiba {
  width: 400px;
  transform: scale(0.5, 1.5);
}
```

![스크린샷 2021-09-10 오후 9 50 15(2)](https://user-images.githubusercontent.com/54147313/132855966-9c64f6de-9e60-4be0-ad95-5932117044fe.png)

- scale 함수는 두개의 x축 값, y축 값의 두개의 인자를 갖는다
  - 인자를 하나만 입력할 경우, x축 기준
  - 위의 코드는 해당 요소의 너비 400px에 0.5배한 200px의 너비
 높이 400px에 1.5배 한 600px의 높이를 가진다
- 요소가 작아지면 원본의 크기 영역을 그대로 가진 상태로 작아진 만큼의 영역을 여백으로 처리
- 반대로 요소가 커지는 경우에는 다른 요소의 영역을 침범할 수 있다
 
## rotate

> 요소의 원점을 중심으로 시계 방향과 시계 반대 방향으로 회전시키는 속성

**예제**
```css
#shiba {
  width: 400px;
  margin: 100px;
  
  transform: rotate(45deg);
}
```

![스크린샷 2021-09-10 오후 5 37 51](https://user-images.githubusercontent.com/54147313/132859946-ffafe429-b38a-4dd9-977c-b9744e45d5c9.png)

- 각도 단위를 사용
- 양수 👉 시계 방향
- 음수 👉 시계 반대 방향

## translate

> 요소를 수평|수직 이동시키는 속성

**SYNTAX**
```css
translate(<length-percentage> , <length-percentage>?)
```
- 두번째 인자는 없어도 괜찮다

**예제**
```css
#shiba {
  width:  400px;
  margin: 100px;
  
  transform: translate(100px, 50px);
}
```

![스크린샷 2021-09-10 오후 5 49 17](https://user-images.githubusercontent.com/54147313/132862457-bf7555f8-27ff-4074-b01c-da33e569d2f5.png)

- 좌측 상단의 꼭지점을 기준으로 x축으로 100px, y축으로 50px 이동

## skew

> 요소의 기울기를 조절하는 속성

**SYNTAX**
```css
/* 인자 1개 */
skew(ax)

/* 인자 2개 */
skew(ax, ay)
```

**예제**
```css
img {
  width: 200px;
}

#shiba {
  width: 200px;

  transform: skew(45deg);
}
```

![스크린샷 2021-09-10 오후 5 59 34](https://user-images.githubusercontent.com/54147313/132865091-4457e67d-d1af-4e06-aa9b-086786be60b3.png)


- skew 속성이 적용된 요소는 우측 z축(사선)으로 45도 길울어짐

## transfrom-origin

> 요소의 원점의 위치를 변경하는 속성
> 
> 기본값 center(50%, 50%)

**예제**
```css
#shiba {
  width: 400px;
  margin: 100px;
  
  transform: scale(1.3);
  transform-origin: top left;
}
```

![스크린샷 2021-09-10 오후 6 18 41](https://user-images.githubusercontent.com/54147313/132865518-36b57257-3ed6-48ae-8769-5a7c8fd77fb5.png)

- 원점이 좌측 상단을 기준으로 기존 요소의 크기에 1.3배 증가
