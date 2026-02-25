// 함수 선언

function greeting() {
  console.log("안녕하세요!");
}

// 함수 호출
console.log("호출 전");
greeting();
console.log("호출 후");

// width, height -> 매개변수
function getArea(width, height) {
  let area = width * height;

  return area;
}

// 10, 20 -> 인수
let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

console.log(area1, area2, area3);

// 함수 내에 함수 선언 가능. -> 중첩함수
