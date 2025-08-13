import type { User } from "@/@types/global";
import { Suspense } from "react";
// import { useLoaderData } from "react-router"
import { Await, useFetcher, useLoaderData } from "react-router"

function Trending() {

  const users = useLoaderData() as User[];
  const fetcher = useFetcher();
  
  /* loader의 재사용 */
  const handleClick = (userId:number) => {
    // 특정 url에 있는 loader를 사용
    fetcher.load(`/users/${userId}`);

    // 로딩된 데이터는 아래와 같은 형태로 사용
    // console.log(fetcher.data);
  }

  return (
    <>
      <h1>Trending Concert User List</h1>
      {
        users.map(user => (
          <li key={user.id}>
            <button type="button" onClick={() => handleClick(user.id)}>{user.name}</button>
          </li>
        ))
      }

      <hr />
      {
        fetcher.data?.user && (
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={fetcher.data.user}>
              {
                (user:User) => (
                  <ul>
                    <li>Name : {user.name}</li>
                    <li>Email : {user.email}</li>
                    <li>Phone : {user.phone}</li>
                    <li>Website : {user.website}</li>
                  </ul>
                )
              }
            </Await>
          </Suspense>
        )
      }
      
    </>
  )
}
export default Trending


/* loader는 router에서가 아니라 component 내부에서도 선언 가능 */
/* 매개변수는 args:LoaderFunctionArgs 와 같은 형태로 받음 */
export async function loader() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  } catch {
    console.error('fetch 실패');
  }
}

