import { routes } from "@/router/routes";
import extractNavItems from "@/utils/extractNavItems";
import { NavLink } from "react-router"

function GlobalNav() {

  const S = {
    display: "flex",
    gap: '1rem',
    listStyle: 'none'
  }

  const navList = extractNavItems(routes.routes);
  
  return (
    <nav>
      <ul style={S}>
        { 
          navList.map(nav => (
            <li key={nav.path}>
              <NavLink style={({isActive})=> ({color: isActive ? 'blue' : 'black'})} to={nav.path}>{nav.label}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default GlobalNav


// 그냥 페이지만 이동할 땐 Link,
// Navigator처럼 현재 위치와 나머지 링크를 표시해야할 땐 NavLink