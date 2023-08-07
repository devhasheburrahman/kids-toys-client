import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';
import MyToys from '../Pages/MyToys/MyToys';
import AllToys from '../Pages/AllToys/AllToys';
import AddToys from '../Pages/AddToys/AddToys';
import Error from '../Pages/Home/Error/Error';
import Blog from '../Pages/Shared/Blog/Blog'; 
import ShopCategory from '../Pages/ShopCategory/ShopCategory';
import Update from '../Pages/MyToys/Update/Update';
import Public from '../Layout/public';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Details from '../Pages/Details/Details';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/mytoys',
                element: <MyToys />
            },
            {
                path: '/details/:id',
                element: <PrivateRouter> <Details /> </PrivateRouter>
            },
            {
                path: '/allToys',
                element: <AllToys />
            },
            {
                path: '/addToys',
                element: <AddToys />
            },
            {
                path: '/update/:id',
                element: <Update />,

            },

            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '/*',
        element: <Public />
    }
]);

export default router;