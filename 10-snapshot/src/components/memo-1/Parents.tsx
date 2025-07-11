/* -------------------------------------------------------------------------- */
/*                         Parent - Child ReRendering                         */
/* -------------------------------------------------------------------------- */

import { useCallback, useMemo, useState } from "react"
import Child from "./Child"

function Parents() {

  const [ count, setCount ] = useState(0);

  // const handleClick = () => {
  //   console.log('clicked!');
  // }
  const handleClick = useCallback(() => {
    console.log('clicked!');
  },[]);

  const fruits = useMemo(() => ['사과', '배', '바나나', '딸기'],[]);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}> +1 </button>
      <Child label="나는 자식이다!" onClick={handleClick} items={fruits} />
    </div>
  )
}
export default Parents

/* 최적화 방법 */
// React.memo = 자식 컴포넌트 자체 & useMemo = 데이터(배열/객체/계산값) 저장 & useCallback = Prop 함수 참조 저장

/* onClick={() => setCount(count + 1)} */
  // 부모 상태만 변경되어도 부모 요소가 렌더링될 때마다 자식 요소가 같이 렌더링됨
  // 자식 컴포넌트를 React.memo(Child) 형태로 export 하면
  // React의 memoization을 이용해서 자식 요소를 기억 -> 변하지 않으면 렌더링되지 않음
  // Chrome 개발자도구 Profiler에서 렌더링 여부를 확인할 수 있음

/* onClick={handleClick} */
  // 부모 요소에서 함수를 설정하고 자식 요소에 Props로 전달하면
  // 자식 요소 입장에서는 매번 부모 요소가 렌더링 될 때마다 Props를 새로 받기 때문에
  // 부모 요소 버튼을 클릭하더라도 자식 요소를 새롭게 그림
  // useCallback을 이용해서 종속성이 없는 상태 또는 특정 변수에만 종속되는 형태([], [changingValue])의 함수를 전달하면
  // 부모 요소가 변경되더라도 굳이 자식 요소를 리렌더링하지 않음

/* items={fruits} */
  // useCallback을 사용하더라도 부모를 렌더링할 때마다 fruits 배열을 새로 만들기 때문에
  // Props가 바뀐 것으로 인식해서 다시 매번 리렌더링됨
  // fruits 배열에도 useMemo를 사용해서 별도로 캐싱시켜놔야 자식 요소를 리렌더링하지 않음
