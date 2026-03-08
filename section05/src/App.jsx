import "./App.css";
import { useState } from "react";
function App() {
  // count는 초기값 0, 정해주지 않으면 undefined
  // setCount: 상태 변화 함수(count의 값을 변경)
  const [count, setCount] = useState(0);

  /**
   * let light = "OFF"로 하지 않는 이유
   * 리액트에서는 state가 변화해야 리렌더링이 되는데, let light가 바뀌었다고 리렌더링이 되지 않는다.
   * 가변적인 값을 화면에 렌더링 시켜주고 싶다면 state를 이용해서 처리해야 한다.
   */
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count >= 5 && <h2>count는 5이상입니다.</h2>}
    </>
  );
}

export default App;
