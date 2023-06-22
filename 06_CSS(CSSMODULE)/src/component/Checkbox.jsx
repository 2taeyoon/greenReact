import React from 'react'
import cx from './Checkbox.module.scss'
import { MdUpdate, MdUpdateDisabled } from "react-icons/md";

const Checkbox = ({children, checked, onChange}) => {
    return (
        <div className={cx.checkbox}>
            <label>
                <input type="checkbox" checked={checked} onChange={onChange}/>
                {/* { checked ? "동의" : "비동의" } */}
                { checked ? <MdUpdate className={cx.checked}/> : <MdUpdateDisabled /> }
            </label>
            <br/>
            <p>{children}</p>
        </div>
    )
}

export default Checkbox;