import type { AppRoute } from "@/@types/global";

export function getNavItems( navigation:AppRoute[] ) {
  const filtered = navigation.filter( item => item.display === undefined );

  const navigationItems = filtered.map(( { path, text } ) => ({ path, text }));

  return navigationItems;
}