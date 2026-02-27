/**
 * Spread 연산자와 Rest 매개변수
 */

// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // {a: 1, b: 2, c: 3, d: 4}

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3); // 1 2 3
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// 함수의 매개변수에서 ...은 Spread 연산자가 아님을 주의할 것
// "...rest, three"는 불가능하다.
// ...arguments 로 작성도 가능하다. 뭘로 작성하든 상관 X
function funcB(one, ...rest) {
  console.log(one); // 1
  console.log(rest); // [2, 3]
}

funcB(...arr1);
