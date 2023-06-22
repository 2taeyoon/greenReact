import './App.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Works from './pages/Works';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Home/>
                <Link to="works">works</Link>
                <br/>
                <Link to="profile">profile</Link>
            </div>
        ),
        errorElement: <NotFound/>
    },
    {
        path: "/works",
        element: <Works/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;