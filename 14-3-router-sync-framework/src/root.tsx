/* Framework mode에서는 index.html 대신 root의 Layout() 사용 */

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import GlobalNav from "./components/GlobalNav";

export function HydrateFallback() {
  return <div style={{ padding: 16 }}> App Loading ... </div>
}


export function Layout( {children}:{ children:React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>React-Router Framework</title>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://reactrouter.com/favicon-light.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <>
      <header style={{ display: "flex", justifyContent:"space-between", alignItems:"center", padding:8, borderBottom: '1px solid #eee'}}>
        <h1>Festival🎏</h1>
        <GlobalNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}