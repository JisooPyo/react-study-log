/**
Quiz 5. 게임 랭킹 필터링하기
목표 : 반복문과 조건문을 활용하여 조건에 맞는 플레이어만 골라내는 함수 filterRanking을 완성하세요
다음 요구사항을 만족하는 코드를 작성하세요

* 함수 filterRanking은 2개의 매개변수를 받습니다.
  * players : 플레이어 정보 배열
  * minScore : 최소 점수 기준
* 반복문을 활용하여 players 배열을 순회합니다.
* 점수(score)가 minScore 이상인 플레이어만 골라냅니다.
* 조건을 만족하는 플레이어를 "{등수}등 - {닉네임} ({점수}점)" 형태로 출력합니다.
  * 등수는 필터링 된 결과 기준이 아닌, 원래 배열의 순서(인덱스 + 1)를 사용합니다.
* 조건을 만족하는 플레이어가 없으면 "조건을 만족하는 플레이어가 없습니다." 를 출력합니다.
*/

function filterRanking(players, minScore) {
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].score >= minScore) {
      count++;
      console.log(
        `${i + 1}등 - ${players[i].nickname} (${players[i].score}점)`
      );
    }
  }
  if (count === 0) {
    console.log("조건을 만족하는 플레이어가 없습니다.");
  }
}

filterRanking(
  [
    { nickname: "ProGamer", score: 950 },
    { nickname: "Noob123", score: 120 },
    { nickname: "SilverFox", score: 730 },
    { nickname: "GoldKing", score: 880 },
    { nickname: "BronzeHero", score: 310 },
  ],
  700
);

// 출력 결과 :
// 1등 - ProGamer (950점)
// 3등 - SilverFox (730점)
// 4등 - GoldKing (880점)

filterRanking(
  [
    { nickname: "Newbie1", score: 50 },
    { nickname: "Newbie2", score: 30 },
  ],
  500
);

// 출력 결과 :
// 조건을 만족하는 플레이어가 없습니다.
