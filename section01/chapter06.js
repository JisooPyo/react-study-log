// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let str1ToNum = Number(str1);
// console.log(10 + str1ToNum);

let str2 = "10개";
let str2ToNum = Number(str2);
// console.log(str2ToNum);  // NaN

let str2ToNum2 = parseInt(str2);
// console.log(str2ToNum2);    // 10

// -> 숫자 -> 문자열
let num1 = 20;
let num1ToStr = String(num1);

// console.log(num1ToStr + "입니다");  // 20입니다
