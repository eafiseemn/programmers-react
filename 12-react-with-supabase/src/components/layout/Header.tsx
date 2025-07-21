import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '@/auth/AuthProvider';
import Swal from 'sweetalert2';
import { getAvatarUrl } from '@/api/getAvatarUrl';
import { useEffect, useState } from 'react';

function Header() {
  
  const { isAuth, user, logout } = useAuth();
  // console.log(user, isAuth);

  const [ avatarUrl, setAvatarUrl ] = useState< string | null >(null);
  const [ isAvatarLoaded, setIsAvatarLoaded ] = useState<boolean>(false);

  const visibleRoutes = routes.filter(({title})=>{
    if(isAuth) return title !== 'Login' && title !== 'Register' && title !== 'ProductDetail';
    return title !== 'Register' && title !== 'ProductDetail';
  });

  useEffect(()=>{
  //   if(isAuth) {
  //   let storageKey = ''
  //   for (let i=0; i < localStorage.length; i++ ) {
  //     storageKey = localStorage.key(i) || '';
  //     if(storageKey?.endsWith('-auth-token')) break;
  //   }

  //   const tokenInfo = JSON.parse(localStorage.getItem(storageKey)!);
  //   const userId = tokenInfo?.user.id;
  //   getAvatarUrl(userId)
  //   .then(res => setAvatarPreview(res));
  // }
  //   return setAvatarPreview(null);

    const fetchAvatarUrl = async () => {
      if(user) {
        const url = await getAvatarUrl(user.id);
        setAvatarUrl(url);
        setIsAvatarLoaded(true);
      }
    }
    fetchAvatarUrl();

  //   return {
  //     setAvatarUrl(null);
  //     setIsAvatarLoaded(false);
  // }
  }, [user])
  

  const handleLogOut = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    Swal.fire({
      text: "정말 로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "로그아웃",
      // cancelButtonColor: "#d33",
      cancelButtonText: "돌아가기",
      // theme: 'dark'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  }

  return (
    <header className={S.header}>
      <h1><img src='/logo.png'/></h1>
      <nav>
        <h2 className='a11y-hidden'>메인 메뉴</h2>
        <ul>
          {visibleRoutes.map(el => (
            <li key={el.path}>
              <NavLink to={el.path}>{el.title}</NavLink>
            </li>
          ))}
          {
            isAuth && (
              <li key="/logout">
                <a onClick={handleLogOut} href='#'>Logout</a>
              </li>)
          }
          { isAvatarLoaded && 
          <li>
            <img src={avatarUrl || '/defaultProfile.jpg'}
              style={{
                width: "25px",
                height: "25px",
                border: '1px solid #fff',
                borderRadius: '50%',
                display: 'inline-block'
              }}
            />
           </li>}
        </ul>
        
      </nav>
    </header>
  )
}
export default Header