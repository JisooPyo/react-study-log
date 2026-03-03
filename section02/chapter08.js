/**
 * 배열 메서드 2. 순회와 탐색
 */

// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// function은 배열의 길이, 여기서는 3번 만큼 호출될 것.
// item은 요소, idx는 인덱스, arr은 배열.
arr1.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
console.log(arr2.includes(3)); // true
console.log(arr2.includes(0)); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1
console.log(arr3.indexOf(20)); // -1

let arr3_2 = [2, 2, 2];
console.log(arr3_2.indexOf(2)); // 0

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
console.log(
  arr4.findIndex((item) => {
    if (item === 2) return true;
  })
); // 1

console.log(arr4.findIndex((item) => item % 2 !== 0)); // 0
console.log(arr4.findIndex((item) => item === 9)); // -1

// indexOf vs. findIndex
// indexOf는 얕은 복사로 찾는다.
let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" })); // -1

console.log(objectArr.findIndex((item) => item.name === "이정환")); // 0

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾고, 그 요소를 그대로 반환.
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const found = arr5.find((item) => item.name === "이정환");

console.log(found); // {name: '이정환'}
