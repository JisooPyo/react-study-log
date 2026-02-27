/**
Quiz 2. 영화 출연진 합치기
목표 : Spread 연산자와 Rest 매개변수를 활용하여 여러 영화의 출연진을 하나로 합치는 함수 mergeActors를 완성하세요
다음 요구사항을 만족하는 코드를 작성하세요

* 함수 mergeActors는 Rest 매개변수를 사용하여 여러 개의 영화 객체를 인수로 받습니다.
* 모든 영화의 actors 배열을 Spread 연산자를 활용하여 하나의 배열로 합칩니다.
* 합쳐진 출연진 배열에서 중복을 제거한 뒤 결과를 출력합니다.
  * Hint: new Set()을 활용하면 중복을 제거할 수 있습니다!
*/
function mergeActors(...movies) {
  let total = [];
  for (let movie of movies) {
    total.push(...movie.actors);
  }
  console.log([...new Set(total)]);
}

mergeActors(
  { title: "하얼빈", actors: ["현빈", "박정민", "전여빈"] },
  { title: "소방관", actors: ["현빈", "유아인", "공효진"] },
  { title: "서울의 봄", actors: ["황정민", "정우성", "박정민"] }
);

// 출력 결과 :
// 전체 출연진: ["현빈", "박정민", "전여빈", "유아인", "공효진", "황정민", "정우성"]
