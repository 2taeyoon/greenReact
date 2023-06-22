import React, { useState, useEffect,  } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]) // 불러온 json 파일 default 값
    const [checked, setCheckde] = useState(false) // 체크박스 default 값

    const change = ()=>{
        setCheckde(!checked)
        console.log('체크');
    }

    useEffect(() => {
        fetch( `data/${checked ? 'sale_' : ''}products.json` ) // `${checked ? 'data/sale_products.json' : 'data/products.json'}`
            .then(res => res.json())
            .then(data => {
                console.log('데이타를 네트워크에서 받아왔음 🔥🔥')
                setProducts(data)
            });
        return () => {   //언마운트 될때(화면에서 사라질때) 콜백하는 함수
            console.log('🧹 깨끗하게 청소하는 일을 합니다')
        }
    }, [checked]) //deps를 [] 빈 배열로 해놓으면 처음 한번만 불러온다는 뜻
    // deps에 checked가 변경될때마다 useEffect안의 함수가 발생

    return (
        <>
            <label htmlFor='sale'>🎈Check out World Class🎈</label>
            <input id='sale' type='checkbox' onChange={change} value={checked}/>
            { /* 리액트에서 for 대신에 htmlFor 사용 */}
            <ul>
                { products.map((item) => (
                    <li>
                        <article>
                            <img src={item.url} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Products
