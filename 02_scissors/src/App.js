import React, { useState } from 'react';
import './App.scss';
import Box from './components/Box';

function App() {

    const [ userSelect, setUserSelect ] = useState(null); //유저의 선택 변수 userSelect와 변수를 업데이트하는 함수 setUserSelect 생성
    const [ computerSelect, setComputerSelect ] = useState(null); //컴퓨터의 선택 변수 computerSelect와 변수를 업데이트하는 함수 setComputerSelect 생성
    const [ result, setResult ] = useState(''); //결과를 관리하는 변수 result와 변수를 업데이트하는 함수 setResult 생성

    const choice = {  //객체를 가지고 있는 속성 3개를 객체 형태로 생성, 즉 가위바위보 생성
        scissor:{name:'Scissor', img:'scissor.png'},
        rock:{name:'Rock', img:'rock.png'},
        paper:{name:'Paper', img:'paper.png'}
    }

    const play = (userChoice)=>{   //유저가 선택한 가위, 바위, 보
        setUserSelect(choice[userChoice]);  // choice 객체의 아이템을 userSelect 변수에 업데이트

        let computerChoice = randomChoice();  //컴퓨터 결과값을 변수 computerChoice에 저장
        setComputerSelect(computerChoice);  //컴퓨터 결과값을 computerSelect 상태 변수에 업데이트
        const aa = judgement(choice[userChoice], computerChoice); //승패를 가리는 함수를 호출하여 결과값을 변수 aa에 저장
        setResult(aa) ;  //승패 결과값을 result 상태 변수에 업데이트
    }
    
    const judgement = (user,computer)=>{  //유저와 컴퓨터의 승패를 가리는 함수
        if(user.name === computer.name) return 'tie';  //무승부일 때
        else if (user.name === 'Rock') return computer.name === 'Scissor' ? 'win' : 'lose';  //유저가 바위를 선택했을 때
        else if (user.name === 'Scissor') return computer.name === 'Paper' ? 'win' : 'lose';  //유저가 가위를 선택했을 때
        else if (user.name === 'Paper') return computer.name === 'Rock' ? 'win' : 'lose';
    }

    const randomChoice = () => {

        let itemArray = Object.keys(choice); //choice 객체의 키값만 뽑아서 배열로 반환
        let randomItem = Math.floor(Math.random() * itemArray.length);     
        let final = itemArray[randomItem];

        return choice[final]; // choice 객체에서 final 변수에 저장된 키 값 반환
    }

    return (
        <>
            <div className='main'>
                <Box title='Mine' item={userSelect} result={result}/>
                <Box title='Computer' item={computerSelect} result={result}/>
            </div>
            <div className='main'> 
                <button onClick={()=>play('scissor')}>가위</button>
                <button onClick={()=>play('rock')}>바위</button>
                <button onClick={()=>play('paper')}>보</button>
            </div>
            <p className='main resultP'>{result}</p>
        </>
    );
}

export default App;
