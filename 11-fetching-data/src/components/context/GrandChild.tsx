/* -------------------------------------------------------------------------- */
/*                        Props Drilling / context API                        */
/* -------------------------------------------------------------------------- */

import { useUserContext } from "@/hook/useUserContext"
import { useTheme } from "./ThemeContext";

function GrandChild({username:propname}:{username:string}) {
// function GrandChild() {

  const { username, setUsername } = useUserContext();
  const { theme:{colors, spacing}, toggleTheme } = useTheme();

  return (
    <div style={{
      background: colors.background,
      color: colors.text,
      border: '1px solid grey',
      // padding: '10px'
      padding: spacing.md,
    }}>
      <h4 style={{
        color: colors.primary
      }}
      >(GrandChild) 바뀌었나?</h4>
      <hr></hr>
      <p style={{
        marginBottom: spacing.sm,
      }}>안녕하세요, {propname} 님!</p>
      <p style={{
        marginBottom: spacing.lg,
      }}>안녕하세요, {username} 님!</p>
      <button type="button" onClick={()=>{
        setUsername('큰달')
      }}>나도 사용자 변경!</button>
      {' '}
      <button type="button" onClick={toggleTheme}>테마 변경!</button>
    </div>
  )
}
export default GrandChild