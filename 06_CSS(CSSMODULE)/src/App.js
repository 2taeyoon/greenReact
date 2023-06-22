import './App.scss';
import React, { useState } from 'react'
import Button1 from './component/Button1';
import Button2 from './component/Button2';
import Checkbox from './component/Checkbox';

function App() {
    const [ cc, setCc ] = useState(false);
    const change = (e) => {
        setCc(e.target.checked);
    }
    return (
        <div className="App">
            <Button1/>
            <Button2/>
            <Checkbox checked={cc} onChange={change}>
                <span className='text'>다음 약관에 모두 동의합니다.</span>
            </Checkbox>
        </div>
    );
}

export default App;
