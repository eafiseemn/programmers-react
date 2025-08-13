function useAuth() {
  
  // 서버 통신 -> 로그인 된 유저 | 게스트 구분
  const isAuth = true;

  return { isAuth }

}

export default useAuth