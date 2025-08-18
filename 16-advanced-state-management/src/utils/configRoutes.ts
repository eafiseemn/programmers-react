import type { AppRoute } from "@/@types/global"
import type { IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router"

// use Custom setting navigation:AppRoute[] => return RouteObject[]
export const configRoutes = ( navigation:AppRoute[] ):RouteObject[] => {

  return  navigation.map( item => {
    const { children, path, ...routeProps } = item;

    let route:RouteObject;

    // index route 조건 처리 : path가 빈 문자열이거나 '/'일 경우 index
    const isIndex = path === '' || path === '/';

    if ( isIndex ) {
      route = { index: true, ...routeProps } as IndexRouteObject;
    } else {
      route = { path, ...routeProps } as NonIndexRouteObject;
    }

    // children 은 재귀로 동일한 처리
    if ( children && children.length > 0 ) {
      route.children = configRoutes(children);
    }

    return route;
  } )
}