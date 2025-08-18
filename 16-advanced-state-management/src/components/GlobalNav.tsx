import { navigationItems } from "@/router/router"
import tw from "@/utils/tw";
import { useState } from "react"
import { NavLink } from "react-router";

function GlobalNav() {

  const [ items ] = useState(navigationItems);

  const baseNavClasses = "text-sm py-2 px-4 text-indigo-800/70 rounded-full hover:text-indigo-800";

  return (
    <nav className="bg-white">
      <h2 className="sr-only">페이지 탐색</h2>
      { items.length > 0 && (
        <ul className="flex gap-4 px-8 py-4 w-4/5 max-w-6xl justify-center mx-auto">
        {
          items.map( (item, index) => (
            <li key={item.path ?? index}>
              <NavLink 
                to={item.path}
                end={item.path?.endsWith('/') ?? false}
                className={({ isActive }) => isActive ? 
                  tw(baseNavClasses, "text-indigo-900 bg-indigo-100/40 border border-indigo-100/70 font-semibold") : 
                  baseNavClasses }
              >{item.text}</NavLink>
            </li>
        ))}
        </ul>
      )}
    </nav>
  )
}
export default GlobalNav



/* tailwind width
 * w-1/2 -> width: 50%
 * w-1/3 -> width: 33.3%
 * w-2/3 -> width: 66.6%
 * w-4/5 -> width: 80%
 * w-11/12 -> width: 91.7%
 */
