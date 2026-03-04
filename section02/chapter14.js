/**
 * 비동기 작업 처리하기 3. Async & Await
 */

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData1() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

// Promise 객체가 반환되며,
// PromiseResult는 { name: ..., ... },
// state는 fulfilled가 된다.
console.log(getData1());

async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "지수",
        id: "ssami",
      });
    }, 1500);
  });
}

console.log(getData2());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  const data = await getData2();
  console.log(data);
}

printData();
