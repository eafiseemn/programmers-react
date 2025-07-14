/* -------------------------------------------------------------------------- */
/*                               useLayoutEffect                              */
/* -------------------------------------------------------------------------- */

import { useEffect, useLayoutEffect } from "react"


/*
 [1] 렌더링 시작
 [2] DOM 업데이트
 [3] useLayoutEffect 실행
 [4] 화면 그리기 (commit)
 [5] useEffect 실행

 useLayoutEffect는 동기적으로 실행되기 때문에
 렌더링이 끝나기 전까지 브라우저를 일시정지함

 복잡한 로직, API 요청을 넣을 경우 렌더링 지연이 발생하므로 주의

 레이아웃 수치 측정 / 수정 등에만 활용
 (대부분 useEffect를 사용할 수 있지만,
 만약 화면에 blink 현상이 발생하거나 DOM 요소가 이상하게 움직이거나 scrollSmoother 같은 것들을 사용할 경우)
 */

function Parent() {
  useEffect(()=>{
    console.log('useEffect');     // 마지막에 실행
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect');   // 두 번째 실행

    return () => {console.log('useLayoutEffect Cleanup')}
  })

  console.log('render');    // 가장 먼저 실행

  return (
    <div>
      
    </div>
  )
}
export default Parent