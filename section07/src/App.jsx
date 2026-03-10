import "./App.css";

import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  // 컴포넌트가 렌더링 된 처음에만 mount를 출력한다.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 두 번째 인수를 전달하지 않는다면 업데이트될 때마다 update를 출력한다.
  // useRef를 이용하여 렌더링 된 처음에는 출력하지 않도록 한다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

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
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
