import React from 'react'

export default function Box(props) {
    //console.log('props? ',props)

    //win, lose가 유저, 컴퓨터에 반대로 나오게
    let result;  
    if(props.title === 'Computer' && props.result !== 'tie' && props.result !== '' ){
        result = props.result ==='win' ? 'lose' :  'win'; 
    } else {
        result = props.result;
    }

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img src={props.item && props.item.img} alt="" className='item-img'/>
            <h2>{result}</h2>
        </div>
    )
}