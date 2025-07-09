import { useState } from "react";

function EventWithSideEffects() {
  // countdown 버튼을 클릭 시 숫자가 100 -> 0까지 
  // 0.1초마다 1씩 감소하여 0이 되었을 때 카운트 종료

  // useState를 이용하여 변수값을 업데이트 하는 방식
  const [ counter, setCounter ] = useState(100);
  const [ isCounting, setIsCounting ] = useState(false);

  const handleCountDown = () => {
    if(isCounting) return;

    setIsCounting(true);
    const interval = setInterval(() => {
      setCounter( prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }


  // .count 의 textContent 를 직접 수정하는 방식
  // const handleCountDown = () => {
  //   const el = document.querySelector('.count') as HTMLOutputElement;

  //   const timeout = setInterval(() => {
  //     const current = +el.value;
  //     const next = current - 1;
  //     el.value = String(next);

  //     if( next <= 0 ) {
  //       clearInterval( timeout );
  //     }
  //   }, 10);
  // }

  return (
    <details open>
      <summary>
        <b>이벤트 핸들러와 사이드 이펙트</b>
      </summary>
      <p>이벤트 핸들러는 사이드 이펙트를 위한 최고의 포지션입니다.</p>
      <p>
        함수를 렌더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에
        <br />
        무언가를 변경하는 데 최적의 위치입니다.
      </p>
      <div className="countDown">
        <button type="button" onClick={handleCountDown}>카운트 다운</button>
        <output className="count">{counter}</output>
        {/* <output className="count">100</output> */}
      </div>
    </details>
  )
}

export default EventWithSideEffects