// node challenge/week2/quiz1.js

/**
Quiz 1. 음식 주문 내역 정리하기 (feat. 배열 메서드)

목표 : 배열 메서드를 활용하여 주문 내역을 필터링하고 변환하는 함수 getOrderSummary를 완성하세요.

다음 요구사항을 만족하는 코드를 작성하세요

* 매개변수 orders로 주문 내역 배열을 제공받습니다.
* status가 "completed"인 주문만 필터링합니다.
* 필터링된 주문을 "{메뉴명} - {수량}개 (총 {price * quantity}원)" 형태의 문자열 배열로 변환합니다.
* 변환된 배열을 반환합니다.
* Hint: filter와 map을 활용하세요!
 */

function getOrderSummary(orders) {
  return orders
    .filter((order) => order.status === "completed")
    .map(
      (order) =>
        `${order.menu} - ${order.quantity}개 (총 ${
          order.price * order.quantity
        }원)`
    );
}

const result = getOrderSummary([
  { menu: "아메리카노", price: 3000, quantity: 2, status: "completed" },
  { menu: "카페라떼", price: 3500, quantity: 1, status: "cancelled" },
  { menu: "크로와상", price: 2800, quantity: 3, status: "completed" },
  { menu: "케이크", price: 5000, quantity: 1, status: "completed" },
  { menu: "녹차라떼", price: 4000, quantity: 2, status: "cancelled" },
]);

console.log(result);

// 출력 결과 :
// ["아메리카노 - 2개 (총 6000원)", "크로와상 - 3개 (총 8400원)", "케이크 - 1개 (총 5000원)"]
