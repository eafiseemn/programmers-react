import GlobalNav from "@/components/GlobalNav"
import { Outlet } from "react-router"

function Root() {

  const S = {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '100vw',
    height: '100vh'
  }

  const headerS = {
    width: "95%",
    borderBottom: "1px solid black",
    padding: "0.3rem 1rem",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  }

  const footerS = {
    borderTop: "1px solid black",
    padding: "1rem"
  }

  return (
    <div style={S}>
      <header style={headerS}>
        <h1>Festival🎏</h1>
        <GlobalNav />
      </header>
      <main style={{"flex":1}}>
        <Outlet></Outlet>
      </main>
      <footer style={footerS}>
        <small> &copy; 2025 Programmers DevCourse</small>
      </footer>
    </div>
  )
}
export default Root