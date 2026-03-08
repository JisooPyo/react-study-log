import { useState } from "react";

const Bulb = () => {
  /**
   * let light = "OFF"로 하지 않는 이유
   * 리액트에서는 state가 변화해야 리렌더링이 되는데, let light가 바뀌었다고 리렌더링이 되지 않는다.
   * 가변적인 값을 화면에 렌더링 시켜주고 싶다면 state를 이용해서 처리해야 한다.
   */
  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
