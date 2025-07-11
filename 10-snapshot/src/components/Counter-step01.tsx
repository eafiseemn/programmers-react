/* -------------------------------------------------------------------------- */
/*                              useState의 비동기 작업                            */
/* -------------------------------------------------------------------------- */

import { useState } from "react";

function Counter() {

  const [ number, setNumber ] = useState(0);

  const handleClick = () => {
    // setState는 비동기+배치 처리하여 렌더링이 된 다음에 state를 변경

    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    alert(number);

    // 이전 상태 snapshot에서 모든 number는 동시에 0으로 등록되기 때문에
    // 아무리 여러번 setNumber를 써도 number 0 + 1 = 1 -> 1만 늘어남
    // alert도 0으로 뜨고, 그 이후에 1로 증가함
  }
  


  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}
export default Counter