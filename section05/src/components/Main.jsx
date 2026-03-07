// 자바스크립트에서는 아래 코드처럼 HTML 코드를 리턴하는 코드를 작성하면 문법적인 오류라고 판단한다.
// 하지만 React.js에서는 JSX 문법을 사용하므로 적법하다고 판단한다.
//   JSX(JavaScript Extensions): 확장된 자바스크립트의 문법, 자바스크립트 + HTML 가능
//
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
//    ex. 중괄호 내부에 if문이나 for문을 넣을 수 없다.
// 2. 숫자, 문자열, 배열 값만 렌더링된다.
//    ex. boolean, undefined, null 값은 렌더링되지 않는다.
//    ex. 객체를 렌더링하려고 하면 오류가 발생한다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
//    현재는 <main> 태그 하나가 있다.
//    <> </> 는 실제 DOM에 렌더링되지 않기 때문에 개발자 도구 Elements에서 태그로 묶여 보이지 않는다.
//    반면 <div>는 실제 DOM 노드로 생성되어 Elements에서 <div>로 감싸진 구조가 보인다.
//    +) CSS, event 등 어떤 추가 작업이 필요하지 않다면 빈 태그로 묶자.

import "./Main.css";

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };
  const number = 10;
  if (user.isLogin) {
    // "class"는 자바스크립트의 예약어이므로 사용할 수 없다.
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
};

export default Main;
