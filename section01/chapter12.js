function funcA() {
  console.log("funcA 함수");
}

// 함수를 변수에 담을 수 있다.
let varA = funcA;
console.log(varA);

varA(); // funA

// 함수표현식
// function() -> 익명함수 -> 호이스팅의 대상이 되지 않는다.
let varB = function () {
  console.log("funcB 함수");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
