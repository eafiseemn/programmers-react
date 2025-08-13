// import Root from "@/pages";
// import Home from "@/pages/Home";
// import About from "@/pages/About";
// import AuthLayout from "@/pages/Auth/AuthLayout";
// import Login from "@/pages/Auth/Login";
// import Register from "@/pages/Auth/Register";
// import RequireAuth from "@/pages/Auth/RequireAuth";
// import ConcertsHome from "@/pages/Concerts/ConcertsHome";
// import Trending from "@/pages/Concerts/Trending";
// import City from "@/pages/Concerts/City";
// import NotFound from "@/pages/NotFound";
import { loader as trendingLoader } from "@/pages/Concerts/Trending";
import { loader as userDetailLoader } from "@/pages/User/UserDetail";
import { lazy } from "react";
import { createBrowserRouter, Outlet, redirect } from "react-router";

/* Code Splitting */
const Root = lazy(() => import('@/pages'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const AuthLayout = lazy(() => import('@/pages/Auth/AuthLayout'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const RequireAuth = lazy(() => import('@/pages/Auth/RequireAuth'));

const ConcertsHome = lazy(() => import('@/pages/Concerts/ConcertsHome'));
const Trending = lazy(() => import('@/pages/Concerts/Trending'));
const City = lazy(() => import('@/pages/Concerts/City'));

const UserList = lazy(() => import('@/pages/User/UserList'));
const UserDetail = lazy(() => import('@/pages/User/UserDetail'));
const NewUser = lazy(() => import('@/pages/User/NewUser'));

const NotFound = lazy(() => import('@/pages/NotFound'));

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home, handle:{ label: 'Home', showInNav: true } },
      { path: 'about', Component: About, handle:{ label: 'About', showInNav: true } },

      /* auth route */
      {
        path: 'auth',
        Component: AuthLayout,
        children: [
          { path: 'login', Component: Login, handle:{ label: 'Login', showInNav: true } },
          { path: 'register', Component: Register, handle:{ label: 'Register', showInNav: true } },
        ]
      },

      /* concerts route */
      {
        path: 'concerts',
        Component: () => (
          <RequireAuth>
            <h2>Concerts Page</h2>
            <Outlet></Outlet>
          </RequireAuth>
        ),
        children: [
          { index: true, Component: ConcertsHome, handle:{ label: 'Concerts', showInNav: true } },
          { path: ':city', Component: City },
          { 
            path: 'trending', 
            Component: Trending, 
            handle:{ label: 'Trending', showInNav: true }, 
            // Component Rendering 전에 데이터를 받아옴 -> useLoaderData()로 사용
            // 데이터가 fetch가 안되면 렌더링에 실패할 수 있기 때문에, default 데이터를 hydrateFallback으로 넣어줘야함
            HydrateFallback: () => <div>데이터 로딩 중...</div>,
            // loader: async () => {
            //   try {
            //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
            //     return res.json();
            //   } catch {
            //     console.error('fetch 실패');
            //   }
            // },
            loader: trendingLoader,
            // routes 내에서 lazy 처리
            // lazy: async () => {
            //   const mod = await import('@/pages/Concerts/Trending');

            //   return {
            //     Component: mod.default,
            //     loader: mod.loader
            //   }
            // }
          },
        ]
      },

      /* users route */
      {
        path: 'users',
        Component: UserList,
        handle:{ label: 'Users', showInNav: true },
        HydrateFallback: () => <div>데이터 로딩 중...</div>,
        loader: trendingLoader,
        children: [
          {
            path: ':userId', 
            Component: UserDetail, 
            // HydrateFallback: () => <div>데이터 로딩 중...</div>,
            // Component 내부에 Suspense가 있으면 Hydrate 안써도 됨
            loader: userDetailLoader
          },
          {
            path: 'new',
            Component: NewUser,
            // react-router의 Form submit 이후 action 정의
            action: async ( { request } ) => {
              const formData = await request.formData();
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;

              console.log(name,email);
              // 서버에 Insert 통신
              // const { data, error } = await supabase.from('users').insert({name, email});

              return redirect('/users');
            }
          }
        ]
      },
      
    ]
  },
  { path: '*', Component: NotFound }

])

/*

element: <Home /> (ReactNode) 
JSX Element를 직접 전달하는 방식 (v6+)
이미 렌더링 된 React Element를 라우터에게 전달하는 방식
매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy loading) 매우 불편함
const a = Root() 느낌

Component: Home (ComponentType<>{})
컴포넌트 함수 본문 자체를 전달하는 방식 (v7+)
컴포넌트에 JSX를 리턴하는 함수를 연결할 수도 있음
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
라우터가 필요할 때만 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root 느낌

*/