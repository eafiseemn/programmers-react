/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import { useContext } from "react"
import { UserContext } from "./UserContext";


function GrandChild({username}:{username:string}) {

  const ctx = useContext(UserContext);
  console.log(ctx);

  return (
    <div style={{
      border: '1px solid grey',
      padding: '10px'
    }}>
      <h4>(GrandChild) 바뀌었나?</h4>
      <hr></hr>
      <p>안녕하세요, {username} 님!</p>
      <p>안녕하세요, {ctx?.username} 님!</p>
    </div>
  )
}
export default GrandChild