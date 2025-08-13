import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData, type LoaderFunctionArgs } from "react-router";

export async function clientLoader({ params }:LoaderFunctionArgs) {
  const { userId } = params;
  return {
    user: fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).
    then((res) => {
      if(!res.ok) throw new Error('유저 정보를 찾을 수 없습니다.');
      return res.json();
    })
  }
} 

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
    </div>
  )
}
export default UserDetail
