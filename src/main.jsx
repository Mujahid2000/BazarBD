import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Page/Home/Home';
import SignUpForm from './Account/SignUpForm';
import Shop from './Components/Shop';
import Categories from './Components/Categories';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import AuthProvider from './Provider/AuthProvider';
import SignInForm from './Account/SignInForm';
import Dashboard from './Dashboard/Dashboard';
import Customers from './DashboardRoute/Customers';
import Order from './DashboardRoute/Order';
import Products from './DashboardRoute/Products';
import AppliedSeller from './DashboardRoute/AppliedSeller';
import Balance from './DashboardRoute/Balance';
import Profile from './DashboardRoute/Profile';
import AddProduct from './SellerDashboard/AddProduct';
import SellerOrder from './SellerDashboard/SellerOrder';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <SignUpForm></SignUpForm>
      },
      {
        path: '/signIn',
        element: <SignInForm></SignInForm>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/categories',
        element: <Categories></Categories>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'customers',
        element: <Customers></Customers>
      },
      {
        path: 'order',
        element: <Order></Order>
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'appliedSeller',
        element: <AppliedSeller></AppliedSeller>
      },
      {
        path: 'balance',
        element: <Balance></Balance>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: 'sellerOrder',
        element: <SellerOrder></SellerOrder>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
