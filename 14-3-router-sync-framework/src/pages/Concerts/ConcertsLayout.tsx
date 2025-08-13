import { Outlet, redirect } from "react-router"

export async function clientLoader() {
  if(!localStorage.getItem('token')) {
    alert('로그인이 필요한 페이지입니다.');
    throw redirect('/auth/login');
  }

  return null;
}

clientLoader.hydrate = true; // Hydration 중에 실행해서 좀 더 안전하게 사용 가능

function ConcertsLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}
export default ConcertsLayout