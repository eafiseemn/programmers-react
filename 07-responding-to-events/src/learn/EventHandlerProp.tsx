interface Props {
  onClick: () => void;
  onUpdateMessage: (add:string) => void;
}

function EventHandlerProp({onClick, onUpdateMessage}: Props) {  

  const handleMouseEnter = () => {
    // console.log('enter');
    onUpdateMessage('🍎') // 부모의 함수도 Prop으로 전달되면 공유될 수 있음
  }
  const handleMouseLeave = () => {
    // console.log('leave');
  }

  return (
    <details open>
      <summary 
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <b>이벤트 핸들러 추가하기</b>
      </summary>
      <p>
        이벤트 핸들러 추가를 위해서는 먼저 함수를 정의하고
        <br />
        이를 적절한 JSX 요소에 prop으로 전달해야 합니다.
      </p>
    </details>
  )
}

export default EventHandlerProp