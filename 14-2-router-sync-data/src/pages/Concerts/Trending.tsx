import type { User } from "@/@types/global";
// import { useLoaderData } from "react-router"
import { useLoaderData, type LoaderFunctionArgs } from "react-router"

function Trending() {

  const users = useLoaderData() as User[];
  // console.log(users);

  return (
    <>
      <h1>Trending Concert User List</h1>
      {
        users.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))
      }
    </>
  )
}
export default Trending


/* loader는 router에서가 아니라 component 내부에서도 선언 가능 */
export async function loader(args:LoaderFunctionArgs) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  } catch {
    console.error('fetch 실패');
  }
}

