import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/Product";
import ProductDetail from "@/pages/ProductDetail";
import Register from "@/pages/Register";

export const routes = [
  {
    title: 'Main',
    path: '/',
    element: <Home />
  },
  {
    title: 'Products',
    path: '/Product',
    element: <Product />
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
    element: <Register />
  },
  {
    title: 'ProductDetail',
    path: '/Product/:id',
    element: <ProductDetail />
  },
]