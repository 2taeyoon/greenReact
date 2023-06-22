import React from 'react'
import style from './Button1.module.css' // 고유 이름 설정

function Button1() {
    return ( // 고유 css 모듈 가져오기
        <button className={style.button}>Button1</button>
    )
}

export default Button1;