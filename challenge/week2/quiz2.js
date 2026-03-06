// node challenge/week2/quiz2.js

/**
Quiz 2. 타이머 기능 만들기 (feat. 비동기)

목표 : Promise와 async/await를 활용하여 카운트다운 타이머를 만드세요

다음 요구사항을 만족하는 코드를 작성하세요

* 함수 wait는 매개변수 ms만큼 대기했다가 resolve를 호출하는 Promise를 반환합니다.
* 함수 countdown은 매개변수 seconds를 받아 1초 간격으로 카운트다운을 출력합니다.
  * await와 wait 함수를 활용하세요!
* 카운트다운이 끝나면 "🎉 타이머 종료!" 를 출력합니다.
* 예외가 발생할 경우를 대비해 에러 핸들링 코드를 추가하세요
 */

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function countdown(seconds) {
  try {
    for (let i = seconds; i >= 1; i--) {
      console.log(i);
      await wait(1000);
    }
    console.log("🎉 타이머 종료!");
  } catch (err) {
    console.error(err);
  }
}

countdown(5);

// 출력 결과 : (1초 간격으로 출력)
// 5
// 4
// 3
// 2
// 1
// 🎉 타이머 종료!
