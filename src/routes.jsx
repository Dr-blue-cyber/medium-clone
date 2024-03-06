import React from 'react'
import { NewStory } from './pages/NewStory';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Logout } from './pages/Logout';
import { Login } from '@mui/icons-material';

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/logout",
                element: <Logout />
            },
            {
                path: "/new-story",
                element: <NewStory />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
        ]
    }
]


export default routes;