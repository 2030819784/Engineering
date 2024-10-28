import * as React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Intercept from '@/components/404'
import { Navigate } from 'react-router-dom'

const route = [
    {
        path: '/',
        redirect: 'home',
        element: <Navigate to={'/home'}></Navigate>
    },
    {
        exact: true,
        path: 'home',
        element: <Home />
    },
    {
        exact: true,
        path: 'about',
        element: <About />
    },
    {
        path: '*',
        exact: true,
        element: <Intercept />
    }
]

export { route }