function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log("----------");
console.log(returnTrue() && returnFalse());
console.log("----------");
console.log(returnTrue() || returnFalse());
console.log("----------");
console.log(returnFalse() || returnTrue());
console.log("----------");

// JavaScript의 ||, &&는 단순 논리 연산자가 아니라 단락 평가 연산자이다.

// 가장 마지막에 평가된 값 기준.

// OR (||)
// * 첫 번째 Truthy 값 반환
// * 모두 Falsy면 마지막 값 반환

// AND (&&)
// * 첫 번째 Falsy 값 반환
// * 모두 Truthy면 마지막 값 반환

function returnUndefined() {
  console.log("Undefined 함수");
  return undefined;
}

function return10() {
  console.log("10 함수");
  return 10;
}

console.log(return10() || returnUndefined()); // 10
console.log(returnUndefined() && return10()); // undefined

// 단락 평가 활용 사례
console.log("-----단락 평가 활용 사례-----");

function printName(person) {
  console.log(person && person.name);
}

printName(); // undefined
printName({ name: "이정환" });
