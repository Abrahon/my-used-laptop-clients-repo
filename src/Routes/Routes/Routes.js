import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import CategoryDetails from "../../Pages/Category/CategoryDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Error from "../../Pages/Error/Error";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


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
                path:'/category',
                element:<Category></Category>
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
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
        element:<Dashboard></Dashboard>
    },
])

export default router

