/* -------------------------------------------------------------------------- */
/*                         useState Callback Function                         */
/* -------------------------------------------------------------------------- */

import { useState } from "react";

function Counter() {

  const [ number, setNumber ] = useState(0);

  const handleClick = () => {

    // setState 내부에는 업데이트 대기 큐를 관리

    setNumber( prev => prev+1 );
    setNumber( prev => prev+1 );
    setNumber( prev => prev+1 );
    setNumber( prev => prev+1 );
    // 함수형 업데이트는 현재 상태 값을 순서대로 함수에 넣어서 계산
    // 콜백함수로 이전 값을 받아서 넣으면 순차적으로 계속 업데이트함

    setNumber( 40 );
    // 값을 정하면 아예 고정됨 (값 덮어쓰기)
  }
  


  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}
export default Counter