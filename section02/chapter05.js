/**
 * 원시타입 vs. 객체타입
 */

let o1 = { name: "이정환" };

// 객체의 참조값을 복사함
// 원본 객체가 수정될 수 있어 위험함
let o2 = o1;

console.log(o1 === o2); // true

// 새로운 객체를 생성하면서 프로퍼티만 따로 복사함
// 원본 객체가 수정될 일이 없어 안전함
let o3 = { ...o1 };

// ===: 얕은 비교
// JSON.stringify() 비교: 깊은 비교
console.log(o1 === o3); // false
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

// 3. 배열과 함수도 사실 객체이다
