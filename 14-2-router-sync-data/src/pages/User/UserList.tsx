import type { User } from "@/@types/global";
import { Link, Outlet, useLoaderData, useMatch, useNavigate } from "react-router"

function UserList() {

  const navigate = useNavigate();

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
      <button type="button" onClick={() => navigate('/users/new')}>새로운 유저 추가하기</button>
    </div>
  )
}
export default UserList