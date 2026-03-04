/**
 * 비동기 작업 처리하기 2. Promise
 */

// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 비동기 작업을 감싸는 객체.

// Pending: 아직 작업이 완료되지 않은 상태
// Fulfilled: 비동기 작업이 성공적으로 마무리 된 상태
// Rejected: 비동기 작업이 실패한 상태

// Pending -> Fulfilled: resolve, 해결되었다라고 표현.
// Pending -> Rejected: reject, 거부되었다라고 표현.

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 콜백 함수
    // executor
    setTimeout(() => {
      // resolve("해결!");            // Promise의 상태를 fulfilled로 바꿔주는 함수
      // reject("왜 실피했는지 이유...");    // Promise의 상태를 rejected로 바꿔주는 함수

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

// promise가 성공하면 then()을 실행
// promise.then((value) => {});

// promise가 실패하면 catch()을 실행
// promise.catch((error) => {});

// then() 결과가 promise를 그대로 반환하기도 하므로 다음과 같이 작성할 수도 있다.
// 체인을 건 것 같은 모양이라 Promise chaining이라고 하기도 한다.
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 아래 코드의 경우 newP를 반환한다.
// Promise의 then메서드 내부에서 새로운 Promise가 반환되면
// 이전 Promise의 then()의 반환값은 새로운 Promise가 된다.
// 그렇기 때문에 주석된 코드처럼 하는 것이 아니라..

// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

// 위의 코드는 이렇게 수정할 수 있다.
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
