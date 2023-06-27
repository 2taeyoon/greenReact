import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiPencilAlt } from "react-icons/hi";
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';


const Navbar = () => {
    const [ user, setUser ] = useState();

    useEffect(()=>{ // 화면이 마운트(리로드 될 때) 로그인이 되어있는지 아닌지 상태를 알아보는 함수 호출
        onUserStateChange((user)=>{
            setUser(user);
            console.log('user',user)
        });
    },[])

    return (
        <div className='border-b border-slate-300'>
            <div className='w-full max-w-screen-2xl m-auto'>
                <header className='flex justify-between items-center p-5'>
                    <Link to='/'>
                        <h1 className='text-xl md:text-3xl font-black'>YOONSHOP</h1>
                    </Link>
                    <nav className='flex items-center gap-4 font-black'>
                        <Link to='/products' className='px-2.5'>Product</Link>
                        <Link to='/cart' className='px-2.5'>Cart</Link>
                        { user && user.isAdmin && (<Link to='/products/new' className='px-2.5'><HiPencilAlt /></Link>)}
                        { !user && <button onClick={ login } className='bg-brand text-white w-20 h-9 rounded-full hover:contrast-125'>로그인</button> }
                        { user && <User user={ user } handleLogout={ logout }/> }
                        {/* { user.isAdmin && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '72px' }}>너는 어드민이다 짜식아</p> } */}
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Navbar