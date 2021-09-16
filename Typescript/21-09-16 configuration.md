# 타입스크립트 설정 이해하기

자바스크립트는 `node`라는 실행명령어를 통해서 자바스크립트 파일을 터미널 환경에서 실행해 볼 수 있습니다.

반면에, 타입스크립트를 실행하기 위해서는 자바스크립트로 컴파일하는 작업이 필요합니다. 

타입스크립트는 `tsc`라는 명령어를 통해서 자바스크립트 파일로 컴파일이 가능합니다.

```ts
function sum (a:number, b: number): number {
  return a + b;
}
```

위의 코드와 같이 작성된 타입스크립트 파일을 `tsc`를 이용해 컴파일을 하면,

```js
"use strict";
function sum(a, b) {
    return a + b;
}
```

다음과 같은 자바스크립트 파일로 컴파일 해줍니다.

## tsconfig.json

타입스크립트를 처음 다루다보면 컴파일 시의 오류로 상당히 고통을 받게 되는데, 자질구레한(?) 무시하고 컴파일을 진행해도 될만한 부분들은 `tsc` 명령어를 사용할때 옵션을 추가해주면 해당 옵션의 내용을 참고해 컴파일을 합니다.

```ts
function sum(a, b) {
  return a + b;
}
sum(10, null);
```

예를 들어, 위의 코드를 `tsc`를 통해서 컴파일 했을때, 자바스크립트 파일로 무리없이 컴파일 됩니다.

하지만, 위의 코드는 자바스크립트의 코드와 전혀 다를게 없고, 이를 인용해준다면 타입스크립트를 사용하는 의마가 없어집니다.

그래서 타입스크립트는 컴파일시에 다양한 옵션을 제공함으로써, 타입체커로서의 역할을 온전히 다 할 수 있도록 도와줍니다.

컴파일 옵션은 CLI 환경에서도 `tsc --noImplicitAny <program.ts>`와 같이 `tsc` 명령어를 통해서 컴파일이 가능합니다.

하지만 많은 옵션을 필요로 하게 될 경우에 이는 한계가 있습니다.

그렇기 때문에, 타입스크립트로 작업을 한다면 `tsconfig.json`을 설정해 더 나은 환경에서 타입스크립트를 활용할 수 있도록 준비해야 합니다.

물론, `tsc --init`을 통해서 초기화를 한다면 다음과 같은 `tsconfig.json` 파일을 제공합니다.

