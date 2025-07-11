/* -------------------------------------------------------------------------- */
/*                    Controlled vs Uncontrolled Components                   */
/* -------------------------------------------------------------------------- */

import { useState } from "react"

function Form() {
  const [ text, setText ] = useState('');


  return (
    <div>
      <h2>Controlled Input</h2>
      <input 
        type="text" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
      <p>입력 값 : {text}</p>
      <hr />
      <h2>Uncontrolled Input</h2>
      <input 
        type="text" 
        defaultValue={text}
        // onChange={(e)=> setText(e.target.value)}
      />
      <p>입력 값 :{text}</p>
    </div>
  )
}
export default Form


// uncontrolled component: React가 관리하지 않는 component
// default value를 사용하면 React는 default 외 변경된 value에 대해 관여하지 않음
// -> DOM 조작을 통해 직접 value를 설정해야 함
// onChange가 없어도 input에 글을 쓸 수 있음

// controlled component: React가 관리하도록 설정한 component
// setState를 통해 알아서 React가 관리하도록 설정
// onChange가 없으면 아예 입력 불가