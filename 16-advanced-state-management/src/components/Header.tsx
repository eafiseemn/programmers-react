import { IoLogoReact } from "react-icons/io5"
import { NavLink } from "react-router"

/**
 * fa -> FontAwesome 
 * md -> Material Design
 * fi -> Feather
 * hi -> Heroicons
 * io -> Ionicons
 * si -> Simple Icons
 * fc -> Flat Color icons
 */

function Header() {
  return (
    <header className="flex justify-center py-3 bg-white border-b border-b-indigo-500/10">
      <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full">
        <IoLogoReact className="text-indigo-800 size-7 hover:animate-spin" />
        <span className="text-indigo-800 text-sm select-none">Client-side Routing</span>
      </NavLink>
    </header>
  )
}
export default Header