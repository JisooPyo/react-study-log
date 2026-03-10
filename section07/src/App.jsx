import "./App.css";

import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 두 번째 인수인 배열에 있는 값이 바뀌게 되면 SideEffect로서
  // 첫 번재 인수로 전달한 콜백 함수를 실행시킨다.
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps

  const onClickButton = (value) => {
    setCount(count + value);
    // set... 는 비동기 함수이기 때문에 count는 onClickButton이 진행되기 전 count가 출력된다.
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
