/**
 * Date 객체와 날짜
 */

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// Tue Mar 03 2026 16:53:46 GMT+0900 (한국 표준시)
console.log(date1);

let date2 = new Date("1997-01-07/10:10:10");
// Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
//            -> UTC: 협정 세계 시
//                    세계의 모든 나라가 표준으로 사용하는 시간이 시작되는 시점
let ts1 = date1.getTime();
console.log(ts1); // 1772524666317

let date4 = new Date(ts1);
console.log(date4); // date1과 동일

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// month는 0부터 시작하기 때문에 그냥 getMonth()로 하면 지금이 3월이면 2로 나온다.
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
// setMonth(4) -> 5월로 설정
date1.setMonth(4);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
// Tue May 30 2023 23:59:59 GMT+0900 (한국 표준시)
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
// Tue May 30 2023
console.log(date1.toDateString());
// 2023. 5. 30. 오후 11:59:59
console.log(date1.toLocaleString());
