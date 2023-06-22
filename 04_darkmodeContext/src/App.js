import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {DarkmodeProvider} from './context/DarkmodeContext';

function App() {
    return (
        <DarkmodeProvider>
            <Header/>
            <Main/>
            <Footer/>
        </DarkmodeProvider>
    );
}

export default App;
