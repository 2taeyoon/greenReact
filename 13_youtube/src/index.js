import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import NotFound from './page/NotFound';
import Videos from './page/Videos';
import VideoDetail from './page/VideoDetail';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Videos /> },
            { path: '/videos', element: <Videos /> },
            { path: '/videos/watch/:videoId', element: <VideoDetail /> },
            { path: '/videos/:keyword', element: <Videos /> }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
