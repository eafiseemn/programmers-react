import { useRef } from "react";
import Child from "./Child"

function Parent() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // 명령형 프로그래밍
      // 대상을 정확하게 찾기 어려울 수 있음
      // 매번 as HTML... 으로 단언해야함
    // const input = document.querySelector('input') as HTMLInputElement;
    // input.focus();

    // 선언형 프로그래밍 -> useRef 사용
      // side effect 안에서 DOM을 잡아서 제어하는 역할
    console.log(inputRef);  // {current: input}
    if(inputRef.current) inputRef.current.focus();
  }


  return (
    <>
      <input type="text" />
      <Child placeholder={'아이디를 입력하세요'} ref={inputRef} />
      <button type="button" onClick={handleFocus}>Focus on Input</button>
    </>
  )
}
export default Parent