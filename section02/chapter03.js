/**
 * 구조분해할당
 */

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four, five = 5] = arr;

console.log(one, two, three, four, five); // 1 2 3 undefined 5

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra, extra2 = "hello" } = person; // ⭐️ 중괄호 사용

console.log(name, myAge, hobby, extra, extra2); // 이정환 27 테니스 undefined hello

// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 이정환 27 테니스 undefined
};

func(person);
