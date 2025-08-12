import type { User } from "@/@types/global";
import { Link, Outlet, useLoaderData, useMatch } from "react-router"

function UserList() {

  const userList = useLoaderData() as User[];

  const isDetail = useMatch('/users/:userId');
  if(isDetail) return <Outlet />

  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {
          userList.map(user => (
            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}
export default UserList