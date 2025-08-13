import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher } from "react-router"

// SSR 전용 loader: 함수명은 clientLoader로 고정
export async function clientLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok) throw new Response('유저 데이터 로딩 실패', { status: 500 })
  return res.json();
}


function Trending({ loaderData }:{ loaderData:User[] }) {

  const users = loaderData;
  // console.log(users);

  const fetcher = useFetcher();
  const handleClick = (userId:number) => {
    fetcher.load(`/users/${userId}`);
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