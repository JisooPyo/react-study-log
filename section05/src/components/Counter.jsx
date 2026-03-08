import { useState } from "react";

const Counter = () => {
  // count는 초기값 0, 정해주지 않으면 undefined
  // setCount: 상태 변화 함수(count의 값을 변경)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

/**
 * 리액트 컴포넌트 리렌더링이 발생하는 상황
 *
 * 1. 자신이 관리하는 state가 변경되면
 * 2. 제공받는 props의 값이 변경되면
 * 3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링
 *
 * App 내부에 Counter 코드가 있을 경우 이 코드에서 3번 상황에 의해 현재 count가 바뀌면 Bulb 컴포넌트도 같이 리렌더링된다.
 * 이는 의미가 없고 성능 악화로 이어진다.
 *
 * 따라서 이러한 경우를 방지하기 위해 관련 없는 두 개의 state를 하나의 컴포넌트에 몰아 넣기보다는
 * 서로 다른 컴포넌트로 분리하는 것이 좋다.
 */
