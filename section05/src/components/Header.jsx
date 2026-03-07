// 컴포넌트의 이름은 대문자로 시작할 것.
// function으로 컴포넌트를 만드는 것, 화살표 함수로 컴포넌트로 만드는 것 차이가 없다. 일관성만 있으면 된다.
// 클래스로 컴포넌트를 만들 수는 있으나 그렇게 되면 코드를 더 작성해야 하기 때문에 추천하지 않는다.

// Header Component
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

export default Header;
