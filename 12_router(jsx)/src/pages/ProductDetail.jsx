import React from 'react';
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const { id } = useParams();

    console.log(id);
    return (
        <div>
            <p>ProductDetail  - 제품 상세페이지</p>
            제품의 아이디는 <h1>{id} </h1>
        </div>
    )
}

export default ProductDetail