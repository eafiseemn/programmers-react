import { useId, useRef, useState } from 'react'
import S from './Remember.module.css'

function Remember() {

  const refInputId = useId();
  const stateInputId = useId();

  // 함수 내 데이터를 기억하는 방법
  // 1. useRef() Hook => memoization; 외부에 데이터를 기억하여 저장/읽기 쉽도록 사용
  // 현재(current) 기억된 값이 변경되더라도 기억은 하지만, 리렌더 요청은 안함
  const messageRef = useRef('렌더링을 하지 않고 메시지만 기억합니다.');
  const reRender = useState(0)[1];

  // 2. useState() Hook => memoization, 외부에 데이터 기억 저장/읽기
  // 필연적으로 react에게 다시 컴포넌트를 re-render 하도록 요청
  const [ message, setMessage ] = useState('글이 입력되면 바로 리렌더링이 발생합니다.');

  const handleRefChange = ({target:{value}}:{target:{value:string}}) => {
    // ref 객체의 현재(current) 값 변경 방식
    // messageRef = { current.value }
    // 현재 값 읽기: messageRef.current
    // 현재 값 쓰기: messageRef.current = value;

    messageRef.current = value;
    console.log('ref 참조 객체의 현재 값이 변경됩니다.');
  }

  const handleStateChange = ({target:{value}}:{target:{value:string}}) => {
    setMessage(value);
  }

  const handleClick = () => {
    console.log(messageRef.current);
  }

  const handleReRender = () => {
    reRender((r) => --r);   // 강제 렌더트리거
  }

  return (
    <div className={S.container}>
      <h1>다시 렌더링 하지 않고 기억하기</h1>
      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메시지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리렌더링 요청 없이 메시지를 기억할 수 있을까요?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={refInputId} className='a11y-hidden'>메시지 Ref</label>
        <input 
          type="text" 
          id={refInputId}
          defaultValue={messageRef.current}
          onChange={handleRefChange}
        />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>메시지 확인</button>
        <button type="button" onClick={handleReRender}>다시 렌더링</button>
      </div>

      <div className={S.result}>
        <h3>Ref 메시지 값 :</h3>
        <p>{messageRef.current}</p>
      </div>

      <hr />

      <div className={S.control}>
        <label htmlFor={stateInputId} className='a11y-hidden'>메시지 State</label>
        <input 
          type="text" 
          id={stateInputId}
          defaultValue={message}
          onChange={handleStateChange}
        />
      </div>

      <div className={S.result}>
        <h3>State 메시지 값 :</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}
export default Remember