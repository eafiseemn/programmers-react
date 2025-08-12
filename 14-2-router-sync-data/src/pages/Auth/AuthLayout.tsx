import { Outlet } from "react-router"

function AuthLayout() {

  const S = {
    border: '1px solid black',
    padding: '2rem'
  }

  return (
    <div className="authContainer" style={S}>
      <h1>Auth</h1>
      <hr />
      <Outlet></Outlet>
    </div>
  )
}
export default AuthLayout