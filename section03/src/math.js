/**
 * 모듈(Module)이란?
 * 기능별로 보통 파일을 나누어 관리하는데 이 파일 하나하나를 모듈이라 한다.
 *
 * 예를 들어, 쇼핑몰을 개발한다고 하면,
 * 회원 관리 기능은 user.js에서 개발하고 이를 user 모듈,
 * 장바구니 기능은 cart.js에서 개발하고 이를 cart 모듈,
 * 결제 기능은 payment.js에서 개발하고 이를 payment 모듈이라고 할 수 있다.
 *
 * 모듈 시스템(Module System)이란?
 * 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
 *
 * JavaScript는 CommonJS(CJS), ES Module(ESM), AMD, UMD 등의 모듈 시스템이 있는데
 * 그 중 CommonJS(CJS), ES Module(ESM) 모듈 시스템 두 가지를 실습해보겠다.
 */

// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈을 대표하는 단 하나의 대표 값
export default function multiply(a, b) {
  return a * b;
}

// CJS 코드
//
// module.exports = {
//   add,
//   sub,
// };

// ESM 코드
// export { add, sub }; // function에 export를 붙이지 않았을 때
