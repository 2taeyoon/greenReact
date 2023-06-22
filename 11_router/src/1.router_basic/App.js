import './App.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <p>Hello World</p>
                <Link to="works">works</Link>
            </div>
        ),
    },
    {
        path: "/works",
        element: <p>내 작업물!</p>,
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