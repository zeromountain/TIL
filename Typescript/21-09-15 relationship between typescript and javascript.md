# 1 타입스크립트와 자바스크립트의 관계 이해하기

타입스크립트와 자바스크립트의 관계를 이해하는 것은 자바스크립트 파일을 타입스크립트 파일로 마이그레이션하는데 도움이 됩니다

## 상위집합
![](https://media.vlpt.us/images/kihyeon8949/post/24233ac0-1800-4985-94f9-d8171b989bfd/1_UIioHehyD5o_6ydf3w2fuw.png)

[이미지](https://velog.io/@kihyeon8949/TypeScript-Why-TypeScript)와 같이 타입스크립트는 자바스크립트의 상위 집합임을 알 수 있습니다

- Typescript
  - 확장자명: `.ts`  `.tsx`
- Javascript
  - 확장자명: `.js`  `.jsx`

다른 확장자명을 사용하지만, 자바스크립트의 문법은 타입스크립트에 속해 있기 때문에 `.js` 확장자명을 `.ts`로 바꾼다고 큰 문제가 되지는 않습니다

하지만, 다음과 같은 typescript로 작성한 파일을 node로 실행하게 되면, 오류가 발생합니다

```ts
function greet(name: string) {
  console.log('Hello', name);
}
```

> #### 타입스크립트 파일을 node 환경에서 실행하기 위해선 자바스크립트 파일로 컴파일하는 과정이 필요

typescript가 javascript의 상위집합이지만, 위의 벤다이어그램에서도 볼 수 있듯이, 모든 typescript가 javascript인 것은 아닙니다

javascript만 사용한 사용자가 처음 typescript를 사용할 때, 가장 많이 발생하는 오류가 변수의 `undefined` 할당으로 인한 타입 에러입니다

typescript는 런타임에 발생할 수 있는 오류도 미리 체크하기 위해서 타입 추론이라는 기능을 제공합니다

그래서 다음과 같이 변수의 타입을 정확히 명시해주지 않으면, typescript는 `string|undefined`라고 타입을 추론하게 됩니다

```ts
let city = 'new york city';
console.log(city.toUppercase());
```

`city`라는 변수는 `undefined`일 가능성이 있기 때문에 `toUppercase` 메서드의 사용이 제한됩니다

이처럼 타입스크립트 컴파일 환경에서 오류가 발생하지 않더라도 런타임 환경에서 오류가 발생하는 경우가 있기 때문에 타입에 유의하면서 사용할 필요가 있습니다