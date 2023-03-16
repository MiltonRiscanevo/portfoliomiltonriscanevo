import {createBrowserRouter} from "react-router-dom"
import React from 'react'
import FirstPage from "../first_page/First_page"
import SecondPage from "../second_page/SecondPage"
import LayoutPublic from "../../layoutPublic/LayoutPublic"
import ErrorFound from "../errorFound/ErrorFound"
export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic/>,
        errorElement:<ErrorFound/>,
        children:[
            {
                index:true,
                element:<FirstPage/>
            },
            {
                path:"/about",
                element:<SecondPage/>
            }
        ]
        
    }
])

