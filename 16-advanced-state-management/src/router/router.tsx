import type { AppRoute } from "@/@types/global";
import Home from "@/pages/Home";
// import About from "@/pages/About";
import Root from "@/Root";
import { configRoutes } from "@/utils/configRoutes";
import { getNavItems } from "@/utils/getNavItems";
import { createBrowserRouter } from "react-router";

// <nav>를 위한 custom navigation route
const navigation:AppRoute[] = [
  {
    text: "Home",
    // display: true,
    path: '',
    Component: Home
  },
  {
    text: "About",
    // display: true,
    path: "about",
    HydrateFallback: () => <p>Now Loading...</p>,
    lazy: async () => {
      const mod = await import('@/pages/About');
      return {
        Component: mod.default,
        // loader: mod.loader,
        // action: '...'
      }
    },
    // Component: About
  }
]

// use Custom setting navigation:AppRoute[] => return RouteObject[]
export const routes = [
  {
    path: '/',
    Component: Root,
    children: configRoutes(navigation) 
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
})

export default router;

export const navigationItems = getNavItems(navigation);