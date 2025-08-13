import { index, layout, prefix, route, type RouteConfig } from "@react-router/dev/routes"

/*
 * index : 해당 페이지에서 사용될 메인 페이지를 지정합니다.
 * route : 이동할 경로와 렌더링 될 컴포넌트의 경로를 지정합니다.
 * layout : 하위 컴포넌트에서 동일하게 사용될 레이아웃을 지정합니다.
 * prefix : 경로 앞에 공통적으로 사용될 루트를 설정합니다.
 */

export default [
  // index(Main Component)
  index('./pages/Home/index.tsx'),
  // route('path', Component)
  route('about', './pages/About/index.tsx'),
  // 공통 레이아웃은 layout으로 불러오기
  layout("./pages/Auth/AuthLayout.tsx", [
    // prefix 는 전개해서 children으로 추가
    ...prefix('auth', [
      route('login', "./pages/Auth/Login.tsx"),
      route('register', "./pages/Auth/Register.tsx")
    ])
  ]),
  // ...prefix("concerts", [
  //   index("./pages/Concerts/ConcertsHome.tsx"),
  //   route(":city", "./pages/Concerts/City.tsx"),
  //   route("trending", "./pages/Concerts/Trending.tsx"),
  // ]),

  // protect 필요할 경우
  layout("./pages/Concerts/ConcertsLayout.tsx", [
    ...prefix('concerts', [
      index("./pages/Concerts/ConcertsHome.tsx"),
      route(":city", "./pages/Concerts/City.tsx"),
      route("trending", "./pages/Concerts/Trending.tsx"),
    ])
  ]),

  ...prefix('users', [
    index("./pages/User/UserList.tsx"),
    route(":userId", "./pages/User/UserDetail.tsx"),
    route("new", "./pages/User/NewUser.tsx")
  ]),
  route("*", "./pages/NotFound/index.tsx")
] satisfies RouteConfig;
// 타입 안정성을 위해 추가 (기본 내보내기 값이 RouteConfig 타입(규격)을 충족하는지 컴파일 타임에서 체크)
