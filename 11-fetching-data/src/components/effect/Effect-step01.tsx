/* -------------------------------------------------------------------------- */
/*                            useEffect 기본 개념 및 구문                         */
/* -------------------------------------------------------------------------- */

import { useEffect, useState } from "react"

function Effect() {

  const [ count, setCount ] = useState(0);
  
  /* useEffect 기본 구문과 dependencyList */
  // useEffect(()=>{
  //   console.log('Run useEffect!');  // 이 콘솔이 가장 마지막으로 찍힘
  // }, [count]);       

  // console.log('rendered!'); // 이 콘솔이 먼저 찍힘
  

  /* useEffect with Side Effect */
  // useEffect(()=> {
  //   setInterval(() => {
  //     console.log('hello!');
  //   }, 10000);
  // }, [])    // 종속성이 없으면 렌더링이 될 때마다 setInterval 등록됨


  /* Cleanup of useEffect */
  /* React Life Cycle
    [1] 렌더링 시작
    [2] DOM 생성 및 그리기 (commit 단계)
    [3] useEffect 실행
    [4] user Interaction -> 상태 변경 -> 다시 렌더링
    [5] 기존 useEffect의 Cleanup 실행 -> 새로운 useEffect 실행
   */
  console.log('rendered!'); // (1) 렌더링 시작
  // (2) DOM commit 

  useEffect(()=>{
    console.log('Run useEffect!');

    let step = 0;
    const id = setInterval(() => {
      step++;
      console.log('hello!', step);
    }, 1000);        // (3) useEffect 실행 및 타이머 등록
    
    // (4) Count Button 클릭 -> 리렌더링
    return () => {
      console.log('Clean Up useEffect!');
      clearInterval(id);     // (5) 기존 등록된 타이머 삭제
    }
  })

  return (
    <div>
      <p>Count : {count}</p>
      <button type="button" onClick={()=>setCount(count + 1)}> + 1</button>
    </div>
  )
}
export default Effect


// useEffect(()=>{},[]); DOM에 커밋까지 끝난 후 마지막으로 실행
// 데이터 가져오기 등 sideEffect를 처리할 수 있음
// setState를 콜백 안에 넣고 종속성 배열이 없으면 무한 루프 (렌더링 -> set -> 리렌더링)
// dependencyList가 []로 있으면 최초 렌더링 시 한 번만 실행
// dependencyList 안에는 관리하고 싶은 상태를 여러개 넣을 수 있음 [count, value, userInfo, ...]