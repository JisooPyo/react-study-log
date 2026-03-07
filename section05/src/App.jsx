import "./App.css";
// Header.jsx 로 확장자를 쓰지 않아도 된다.
// vite로 만든 React App 에서는 확장자를 쓰지 않아도 자동으로 파일을 찾아가도록 내부적으로 설정이 되어 있기 때문
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// 컴포넌트 내부에 컴포넌트가 있을 경우 부모, 자식 관계로 표현된다.
// App 컴포넌트 내부에 Header 컴포넌트가 있을 경우 App 컴포넌트는 부모 컴포넌트, Header 컴포넌트는 자식 컴포넌트라고 한다.
// App 컴포넌트는 관례상 모든 컴포넌트의 최상위 조상 컴포넌트로 설정한다. 이 때문에 Root 컴포넌트라고 하기도 한다.

// App Component
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
