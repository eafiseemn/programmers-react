import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData, type LoaderFunctionArgs } from "react-router";

function UserDetail() {

  const { user } = useLoaderData<{user: Promise<User>}>();

  return (
    <div>
      <h2>User Profile</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={user} errorElement={<div>Oops!</div>}>
          {
            (userInfo:User) => (<ul>
              <li>phone: {userInfo.phone}</li>
              <li>email: {userInfo.email}</li>
              <li>website: {userInfo.website}</li>
            </ul>)
          }
        </Await>
      </Suspense>
      {/* Suspense: data를 가져오기 전에 보여줄 내용 */}
      {/* Await: resolve / error 화면에서 보여줄 내용 */}
    </div>
  )
}
export default UserDetail

export async function loader({ params }:LoaderFunctionArgs) {
  const { userId } = params
  // try {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  //   return res.json();
  // } catch {
  //   console.error('fetch 실패');
  // }

  return {
    user: fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).
    then((res) => {
      if(!res.ok) throw new Error('유저 정보를 찾을 수 없습니다.');
      return res.json();
    })
  }
}

