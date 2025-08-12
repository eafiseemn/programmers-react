import useAuth from "@/hook/useAuth"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function RequireAuth( {children}:{children:React.ReactNode}) {

  const { isAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      alert("로그인이 필요한 페이지입니다.");
      navigate('/auth/login', 
        { 
          state: { from: location }, 
          replace: true,
          preventScrollReset: true
        } );
      // state: 로그인 성공 후 location.state.from 으로 redirect
      // replace: 뒤로가기 막기
      // preventScrollReset: 다른 페이지 넘어갈 때 스크롤 맨 위로 리셋되는 동작 차단
    }
  }, [isAuth])

  return (
    <>{children}</>
  )
}
export default RequireAuth