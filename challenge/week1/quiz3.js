/**
Quiz 3. 영화 티켓 할인 적용하기
목표 : 콜백함수와 단락 평가를 활용하여 영화 티켓의 최종 가격을 계산하는 함수 calcTicketPrice를 완성하세요
다음 요구사항을 만족하는 코드를 작성하세요

* 함수 calcTicketPrice는 3개의 매개변수를 받습니다.
  * price : 기본 티켓 가격
  * discountFn : 할인 금액을 계산하는 콜백함수 (없을 수도 있음)
  * memberName : 회원 이름 (없을 수도 있음)
* discountFn이 존재하면 콜백함수를 실행하여 할인된 가격을 계산하고, 없으면 기본 가격을 그대로 사용합니다.
  * 단락 평가를 활용하세요!
* memberName이 없는 경우 "비회원"으로 표시합니다.
  * 단락 평가를 활용하세요!
* 결과를 "{이름} - 최종 가격 : {가격}원" 형태로 출력합니다.
*/

function calcTicketPrice(price, discountFn, memberName) {
  let finalPrice = (discountFn && discountFn(price)) || price;
  let finalName = memberName || "비회원";
  console.log(`${finalName} - 최종 가격 : ${finalPrice}원`);
}

calcTicketPrice(15000, (price) => price * 0.8, "김효빈");
// 출력 결과 :
// 김효빈 - 최종 가격 : 12000원

calcTicketPrice(15000, null, "이정환");
// 출력 결과 :
// 이정환 - 최종 가격 : 15000원

calcTicketPrice(15000, (price) => price - 3000);
// 출력 결과 :
// 비회원 - 최종 가격 : 12000원
