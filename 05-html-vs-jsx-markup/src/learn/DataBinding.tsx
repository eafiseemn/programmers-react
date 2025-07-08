// import { statusMessage } from "@/data/learn"
// import { Fragment, useEffect, useState } from "react";

import getRandom from "@/utils/getRandom";

interface Props {
  statusMessage: StatusMessage[];
}

function DataBinding({statusMessage}:Props) {

  const message = statusMessage[getRandom(statusMessage.length)];

  return (
    <>
      <dt>데이터 바인딩 (Data Binding)</dt>
      <dd>
        <p>상태 메시지(Status Message)를 연결해 화면에 출력합니다.</p>
        <span className="status">{message}</span>
      </dd>
    </>
  )
}

export default DataBinding


// component가 jsx를 return할때는 하나의 부모 요소로 묶어서 return 해야함
// <dt> / <dd> 형제 요소만 return 불가능
// 상위 부모 요소로 <Fragment> 를 넣어주면 해결
// 혹은 태그 이름 없이 <> </> 로 묶으면 자동으로 Fragment 로 인식함

  /* 시간별로 message 업데이트하기 테스트 */ 
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(prev => (prev + 1) % statusMessage.length);
  //   }, 1500);

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  // }, []);

  // const message = statusMessage[count];
