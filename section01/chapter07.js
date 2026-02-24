// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 21
num6 = (1 + 2) * 10; // 30

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 10;
num7 -= 10;
num7 *= 10;
num7 /= 10;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
// console.log(++num8);    // 11   // 전위 연산
// console.log(num8++);    // 11   // 후위 연산
// console.log(num8);  // 12

// 5. 논리 연산자
let or = true || false; // T

let and = true && false; // F

let not = !true; // F

// 6. 비교 연산자
let comp1 = 1 === 2; // F
let comp2 = 1 !== 2; // T
let comp3 = 1 === "1"; // F
let comp4 = 1 == "1"; // T
let comp5 = 2 > 1; // T
let comp6 = 2 < 1; // F
let comp7 = 2 >= 2; // T
let comp8 = 2 <= 2; // T
