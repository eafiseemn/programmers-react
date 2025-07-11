/* -------------------------------------------------------------------------- */
/*                               useState 성능 관리                             */
/* -------------------------------------------------------------------------- */

import { useCallback, useState } from "react";

function Counter() {

  function slow():number {
    console.log('작업 중...🥸')
    let sum = 0;
    for(let i = 0; i < 1000000000; i++) {
      // 엄청 오래 걸리는 작업
      sum += 1;
    }
    return sum;
  }

  // const [ number, setNumber ] = useState(slow());
  // useState가 호출될 때마다(클릭할 때마다) for문을 돌림

  const [ number, setNumber ] = useState(()=>slow());
  // const [ number, setNumber ] = useState(slow);
  // 초기값을 콜백으로 전달하면 최초 한 번만 연산하고 이후에는 저장된 값을 사용
  // 함수 본문 자체를 (실행하지 않고) 전달하는 방법도 동일


  /* React Hook (useCallback) 을 사용하여 함수의 값을 기억 */

  // const handleClick = () => {
  //   setNumber(number + 1);
  // }

  const handleClick = useCallback(() => {
    setNumber(number + 1);
  },[number])
  // 기억하고 싶은 함수를 callback에 넣고,
  // 종속성 배열[]에 값이 변화하는 변수를 추가
  // -> 변수의 값이 변경되면 기억한 함수를 호출함
  // -> 변수의 값이 변경되지 않으면 그 함수를 호출하지 않음 (버튼을 눌러도 동작하지 않음)


  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}
export default Counter