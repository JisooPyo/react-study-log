// package.json에서 scripts에 "start"를 key로 하여 "node src/index.js"를 입력해주고
// 터미널에서 "npm run start"를 실행하면 node src/index.js를 실행해준다.
// script는 npm run 뒤에 key를 붙여서 실행할 수 있으며 매크로를 설정해줄 수 있다.

console.log("안녕 Node.js");

/**
 * package.json에서 "type": "module"을 추가해주면 앞으로 이 section03 패키지는 ES 모듈 시스템을 사용하겠다. 라는 뜻.
 * CJS 보다 ESM이 더 이후에 개발된 모듈 시스템.
 * CJS와 ESM은 같이 사용할 수 없다.
 * 따라서, ESM을 사용하고 있는데("type": "module"을 package.json에 추가했는데)
 * require("./math") 코드나 module.exports = {} 코드를 사용하게 되면 에러가 발생한다.
 */

// CJS 코드
// const { add, sub } = require("./math"); // 구조분해할당

// ESM 코드
import { add, sub } from "./math.js"; // 확장자까지 꼭 명시하기. 명시하지 않으면 에러 발생

// math.js에서 export default로 설정된 함수를 불러온다.
// 이름을 마음대로 변경할 수 있다.
// export default로 설정된 함수는 위의 import문처럼 중괄호가 아니라 이렇게 따로 import 해주어야 한다.
import mul from "./math.js";

// 동일한 모듈에서 불러오는 디폴트 함수와 다른 함수들은 이런 식으로 합쳐서 import 해올 수도 있다.
// 이 방법이 더 깔끔하다.
// import mul, {add, sub} from "./math.js"

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(mul(2, 3)); // 6

// npmjs.com -> npm 라이브러리 백화점
// randomcolor 라이브러리 설치해보기
// npm i randomcolor

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
