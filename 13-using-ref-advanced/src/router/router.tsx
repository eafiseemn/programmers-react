import Home from "@/pages/Home/Home";
import Remember from "@/pages/Remember";
import AccessDom from "@/pages/AccessDom";
import ImperativeHandle from "@/pages/ImperativeHandle";
import MotionAnimation from "@/pages/MotionAnimation";

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
  },
  {
    title:'DOM Node 접근 / 조작',
    path:'/access-dom',
    element: <AccessDom />
  },
  {
    title:'명령형 핸들 노출',
    path:'/imperativeHandle',
    element: <ImperativeHandle />
  },
  {
    title:'모션 애니메이션',
    path:'/motion-animation',
    element: <MotionAnimation />
  }
]











