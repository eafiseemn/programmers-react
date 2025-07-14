/* -------------------------------------------------------------------------- */
/*                  useState, useEffect를 사용한 커스텀 Hook 만들기                */
/* -------------------------------------------------------------------------- */

// custom Hook을 만들 때는 이름이 반드시 use로 시작해야 함

import { useEffect, useState } from "react"

function useFetchUsers() {

  const [ users, setUsers ] = useState<User[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<Error | null>(null);

  const END_POINT = "https://jsonplaceholder.typicode.com/users";

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch(END_POINT);
      const data = await res.json();
      if (res.ok) setUsers(data);
    } catch(err) {
      console.error('데이터 통신에 실패했습니다.', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[])
  
  return { users, loading, error }
}
export default useFetchUsers 
