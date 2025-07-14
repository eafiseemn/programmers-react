/* -------------------------------------------------------------------------- */
/*                          useEffect를 사용한 데이터 Fetch                       */
/* -------------------------------------------------------------------------- */

import { useEffect, useState } from "react";

function Effect() {
  
  const [ users, setUsers ] = useState<User[]
  >([]);
  const [ loading, setLoading ] = useState(true);
  
  const END_POINT = "https://jsonplaceholder.typicode.com/users";


  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch(END_POINT);
      const data = await res.json();
      // console.log(data);
      setUsers(data);
    } catch(err) {
      console.error('데이터 통신에 실패했습니다.', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[])
  
  if (loading) return <p>유저 정보를 가져오는 중입니다...🧐</p>;
  if (users.length === 0) return <p>유저 정보가 없어요 🥺</p>;
  
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
