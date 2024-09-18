import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import About from './components/sections/About';

const router = createBrowserRouter(
    [
        {
            path: "/web",
            element: <App />,
            children: [{
                index: true,
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "Contact",
                element: <Contact />,
            },
            ]
        }
    ],
    {
        basename: "/web",
    }
);

export const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
}