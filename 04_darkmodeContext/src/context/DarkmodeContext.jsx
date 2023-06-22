import { createContext, useState } from 'react';

export const DarkmodeContext = createContext();
// context 객체를 만들어 줌, 컴포넌트처럼 사용됨. 데이터를 담고 있음


// 함수(컴포넌트)정의, 데이터를 보여줄 우산
export function DarkmodeProvider({children}){ // 다크모드인지 아닌지 검사
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode((mode) => !mode); // 이전 모드를 받아와서 반대로
    }

    return(
        <DarkmodeContext.Provider value={ {darkmode, toggleDarkMode} }>
            {children}
        </DarkmodeContext.Provider>
    )
}

// 자식 컴포넌트와 공유하고 싶은 데이터들은 value에 지정