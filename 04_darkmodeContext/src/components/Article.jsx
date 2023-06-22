import React, { useContext } from 'react'
import { DarkmodeContext } from '../context/DarkmodeContext.jsx'

export default function Article() {
    const { darkmode, toggleDarkMode } = useContext(DarkmodeContext);
    const all = document.querySelector('body');
    return (
        <div className='article'>      
            <p>
                <b>Article- </b>{darkmode ? all.classList.add('active') : all.classList.remove('active') }
                <button onClick={toggleDarkMode}>Dark&Light</button>
            </p>
        </div>
    )
}