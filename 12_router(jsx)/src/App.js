import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import User from './pages/User';
import Nabvar from './conponent/Nabvar';
import { useState } from 'react';


function App() {
    const [auth, setAuth] = useState(false);

    //컴포넌트 - auth가 true/false냐에 따라 다른 페이지를 보여주는 역할
    const PrivateRoute = () => {
        return auth ? <User /> : <Navigate to='/' />
    }
    //Navigate -컴포넌트, 리다이렉트하게 도와줌(a태그역할)

    return (
        <>
            <Nabvar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Product />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/login' element={<Login />} />
                <Route path='/user' element={<PrivateRoute />} />
            </Routes>
        </>
    );
}

export default App;
