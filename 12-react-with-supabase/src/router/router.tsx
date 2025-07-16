import Home from "@/pages/Home";
import Login from "@/pages/Login";

export const routes = [
  {
    title: 'Main',
    path: '/',
    element: <Home />
  },
  {
    title: 'Products',
    path: '/Product',
    element: <div>Product Page</div>
  },
  {
    title: 'Contact',
    path: '/Contact',
    element: <div>Contact Page</div>
  },
  {
    title: 'Login',
    path: '/Login',
    element: <Login />
  },
  {
    title: 'Register',
    path: '/Register',
    element: <div>Register</div>
  },
]