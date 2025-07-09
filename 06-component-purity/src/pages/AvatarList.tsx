import { Fragment } from "react/jsx-runtime";
import Avatar from "../components/Avatar";

interface Props {
  list: AvatarData[]
}

const anotherData = {
  count: 10
}
function AvatarListPage(props:Props){
  
  // 배열 객체의 pop() 메서드 사용 : props.list.pop()
  // 입력 받은 원본 데이터(props.list) => mutation (수정)
  // react에서 원본 데이터를 강제로 수정해서는 안됨 (props는 readonly)
  
  // local mutation : 지역 내 수정은 허용
  const myList = [...props.list]; // spread syntax를 사용해 복제
  // const myList = Array.from(props.list);
    // Array.from()으로 복제
  // const myList = Array.prototype.slice.call(props.list); 
    // Array.prototype으로 복제
  const li = myList.map((user) => (
    <Fragment key={user.id}>
      <Avatar user={user} />
      {anotherData.count++}
    </Fragment>
  ))
  // component 밖의 변수를 참조하여 변형하는 side effect

  /*
    browser API Side Effect
    Component 가 렌더링될 때마다 실행
    + StrictMode에 의해 setInterval 두 번씩 등록
    -> 타이머나 외부 동작은 독립적으로 움직이기 때문에(browser API) Side Effect
   */

  // let renderCount = 0;
  // setInterval(() => {
  //   console.log( renderCount );
  //   document.getElementById('app')!.dataset.render = String(++renderCount);
  // }, 2000);
  

  // JSX
  return (
    <ul className="avatarList">
      {li}
    </ul>
  );
}
export default AvatarListPage