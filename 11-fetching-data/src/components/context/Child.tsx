/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import GrandChild from "./GrandChild"

function Child({username}:{username:string}) {
  // function Child() {
  return (
    <div style={{
      border: '1px solid grey',
      padding: '10px'
    }}>
      <h3>(Child) 바뀐다</h3>
      <GrandChild username={username} />
      {/* <GrandChild /> */}
    </div>
  )
}
export default Child