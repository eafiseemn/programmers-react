import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '@/auth/AuthProvider';
import Swal from 'sweetalert2';

function Header() {
  
  const { isAuth, logout } = useAuth();
  // console.log(user, isAuth);
  
  const visibleRoutes = routes.filter(({title})=>{
    if(isAuth) return title !== 'Login' && title !== 'Register';
    return title !== 'Register';
  });

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
        </ul>
      </nav>
    </header>
  )
}
export default Header