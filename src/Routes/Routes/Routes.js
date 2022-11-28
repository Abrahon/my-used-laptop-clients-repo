import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from '../../Layout/Main'
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import AllSellerAllBuyer from "../../Pages/Dashboard/AllSellerAllBuyer/AllSellerAllBuyer";

import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Error from "../../Pages/Error/Error";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
                
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
           
            {
                path:'/category/:id',
                element:<PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)

            },
           
            {
                path:'/*',
                element:<Error></Error>
            }
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allsellerallbuyer',
                element:<AllSellerAllBuyer></AllSellerAllBuyer>
            },
        ]
    },
])

export default router

