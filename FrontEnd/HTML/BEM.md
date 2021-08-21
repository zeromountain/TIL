# BEM

`BEM`이란

- Block
- Element
- Modifier

의 약어로, HTML의 클래스명을 작성하는 방법에 대해서 정의한 규칙을 말한다. 

## How To

`block명__element명--modifier명`

만약 어떤 카드 컴포넌트에 여러 가지 엘리먼트를 포함하고 있다면,

- `.card`
  - `.card--dark` (+modifier)
- `.card__img`
- `.card__title`
- `.card__description`
- `.card__button`
  - `.card__button--blue` (+modifier)

위의 예시와 같이 클래스를 작명할 수 있다. 

- **block**: 블록(박스) 단위의 컴포넌트
- **element**: 블록 내부의 개별 요소들
- **modifier**: element의 속성
