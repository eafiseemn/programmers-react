import Home from "@/pages/Home/Home";
import Remember from "@/pages/Remember/index";





export const routes = [
  {
    title:'리액트 애니메이션',
    path:'/',
    element: <Home />
  },
  {
    title:'Re-Render 없이 기억하기',
    path:'/re-render',
    element: <Remember />
  }
]











