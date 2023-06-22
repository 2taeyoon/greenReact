import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();

    const goSearch = () => {
        navigate('/products?q=summer');
        //검색조건을 추가했다고 가정
    }

    return (
        <>
            <h1> HOME-대문페이지입니다</h1>
            <button onClick={goSearch}>여름신상검색</button>
        </>
    )
}

export default Home