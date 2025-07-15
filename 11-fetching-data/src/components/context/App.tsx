/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import { useState } from "react";
import Parent from "./Parent";
import { UserContext } from "./UserContext";

function App() {

  const [ username ] = useState('문대');
  const [ usernameCtx, setUsernameCtx ] = useState('큰문');

  return (
    <UserContext value={{username: usernameCtx, setUsername: setUsernameCtx}}>
      <div style={{
        border: '1px solid grey',
        padding: '10px'
      }}>
        <h1>버튼을 클릭하면 사용자가 변경됩니다!</h1>
        <Parent username={username} />
        {/* <Parent /> */}
        <button type="button" onClick={() => setUsernameCtx('건우')}>사용자 변경</button>
      </div>
    </UserContext>
  )
}
export default App


// Props Drilling
// 부모가 자식에게 계속 Props 를 전달하는 형태 (App -> Parent -> Child -> GrandChild)

// createContext / useContext를 사용하여 제어 (전역 상태 관리)
// Provider -> 
//  <createContext로 생성한 context명 value={전달하고자 하는 값}> <Child /> </createContext로 생성한 context명> 형태로 사용
// react 19 이전 버전에서는 <Context.Provider value={...}> 형태로 써야함