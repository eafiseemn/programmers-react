import type { User } from "@/@types/global";
import { Link, Outlet, useMatch, useNavigate } from "react-router"

export async function clientLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok) throw new Response('유저 데이터 로딩 실패', { status: 500 })
  return res.json();
}


function UserList({ loaderData }:{ loaderData:User[] }) {

  const navigate = useNavigate();

  const userList = loaderData;

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