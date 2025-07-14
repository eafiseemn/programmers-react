/* -------------------------------------------------------------------------- */
/*                        Custom Hook을 통한 관심사 분리                          */
/* -------------------------------------------------------------------------- */

import useFetchUsers from "@/hook/useFetchUsers";

function Effect() {  

  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>유저 정보를 가져오는 중입니다...🧐</p>;
  if (users.length === 0 || error) return <p>유저 정보가 없어요 🥺</p>;
  
  return (
    <div className="UserListContainer">
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  )
}
export default Effect
