import './App.scss';
import { useState } from 'react';
import Products from './Products';



function App() {
    const [showProducts, setShowProducts] = useState(true);

    return (
        <div className="App">
            <button onClick={() => setShowProducts((show) => !show)}>잘생긴 사람 보기</button>
            {showProducts && <Products />}
            <hr/>
            <div>
                <dl>
                    <dt>useEffect</dt>
                    <dd>React Hooks의 일종</dd>
                    <dd>라이프사이크 훅(생애주기) - 마운드 / 언마운드 / 업데이트(deps)</dd>
                    <dd>deps를 비어있는 배열로 만들어 놓으면 처음 1번만 마운드 된다</dd>
                    <dd>useEffect(콜백함수, deps)</dd>
                    <dd>콜백함수마지막 부분에 retrun&#40;&#41; =&#62; &#123; &#125;함수로 언마운드 설정</dd>
                </dl>
            </div>
        </div>
    );
}

export default App;
