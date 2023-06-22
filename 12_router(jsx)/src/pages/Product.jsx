import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
    let [query, setQuery] = useSearchParams();
    console.log('query.get?? ', query.get('name'))

    return (
        <>
            <h1>전체상품 보여주는 페이지</h1>
            <h2>주소창에 쿼리값 넣어보기-</h2>
            -쿼리값을 넣어줘도 페이지는 항상그대로<br />
            -파라미터와 다른점
        </>
    )
}

export default Product