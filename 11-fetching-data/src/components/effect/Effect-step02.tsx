/* -------------------------------------------------------------------------- */
/*                          useEffect를 사용한 데이터 Fetch                       */
/* -------------------------------------------------------------------------- */

import { useEffect, useState } from "react";

function Effect() {
  
  // React의 Hook (use**) 는 컴포넌트의 최상위 레벨에서만 호출되어야 함
  const [ users, setUsers ] = useState<User[]
  >([]);
  const [ loading, setLoading ] = useState(true);
  
  const END_POINT = "https://jsonplaceholder.typicode.com/users";

  // useEffect 안에서는 비동기 함수 사용 불가 -> .then()으로 넣거나
  // async function 을 따로 등록해서 사용
  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch(END_POINT);
      const data = await res.json();
      // console.log(data);
      if (res.ok) setUsers(data);
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



// .then()을 사용하는 버전
/*
useEffect(()=>{
  fetch(END_POINT)
  .then(res => res.json())
  .then(data => {
    setUsers(data);
  })
  .catch(err => {
    console.error('데이터 통신에 실패했습니다.', err);
  })
  .finally(() => setLoading(false))
})
*/