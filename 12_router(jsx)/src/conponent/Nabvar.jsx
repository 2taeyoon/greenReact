import React from 'react'
import { Link } from 'react-router-dom'


const Nabvar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>  /
            <Link to='/about'>About</Link> /
            <Link to='/products'>Product</Link> /
            <Link to='/login'>///로그인</Link> /
            <Link to='/user'>///비밀의방</Link>
        </div>
    )
}

export default Nabvar