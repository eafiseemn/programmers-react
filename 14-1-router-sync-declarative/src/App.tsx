import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import NotFound from "./pages/NotFound"
import ConcertsHome from "./pages/Concerts/ConcertsHome"
import Trending from "./pages/Concerts/Trending"
import AuthLayout from "./pages/Auth/AuthLayout"
import Root from "./pages"
import City from "./pages/Concerts/City"

function App() {
  return (
    <div style={{display:'flex'}}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            {/* auth route */}
            <Route path="auth" element={<AuthLayout />}>
            {/* prefix 그룹화 (~~/auth/login, ~~/auth/register, ...) */}
            {/* 한 그룹 내 공통 레이아웃을 element로 지정 + Outlet으로 하위 페이지 처리 */}
              <Route index path="login" element={<Login />} /> 
              {/* auth 그룹의 메인 페이지 = index로 지정 */}
              <Route path="register" element={<Register />} />
            </Route>

            {/* concert route */}
            <Route path="concerts">
              <Route index element={<ConcertsHome />} />
              <Route path="trending" element={<Trending />} />
              <Route path=":city" element={<City />} />
            </Route>
          </Route>

          {/* 404 : * path */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App