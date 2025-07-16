import { useContext, useId, useState } from 'react';
import S from './Login.module.css';
import supabase from '@/supabase/supabase';
import Swal from 'sweetalert2';
import { RouterContext } from '@/router/RouterProvider';

function Login() {

  const userId = useId();
  const pwId = useId();

  const [ userEmail, setUserEmail ] = useState<string>('');
  const [ userPassword, setUserPassword ] = useState<string>('');
  const [ error, setError ] = useState<string | null>(null);
  const { setHistoryRoute } = useContext(RouterContext)!;

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.id === userId) {
      setUserEmail(e.target.value);
    } else {
      setUserPassword(e.target.value);
    }
  }

  async function authLogin() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    }) 
      if(data.user?.aud === 'authenticated') {
        // console.log( '로그인 성공!', data );
        Swal.fire({
          title: "로그인 성공!",
          text: "메인 페이지로 이동합니다.",
          icon: "success"
        }).then(()=>{
          history.pushState(null, '', '/');
          setHistoryRoute('/');
        });
      } else if(error) {
        console.log(error.message);
        setError(error.message);
      }
    } catch(err) {
      console.error('로그인에 실패했습니다.', err)
    }
    
  }

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authLogin();
  }
  
  return (
    <div className={S.container}>
      <div>
        <form onSubmit={handleLogin}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일 :</label>
            <input 
              id={userId}
              type="email" 
              name="email"
              required
              aria-required
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호 :</label>
            <input 
              id={pwId}
              type="password" 
              name="password"
              required
              aria-required
              onChange={handleInput}
            />
          </div>
          <button type="submit">로그인</button>
          {
            error && <p style={{
              paddingTop: "1rem",
              color: "red",
              fontSize: "14px"
            }}>잘못된 아이디 또는 비밀번호입니다.</p>
          }
          <hr />
          <a href="#">아직 Avie Muah 회원이 아니신가요?</a>
        </form>
      </div>
    </div>
  )
}
export default Login