import { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffects from "./EventWithSideEffects";
import ScrollDown from "./ScrollDown";

function View() {
  return (
    <></>
  )
}

export default View


function RespondingToEvents() {

  const buttonStyle = {
    backgroundColor: "#3c5687",
    color: "white",
    fontSize: "12px",
    border: "none",
    borderRadius: "5px",
    padding: "5px"
  }

  const handler = () => {
    console.log('hi handler');
  }

  let message = '말랑사과떡촉촉';
  const updateMessage = (add:string):void => {
    message += add;
    console.log(message);
  }

  // let inputValue:string = '';
  // {inputValue}를 넣으면 변수값이 변경되더라도 렌더링이 다시 되지는 않음: 렌더 트리거를 발동시켜야함
  const [ text, setText ] = useState(''); // Hook

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputNameForm = e.currentTarget.querySelector('[name="사용자 이름"]') as HTMLInputElement;
    setText(inputNameForm.value);
    
    inputNameForm.value = '';
    inputNameForm.focus();
  }

  return (
    <div className="ViewRespondingToEvents">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr style={{marginBottom: "15px"}} />
      <form action="/?submitted" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="사용자 이름"
          aria-label="사용자 이름" 
          placeholder="username"
          style={ {marginRight: "10px"} }
        />
        {/* {' '} : 사이 간격 띄우기*/}
        <button type="submit" style={buttonStyle}>보내기</button>
      </form>
      <div>
        <output>input의 값이 여기에 렌더링됩니다 : {text}</output>
      </div>
      <hr />
      <div>
        <EventHandlerProp 
          onClick={handler} 
          onUpdateMessage={updateMessage}
        />
      </div>
      <div>
        <EventPropagation />
      </div>
      <div>
        <EventWithSideEffects />
      </div>
      <div>
        <ScrollDown />
      </div>
    </div>
  )
}

// 여러 component를 바인딩하고 싶을 때 객체처럼 꺼내쓸 수 있음
View.RespondingToEvents = RespondingToEvents;