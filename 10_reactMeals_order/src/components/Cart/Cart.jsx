//모달팝업 안에 들어갈 내용
import React, { useContext, useState } from 'react'
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from '../../store/cart-context'
import Checkout from './Checkout'


const Cart = (props) => {
    const [ isCheckout, setIsCheckout ] = useState(false); // 주문시 주소 입력부분이 보이고 안 보이고
    const [ isSubmitting, setIsSubmitting ] = useState(false); // 제출 중 표시
    const [ didSubmit, setDidSubmit ] = useState(false); // 제출 완료

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0; //장바구니에 주문이있음
    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }


    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    <div>
                        <h2>{item.name}</h2>
                        <div>
                            <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
                            <span className={classes.amount}>x {item.amount}</span>
                        </div>
                    </div>
                    <div className={classes.btns}>
                        <button onClick={() => cartItemRemoveHandler(item.id)}>-</button>
                        <button onClick={() => cartItemAddHandler(item)}>+</button>
                    </div>
                </li>
            ))}
        </ul>
    )

    // 입력한 데이터를 Firebase 보내는 함수
    const submitOrderHandler = async (userData)=>{
        setIsSubmitting(true);
        //console.log('userData',userData);
        const response = await fetch('https://reactmeals11-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems:cartCtx.items
            })
            
        })
            .then(()=>{
                alert('주문이 완료되었습니다');
            })
            .catch((error)=>{
                alert(`주문 중에 오류가 발생했습니다 에러 코드: ${error}`)
            })

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart(); // 제출 완료 후에 비워줌
    }

    const modalActions = (
        <div className={classes.action}>
            <button className={classes['button-outline']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={()=>setIsCheckout(true)}>Order</button>}
        </div>
    )

    // Modal안에 들어갈 내용을 상수로
    const cartModalContent = 
        <>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            { isCheckout && <Checkout onClick={props.onClose} onConfirm={submitOrderHandler}/> }
            { !isCheckout && modalActions }
        </>;

    // 제출하는 중일 때 표시되는 내용
    const isSubmittingModalContent = <p className={classes.submitting}>주문하고 있는 중입니다.</p>;

    // 제출 완료 후 표시되는 내용
    const didSubmitModalContent =
        <>
            <p>주문을 완료했습니다.</p>
            <div className={classes.action}>
                <button className={classes['button-outline']} onClick={props.onClose}>Close</button>
            </div>
        </>;
    return (
        
        <Modal onClose={props.onClose}>
            { isSubmitting && isSubmittingModalContent }
            { !isSubmitting && !didSubmit && cartModalContent }
            { !isSubmitting && didSubmit && didSubmitModalContent }
        </Modal>
    )
}

export default Cart;