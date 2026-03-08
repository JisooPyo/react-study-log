const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e); // e: 합성 이벤트 객체(Synthetic Base Event)
    console.log(text);
  };
  return (
    <button
      // 이벤트 핸들링, 함수 넣어줄 때 "()" 안 넣도록 조심하기
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}   // 버튼에 마우스가 올라갈 때
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;

/**
 * 합성 이벤트(Synthetic Base Event)란?
 *
 * 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 상태
 * Cross Browsing Event: 브라우저 별 스펙이 달라 발생하는 문제
 * 합성 이벤트 객체는 여러 브라우저들의 규격을 참고해서 하나의 통일된 규격으로 이벤트 객체를 포맷팅해준다.
 */
