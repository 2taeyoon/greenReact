import React, { useState } from 'react';
import "./App.scss";
import TodoBoard from './components/TodoBoard';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList]  = useState([]);  //입력한 아이템을 모아줄 array

    const additem = () => {
        //console.log('inputValue는? ',inputValue);
        setTodoList([...todoList, inputValue])  //기존 Array 에 todoList에 inputValue를 추가   
        //console.log('todoList는? ',todoList);
        setInputValue('');  //인풋창 초기화
    }


    return (
        <div className="App">
        <input 
            className="input-style"
            type="text" 
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='할일을 입력해주세요'
            value={inputValue}/>
        <button onClick={additem} className="btn-style">추가</button>

        <TodoBoard todoList={todoList} />
        </div>
    );
}

export default App;
