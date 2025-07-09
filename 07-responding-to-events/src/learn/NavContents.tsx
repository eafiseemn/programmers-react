
function NavContents() {

  // a 태그를 잡아서 클릭 이벤트를 바인딩 

  // - 명령형 프로그래밍 + Side Effect
    // Error: 컴포넌트 안에서 대상을 찾거나 수정하는 행위 X
  // const firstLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
  // firstLink.dataset.element = 'jsx-markup';

  // - 선언형 프로그래밍 : 함수 형태로 만들고 onclick에 지정
  // 이벤트 객체는 React.MouseEvent<HTMLAnchorElement> (React의 이벤트 합성; e = SyntheticBaseEvent)
  // <HTMLAnchorElement>는 e.currentTarget
  const handleClickFirstLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    // console.log('clicked');
    e.preventDefault();
    e.currentTarget.dataset.element = 'jsx-markup';
    console.log( e.target );
  }

  const handleClickSecondLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.dataset.element = 'responding-to-events';
    console.log(e.target);
  }


  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handleClickFirstLink}>JSX 마크업</a>
      <a href="#responding-to-events" onClick={handleClickSecondLink}>이벤트 응답</a>
    </nav>
  )
}

export default NavContents