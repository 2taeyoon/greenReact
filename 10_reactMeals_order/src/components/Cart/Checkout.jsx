import React, { useRef, useState } from 'react';
import classes from "./Checkout.module.css"


const isEmpty = (value) => value.trim() === '';
const isEleven = (value) => value.trim().length === 11;

const Checkout = ({onConfirm, onClick}) => {
    const [ formInputsValidity, setFormInputsValidity ] = useState({
        name: true,
        address: true,
        tel: true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const telInputRef = useRef();
    
    const confirmHandler = (event)=>{
        event.preventDefault();

        // 입력값 받아오기
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredTel = telInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredTelIsValid = !isEmpty(enteredTel) && isEleven(enteredTel) && Number(enteredTel);

        const formIsValid = enteredNameIsValid && enteredAddressIsValid && enteredTelIsValid;

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            tel: enteredTelIsValid
        })

        if(!formIsValid){
            return alert('모든 필드를 입력해주세요.');
        }

        // 검증후 데이타를 Cart.jsx로 넘겨줌
        onConfirm({
            name: enteredName,
            address: enteredAddress,
            tel: enteredTel
        });
    }

    const nameClasses = `${ classes.control } ${ formInputsValidity.name ? '' : classes.invalid }`;
    const adressClasses = `${ classes.control } ${ formInputsValidity.address ? '' : classes.invalid }`;
    const telClasses = `${ classes.control } ${ formInputsValidity.tel ? '' : classes.invalid }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">이름</label>
                <input type="text" id='name' ref={nameInputRef}/>
                { !formInputsValidity.name && <p>이름을 입력해주세요</p> }
            </div>
            <div className={adressClasses}>
                <label htmlFor="adress">주소</label>
                <input type="text" id='adress' ref={addressInputRef}/>
                { !formInputsValidity.address && <p>주소를 입력해주세요</p> }
            </div>
            <div className={telClasses}>
                <label htmlFor="tel">핸드폰 번호&#40;숫자 11자리&#41;</label>
                <input type="text" id='tel' ref={telInputRef}/>
                { !formInputsValidity.tel && <p>핸드폰 번호를 올바르게 입력해주세요&#40;숫자만 11자리&#41;</p> }
            </div>
            <div className={classes.action}>
                <button className={classes['button-outline']} onClick={onClick}>Cancel</button>
                <button className={classes.button}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;