import { NAV } from "@/utils/nav-config"
import { NavLink } from "react-router"

function GlobalNav() {

  const S = {
    display: "flex",
    gap: '1.5rem',
    listStyle: 'none'
  }

  
  return (
    <nav>
      <ul style={S}>
        { 
          NAV.map(nav => (
            <li key={nav.to}>
              <NavLink style={({isActive})=> ({color: isActive ? 'blue' : 'black'})} to={nav.to}>{nav.label}</NavLink>
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