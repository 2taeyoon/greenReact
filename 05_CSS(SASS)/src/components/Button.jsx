import React from 'react'
import './Button.scss'
import classNames from 'classnames'

const Button = ({
    children, 
    size, 
    color, 
    outline, 
    fullWidth, 
    //onClick
    ...rest // 축약
}) => {
    return (
        <button className={classNames('Button', size, color, {outline, fullWidth} )} {...rest} /*onClick={onClick}*/>{children}</button>
    )
}
// classNames library를 사용하지 않는다면??
// className={`Button ${size} ${color} ${outline ? 'outline' : ''} ${fullWidth ? 'fullWidth' : ''}`}>

Button.defaultProps = { size:"medium", color: 'blue' }
export default Button;

// <button className={["Button", size].join(" ")}></button>    join은 배열을 합쳐주는것 그러므로 결과값은 Button size
// <button className={`Button ${size}`}</button>
// yarn add classnames - classNames 라이브러리
// 클라스 여러개를 변수처럼 사용