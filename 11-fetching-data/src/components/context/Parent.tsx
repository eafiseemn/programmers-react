/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import Child from "./Child";

function Parent({username}:{username:string}) {
// function Parent() {
  return (
    <div style={{
      border: '1px solid grey',
      padding: '10px'
    }}>
      <h2>(Parent) 바뀐다</h2>
      <Child username={username} />
      {/* <Child /> */}

    </div>
  )
}
export default Parent