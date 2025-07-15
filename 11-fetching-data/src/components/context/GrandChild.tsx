/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import { useUserContext } from "@/hook/useUserContext"

function GrandChild({username:propname}:{username:string}) {
// function GrandChild() {

  const { username, setUsername } = useUserContext();

  return (
    <div style={{
      border: '1px solid grey',
      padding: '10px'
    }}>
      <h4>(GrandChild) 바뀌었나?</h4>
      <hr></hr>
      <p>안녕하세요, {propname} 님!</p>
      <p>안녕하세요, {username} 님!</p>
      <button type="button" onClick={()=>{
        setUsername('큰달')
      }}>나도 사용자 변경!</button>
    </div>
  )
}
export default GrandChild