```json
{
  "compilerOptions": {
  // 옵션은 아래와 같은 형식으로 구성되어 있습니다.
  // "모듈 키": 모듈 값 /* 설명: 사용가능 옵션 (설명이 "~ 여부"인 경우 'true', 'false') */
  /* 기본 옵션 */
  // "incremental": true, /* 증분 컴파일 설정 여부 */
  "target": "es5", /* 사용할 특정 ECMAScript 버전 설정: 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'. */
  "module": "commonjs", /* 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
  // "lib": [], /* 컴파일에 포함될 라이브러리 파일 목록 */
  // "allowJs": true, /* 자바스크립트 파일 컴파일 허용 여부 */
  // "checkJs": true, /* .js 파일의 오류 검사 여부 */
  // "jsx": "preserve", /* JSX 코드 생성 설정: 'preserve', 'react-native', 혹은 'react'. */
  // "declaration": true, /* '.d.ts' 파일 생성 여부. */
  // "declarationMap": true, /* 각 '.d.ts' 파일의 소스맵 생성 여부. */
  // "sourceMap": true, /* '.map' 파일 생성 여부. */
  // "outFile": "./", /* 단일 파일로 합쳐서 출력합니다. */
  // "outDir": "./", /* 해당 디렉토리로 결과 구조를 보냅니다. */
  // "rootDir": "./", /* 입력 파일의 루트 디렉토리(rootDir) 설정으로 --outDir로 결과 디렉토리 구조를 조작할 때 사용됩니다. */
  // "composite": true, /* 프로젝트 컴파일 여부 */
  // "tsBuildInfoFile": "./", /* 증분 컴파일 정보를 저장할 파일 */
  // "removeComments": true, /* 주석 삭제 여부 */
  // "noEmit": true, /* 결과 파일 내보낼지 여부 */
  // "importHelpers": true, /* 'tslib'에서 헬퍼를 가져올 지 여부 */
  // "downlevelIteration": true, /* 타겟이 'ES5', 'ES3'일 때에도 'for-of', spread 그리고 destructuring 문법 모두 지원 */
  // "isolatedModules": true, /* 각 파일을 분리된 모듈로 트랜스파일 ('ts.transpileModule'과 비슷합니다). */
  /* 엄격한 타입-확인 옵션 */
  "strict": true, /* 모든 엄격한 타입-체킹 옵션 활성화 여부 */
  // "noImplicitAny": true, /* 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부 */
  // "strictNullChecks": true, /* 엄격한 null 확인 여부 */
  // "strictFunctionTypes": true, /* 함수 타입에 대한 엄격한 확인 여부 */
  // "strictBindCallApply": true, /* 함수에 엄격한 'bind', 'call' 그리고 'apply' 메소드 사용 여부 */
  // "strictPropertyInitialization": true, /* 클래스의 값 초기화에 엄격한 확인 여부 */
  // "noImplicitThis": true, /* 'any' 타입으로 구현된 'this' 표현식 에러처리 여부 */
  // "alwaysStrict": true, /* strict mode로 분석하고 모든 소스 파일에 "use strict"를 추가할 지 여부 */
  /* 추가적인 확인 */
  // "noUnusedLocals": true, /* 사용되지 않은 지역 변수에 대한 에러보고 여부 */
  // "noUnusedParameters": true, /* 사용되지 않은 파라미터에 대한 에러보고 여부 */
  // "noImplicitReturns": true, /* 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러보고 여부 */
  // "noFallthroughCasesInSwitch": true, /* switch문에서 fallthrough 케이스에 대한 에러보고 여부 */
  /* 모듈 해석 옵션 */
  // "moduleResolution": "node", /* 모듈 해석 방법 설정: 'node' (Node.js) 혹은 'classic' (TypeScript pre-1.6). */
  // "baseUrl": "./", /* non-absolute한 모듈 이름을 처리할 기준 디렉토리 */
  // "paths": {}, /* 'baseUrl'를 기준으로 불러올 모듈의 위치를 재지정하는 엔트리 시리즈 */
  // "rootDirs": [], /* 결합된 컨텐츠가 런타임에서의 프로젝트 구조를 나타내는 루트 폴더들의 목록 */
  // "typeRoots": [], /* 타입 정의를 포함할 폴더 목록, 설정 안 할 시 기본적으로 ./node_modules/@types로 설정 */
  // "types": [], /* 컴파일중 포함될 타입 정의 파일 목록 */
  // "allowSyntheticDefaultImports": true, /* default export이 아닌 모듈에서도 default import가 가능하게 할 지 여부, 해당 설정은 코드 추출에 영향은 주지 않고, 타입확인에만 영향을 줍니다. */
  "esModuleInterop": true, /* 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부, 'allowSyntheticDefaultImports'를 암시적으로 승인합니다. */
  // "preserveSymlinks": true, /* symlik의 실제 경로를 처리하지 않을 지 여부 */
  // "allowUmdGlobalAccess": true, /* UMD 전역을 모듈에서 접근할 수 있는 지 여부 */
  /* 소스 맵 옵션 */
  // "sourceRoot": "", /* 소스 위치 대신 디버거가 알아야 할 TypeScript 파일이 위치할 곳 */
  // "mapRoot": "", /* 생성된 위치 대신 디버거가 알아야 할 맵 파일이 위치할 곳 */
  // "inlineSourceMap": true, /* 분리된 파일을 가지고 있는 대신, 단일 파일을 소스 맵과 가지고 있을 지 여부 */
  // "inlineSources": true, /* 소스맵과 나란히 소스를 단일 파일로 내보낼 지 여부, '--inlineSourceMap' 혹은 '--sourceMap'가 설정되어 있어야 한다. */
  /* 실험적 옵션 */
  // "experimentalDecorators": true, /* ES7의 decorators에 대한 실험적 지원 여부 */
  // "emitDecoratorMetadata": true, /* decorator를 위한 타입 메타데이터를 내보내는 것에 대한 실험적 지원 여부 */
  /* 추가적 옵션 */
  "skipLibCheck": true, /* 정의 파일의 타입 확인을 건너 뛸 지 여부 */
  "forceConsistentCasingInFileNames": true /* 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부 */
  }
}

```
[출처](https://geonlee.tistory.com/214)

컴파일 옵션만해도 이렇게 많기 때문에, `tsconfig.json`을 작성하는 것 자체가 망설여지기는 합니다.

하지만, `tsconfig.json`을 설정함으로써, 다른 동료들과의 협업에서도 타입체커를 통한 공통적인 코드를 작성할 수 있습니다.

- 타입스크립트 컴파일러는 타입스크립트의 핵심 요소에 영향을 미치는 몇 가지 설정을 포함하고 있으므로 이를 명확히 이해하는 것이 필요합니다
- 컴파일 옵션은 `tsconfig.json`을 사용합니다.
- 처음부터 타입스크립트로 프로젝트를 진행하는 단계라면, `noImplicitAny`를 설정해 타입스크립트를 사용하는 명분을 만들어야 합니다.
  - 타입 범위를 좁히면 오류의 발생을 막을 수 있습니다.   
- `undefined`와 관련된 런타임 오류를 방지하기 위해서 `strictNullChecks`를 설정합니다.
- strict 설정을 통해서 타입 체크를 강화할 수 있습니다.