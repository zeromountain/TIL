# 글자와 상자

HTML은 이미지를 제외한 나머지는 글자와 상자로 표현할 수 있으며, 이 두 요소는 화면에 출력되는 특징을 가지고 있다. 

여기서 글자에 해당하는 요소를 인라인 요소라고 부르고, 상자에 해당하는 요소는 블록 요소라고 부른다.

## 인라인 요소: 텍스트를 위한 요소

인라인 요소의 대표적인 태그는 다음과 같다. 

- `span`
- `img`
- `a`
- `label`

```html
<span>Hello</span>
<span>Github</span>
```

```text
Hello Github
```

> 인라인 요소는 요소가 수평적으로 쌓인다.

> 인라인 요소끼리의 줄바꿈은 띄어쓰기로 인식된다. (인라인 요소 태그는 하나의 글자로 취급)

> 위와 같은 경우, `Hello Github`로 `span`태그 사이의 줄바꿈을 띄어쓰기로 해석한다. 

> 인라인 요소는 글자의 크기만큼의 크기를 가지기 때문에 CSS의 너비와 높이 속성이 적용되지 않는다.
> 또한, margin과 padding 같은 경우에도 좌,우 여백은 적용이 되지만, 위,아래 여백은 적용되지 않는다.

> 인라인 요소의 하위 요소로 블록 요소를 넣을 수 없다. 


## 블록 요소: 레이아웃을 만들기 위한 요소

블록 요소의 대표적인 태그는 다음과 같다.

- `div`
- `p`
- `h1~h6`
- `ul`, `ol`
- `li`

```html
<div>Hello</div>
<div>Github</div>
```

```text
Hello
Github
```

> 블록 요소는 수직으로 쌓인다.

> 블록 요소의 너비는 부모 요소의 크기만큼 자동으로 늘어나는 특징을 가진다.

> 반면에 블록 요소의 세로, 높이는 해당 요소의 컨텐츠의 크기만큼 줄어드는 특징을 가진다.

> 블록 요소는 하위 요소로 블록 요소와 인라인 요소 모두를 포함할 수 있다. 

